import { google } from "googleapis";

let sheetsClient = null;

/**
 * Initializes the Google Sheets API client using GoogleAuth authentication
 * with the Service Account credentials.
 */
export function initializeGoogleSheets() {
    if (sheetsClient) return sheetsClient;

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
        throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not defined");
    }

    try {
        let credentials;
        try {
            credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
        } catch (parseErr) {
            console.error("Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY as JSON. Trying direct object match.");
            throw parseErr;
        }

        // Handle possible escaped newlines in the private key
        const privateKey = credentials.private_key.replace(/\\n/g, "\n");

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: credentials.client_email,
                private_key: privateKey
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        });

        sheetsClient = google.sheets({ version: "v4", auth });
        return sheetsClient;
    } catch (error) {
        console.error("Failed to initialize Google Sheets client:", error);
        throw error;
    }
}

/**
 * Appends a row of data to the Google Sheet.
 * @param {string} spreadsheetId The ID of the spreadsheet
 * @param {string} range The tab name / range (e.g., "Sheet1" or "Contacts")
 * @param {Array} rowData Array of values representing the row
 */
export async function appendRow(spreadsheetId, range, rowData) {
    try {
        const sheets = initializeGoogleSheets();
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [rowData]
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error appending row to Google Sheets (Range: ${range}):`, error);
        throw error;
    }
}

/**
 * Formats data into a row array based on headers:
 * Name | Email | Phone | Company/Agency | Service | Website Message | Budget Range | Status | Created At
 * @param {string} type "contact" or "booking"
 * @param {object} data The document data
 */
export function formatRow(type, data) {
    const createdAt = new Date().toISOString();
    
    if (type === "contact") {
        const name = data.name || "";
        const email = data.email || "";
        let phone = data.phone || data.phoneNumber || "";
        // Escape phone numbers starting with '+' to prevent Google Sheets from parsing them as formulas
        if (phone.startsWith("+")) {
            phone = `'${phone}`;
        }
        const company = data.company || data.companyName || data.agencyName || "";
        const service = data.service || "";
        
        // Website Message combines website and message fields if present
        let websiteMessage = "";
        if (data.website && data.message) {
            websiteMessage = `Website: ${data.website}\nMessage: ${data.message}`;
        } else if (data.website) {
            websiteMessage = data.website;
        } else if (data.message) {
            websiteMessage = data.message;
        }

        // Budget Range can also hold clientCount or client count for White Label forms
        let budgetRangeVal = data.budgetRange || "";
        if (data.clientCount) {
            budgetRangeVal = `Clients: ${data.clientCount}`;
        }

        const status = data.status || "new";

        return [
            name,
            email,
            phone,
            company,
            service,
            websiteMessage,
            budgetRangeVal,
            status,
            createdAt
        ];
    } else if (type === "booking") {
        const name = data.name || "";
        const email = data.email || "";
        const phone = data.phone || "";
        const service = data.service || "";
        
        // Combine date and time slot for the Website Message column
        const websiteMessage = `Booking Slot: ${data.bookingDate} (${data.timeSlot})${data.message ? `\nMessage: ${data.message}` : ""}`;
        const budgetRange = "";
        const status = data.status || "pending";

        return [
            name,
            email,
            phone,
            "", // Company/Agency is blank for bookings
            service,
            websiteMessage,
            budgetRange,
            status,
            createdAt
        ];
    }

    return [];
}

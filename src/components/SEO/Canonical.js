import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Canonical = ({ path }) => {
    const domain = 'https://xdmedia.in';
    const canonicalUrl = `${domain}${path}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

Canonical.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Canonical;

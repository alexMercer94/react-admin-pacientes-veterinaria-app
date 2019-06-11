import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <header>
        <h1 class="text-center">{title}</h1>
    </header>
);

/**
 * PropTypes
 */
Header.protoTypes = {
    title: PropTypes.string.isRequired
};

export default Header;

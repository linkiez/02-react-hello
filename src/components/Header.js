import React from 'react';

import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header>
      <div className="bg-gray-100 mx-auto p-4">
        <h1>{children}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;



import React from "react";

import PropTypes from 'prop-types';

function Main({ children }) {
  return (<>{children}</>);
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

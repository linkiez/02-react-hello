import React from "react";

import PropTypes from "prop-types";

function Main({ children }) {
  return <main className="container mx-auto p-4">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

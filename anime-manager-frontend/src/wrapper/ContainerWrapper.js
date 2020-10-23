import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FullScreenLoader from "../components/utilityComponents/FullScreenLoader";

const ContainerWrapper = (props) => {
  const { isLoading, children, getCurrentUser, fetchAnimes } = props;

  useEffect(() => {
    getCurrentUser();
    fetchAnimes();
  }, []);

  if (isLoading) return <FullScreenLoader />;

  return <>{children}</>;
};

ContainerWrapper.defaultProps = {
  isLoading: false,
};

ContainerWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

export default ContainerWrapper;
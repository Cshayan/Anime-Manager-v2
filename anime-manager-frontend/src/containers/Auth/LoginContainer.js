import React from "react";
// import { makeStyles } from "@material-ui/core";
import LoginComponent from "../../components/Auth/LoginComponent";

// const useStyles = makeStyles((theme) => ({}));

const LoginContainer = (props) => {
  const { onRightButtonClick } = props;

  return <LoginComponent onRightButtonClick={onRightButtonClick} />;
};

export default LoginContainer;

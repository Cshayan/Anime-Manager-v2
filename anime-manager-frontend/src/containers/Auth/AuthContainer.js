import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import LoginContainer from "./LoginContainer";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import RegisterContainer from "./RegisterContainer";
import "./authStyles.css";
import { useAuthentication } from "../../custom-hooks/authHook";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    margin: "0 auto",
    marginTop: "7rem",
    "@media screen and (max-width: 600px)": {
      marginTop: 0,
      width: "90%",
    },
  },
}));

const AuthContainer = (props) => {
  const classes = useStyles();
  const [transitionState, setTransitionState] = useState(true);
  const isLoginTrue = props.location?.state?.login;
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (isLoginTrue === undefined) {
      setTransitionState(true);
      return;
    }
    setTransitionState(isLoginTrue);
  }, [isLoginTrue]);

  const onRegisterLoginButtonClick = (mode) => {
    setTransitionState(mode);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={transitionState}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <div className={classes.authContainer}>
          {transitionState ? (
            <LoginContainer onRightButtonClick={onRegisterLoginButtonClick} />
          ) : (
            <RegisterContainer
              onRightButtonClick={onRegisterLoginButtonClick}
            />
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AuthContainer;
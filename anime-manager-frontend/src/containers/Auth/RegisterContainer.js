import React from "react";
import RegisterComponent from "../../components/Auth/RegisterComponent";

const RegisterContainer = (props) => {
  const { onRightButtonClick } = props;
  return (
    <>
      <RegisterComponent onRightButtonClick={onRightButtonClick} />
    </>
  );
};

export default RegisterContainer;

import React, { memo } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "../../custom-hooks/snackbarHook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cookieAlert: {
    fontSize: 15,
    "& .MuiAlert-icon": {
      fontSize: 30,
    },
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UniversalSnackbar = (props) => {
  const {
    isSnackBarOpen,
    snackBarMessage,
    snackBarType,
    handleClose,
  } = useSnackbar();
  const classes = useStyles();

  return (
    <div>
      <Snackbar
        open={isSnackBarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          className={classes.cookieAlert}
          severity={snackBarType}
          action={
            <Button color="inherit" size="large" onClick={handleClose}>
              OK
            </Button>
          }
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default memo(UniversalSnackbar);

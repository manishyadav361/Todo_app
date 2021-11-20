import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
    padding: "20px",
  },
  filter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px 30px 0px",
  },
  completeBtn: {
    margin: "0px 10px",
  },
  button: {
    marginLeft: " 10px",
  },
  textField: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  typography: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    boxShadow: "4px 8px 15px rgba(0,0,0,0.2)",

    background: "rgb(51, 51, 160);",
    color: "white",
    padding: "8px 10px",
    borderRadius: "4px",
    marginRight: "3px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
  },
  grid: {
    margin: "4px 0px",
  },
  tick: {
    margin: "0px 5px",
    padding: "10px",
    color: "green",
    borderRadius: "8px",

    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
  },
  delete: {
    padding: "10px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  complete: {
    background: "#7FFF00",
  },
}));

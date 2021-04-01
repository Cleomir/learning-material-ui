import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
});

export const Create = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <Button
        onClick={() => console.log("Submit clicked")}
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  );
};

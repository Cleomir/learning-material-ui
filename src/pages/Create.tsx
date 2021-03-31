import { Typography, Button, Container } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";

export const Create = () => {
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

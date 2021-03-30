import { Typography, Button } from "@material-ui/core";

export const Create = () => {
  return (
    <div>
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
      >
        Submit
      </Button>
    </div>
  );
};

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { INote } from "../types/INote";

const useStyles = makeStyles({
  test: {
    border: (note: INote) => {
      if (note.category === "work") {
        return "1px solid red";
      }
    },
  },
});

export const NoteCard = ({
  note,
  handleDelete,
}: {
  note: INote;
  handleDelete: (id: string) => Promise<void>;
}) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

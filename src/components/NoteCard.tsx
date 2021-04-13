import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { green, yellow, pink, blue } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import { INote } from "../types/INote";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note: INote) => {
      switch (note.category) {
        case "work": {
          return yellow[700];
        }
        case "money": {
          return green[500];
        }
        case "todos": {
          return pink[700];
        }
        default: {
          return blue[500];
        }
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
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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

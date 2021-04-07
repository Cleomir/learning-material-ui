import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { INote } from "../types/INote";

export const NoteCard = ({
  note,
  handleDelete,
}: {
  note: INote;
  handleDelete: (id: string) => Promise<void>;
}) => {
  return (
    <div>
      <Card elevation={3}>
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

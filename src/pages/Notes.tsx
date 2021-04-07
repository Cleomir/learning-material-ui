import { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";

import { NoteCard } from "../components/NoteCard";
import { INote } from "../types/INote";

export const Notes = () => {
  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
    });

    const notesLeft = notes.filter((note) => note.id !== id);
    setNotes(notesLeft);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note: INote) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

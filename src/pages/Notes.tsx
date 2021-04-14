import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";

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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note: INote) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

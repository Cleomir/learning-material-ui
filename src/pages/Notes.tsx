import { useEffect, useState } from "react";

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      {notes.map((note: { id: number; title: string }) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
};

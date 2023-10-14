import CreateNote from "./components/CreateNote/CreateNote";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import { useLocalStorage } from "./useLocalStorage";


function App() {
  const [notes, setNotes] = useLocalStorage([], "Notes")



  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note, index) => {
        return <Notes id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
      }
      )}
      <Footer />
    </div>
  );
}

export default App;

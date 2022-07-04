import "./Notespage.css";
import {NoteEditor} from "../../components";

function Notespage(){
    return(
        <div className="notes-page">
           <NoteEditor/>
        </div>
    )
}

export {Notespage};
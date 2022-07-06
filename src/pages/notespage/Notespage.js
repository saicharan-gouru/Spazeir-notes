import "./Notespage.css";
import {NoteEditor} from "../../components";
import {Link} from "react-router-dom";
import {useNotes} from "../../contexts";
import {AiFillHome} from "react-icons/ai";
import {BiArchiveIn,BiLabel} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";


function Notespage(){
    const {notes,notesDispatch} = useNotes();
    return(
        <div className="notes-page">
            <div className="notes-nav-bar">
                <Link to="/notes" className="nav-link active"><AiFillHome/> Home</Link>
                <Link to="/trash" className="nav-link"><BsFillTrashFill/> Trash</Link>
                <Link to="/archive" className="nav-link"><BiArchiveIn/> Archive</Link>
                <Link to="/labels" className="nav-link"><BiLabel/> Labels</Link>
            </div>
           <NoteEditor/>
           <div className="notes-container">
            <h2>Existing notes <button className="button primary-red" onClick={()=>notesDispatch({type:"CLEAR_ALL"})}>Clear all</button></h2>
           {notes.length===0 && <h1>No notes here...</h1>}
           {
            notes.map(note => 
            <div className="note-container" style={{backgroundColor:note.bgcolor}}>
                <p className="note-text"><b>Title:</b>{note.title}</p>
                <p className="note-text"><b>Description:</b>{note.description}</p>
                <div>
                    <BsFillTrashFill className="icon-notes" onClick={()=>notesDispatch({type:"DELETE_NOTE",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}/>
                </div>
            </div>
            )
           }
           </div>
        </div>
    )
}

export {Notespage};
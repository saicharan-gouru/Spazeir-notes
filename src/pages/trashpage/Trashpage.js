import "./Trashpage.css";
import {Link} from "react-router-dom";
import { useNotes } from "../../contexts";
import {AiFillHome} from "react-icons/ai";
import {BiArchiveIn,BiLabel} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";

function Trashpage(){
    const {trash,notesDispatch} = useNotes();
    return(
        <div>
            <div className="notes-nav-bar">
                <Link to="/notes" className="nav-link"><AiFillHome/> Home</Link>
                <Link to="/trash" className="nav-link active"><BsFillTrashFill/> Trash</Link>
                <Link to="/archive" className="nav-link"><BiArchiveIn/> Archive</Link>
                <Link to="/labels" className="nav-link"><BiLabel/> Labels</Link>
            </div>
            <button className="button primary-red" onClick={()=>notesDispatch({type:"CLEAR_TRASH"})}>Clear trash</button>
            {trash.length === 0 && <h1>No notes here...</h1>}
            <div className="notes-container">
            {
                    trash.map(note => 
                    <div className="note-container" style={{backgroundColor:note.bgcolor}}>
                        <p className="note-text"><b>Title:</b>{note.title}</p>
                        <p className="note-text"><b>Description:</b>{note.description}</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export {Trashpage}
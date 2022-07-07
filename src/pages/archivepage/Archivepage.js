import "./Archivepage.css";
import {Link} from "react-router-dom";
import { useNotes } from "../../contexts";
import {AiFillHome} from "react-icons/ai";
import {BiArchiveIn,BiLabel} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";
import {MdUnarchive} from "react-icons/md";

function Archivepage(){
    const {archive,notesDispatch} = useNotes();
    return(
        <div>
            <div className="notes-nav-bar">
                <Link to="/notes" className="nav-link"><AiFillHome/> Home</Link>
                <Link to="/trash" className="nav-link"><BsFillTrashFill/> Trash</Link>
                <Link to="/archive" className="nav-link active"><BiArchiveIn/> Archive</Link>
                <Link to="/labels" className="nav-link"><BiLabel/> Labels</Link>
            </div>
            <button className="button primary-red" onClick={()=>notesDispatch({type:"CLEAR_ARCHIVE"})}>Clear archive</button>
            {archive.length === 0 && <h1>No notes here...</h1>}
            <div className="notes-container">
            {
                    archive.map(note => 
                    <div className="note-container" style={{backgroundColor:note.bgcolor}}>
                        <p className="note-text"><b>Title:</b>{note.title}</p>
                        <p className="note-text"><b>Description:</b>{note.description}</p>
                        <div className="white-bg single-note-features">
                            <BsFillTrashFill className="icon-notes" onClick={()=>notesDispatch({type:"DELETE_NOTE",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}/>
                            <MdUnarchive className="icon-notes" onClick={()=>notesDispatch({type:"UNARCHIVE_NOTE",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}/>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export {Archivepage}
import "./Labelspage.css";
import {Link} from "react-router-dom";
import { useNotes } from "../../contexts";
import {AiFillHome} from "react-icons/ai";
import {BiArchiveIn,BiLabel} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";
import { useState } from "react";

function filterNotesByLabel(notes,label,setLabelNotes){
    const filteredNotes = notes.filter(note => note.label === label);
    setLabelNotes(filteredNotes)
}

function Labelspage(){
    const {labels,notes} = useNotes();
    const [labelNotes,setLabelNotes] = useState([]);
    return(
        <div>
            <div className="notes-nav-bar">
                <Link to="/notes" className="nav-link"><AiFillHome/> Home</Link>
                <Link to="/trash" className="nav-link "><BsFillTrashFill/> Trash</Link>
                <Link to="/archive" className="nav-link"><BiArchiveIn/> Archive</Link>
                <Link to="/labels" className="nav-link active"><BiLabel/> Labels</Link>
            </div>
            <h3>Click on labels to see notes under them...</h3>
            {labels.length === 0 && <h1>No labels here...</h1>}
            
            <div className="labels-container">
            {
                    labels.map(label => <button onClick={()=>filterNotesByLabel(notes,label,setLabelNotes)} className="button primary-blue">{label}</button>)
            }
            <Link to="/notes"><button className="button primary-green">Add label</button></Link>
            </div>
            <div className="notes-container">
            {
                    labelNotes.map(note => 
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

export {Labelspage}
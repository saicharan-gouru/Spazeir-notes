import "./Notespage.css";
import {NoteEditor} from "../../components";
import {Link} from "react-router-dom";
import {useNotes,useNote} from "../../contexts";
import {AiFillHome,AiFillEdit} from "react-icons/ai";
import {BiArchiveIn,BiLabel} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";



function Notespage(){
    const {notes,notesDispatch} = useNotes();
    const {noteDispatch} = useNote();

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
           <div className="filters-container">
            <div className="filter">
                <p>Priority filter</p>
                <label><input onClick={()=>notesDispatch({type:"FILTER_ALL"})} type="radio" name="filter" />All</label>
                <label><input onClick={()=>notesDispatch({type:"FILTER_HIGH_PRIORITY"})} type="radio" name="filter" />High</label>
                <label><input onClick={()=>notesDispatch({type:"FILTER_LOW_PRIORITY"})} type="radio" name="filter" />Low</label>
            </div>
            <div className="filter">
                <p>Sort by priority</p>
                <label><input onClick={()=>notesDispatch({type:"SORT_LOW_TO_HIGH"})} type="radio" name="sort-by-priority" /> low to high</label>
                <label><input onClick={()=>notesDispatch({type:"SORT_HIGH_TO_LOW"})} type="radio" name="sort-by-priority" /> high to low</label>
            </div>
           </div>
           {notes.length===0 && <h1>No notes here...</h1>}
           {
            notes.map(note => 
            <div>
            <span className="label"><b>Label: </b>{note.label} <b>Priority: </b>{note.priority}</span>
            <div className="note-container" style={{backgroundColor:note.bgcolor}}>
                <p className="note-text"><b>Title:</b>{note.title}</p>
                <p className="note-text"><b>Description:</b>{note.description}</p>
                <div className="white-bg single-note-features">
                    <BsFillTrashFill className="icon-notes" onClick={()=>notesDispatch({type:"DELETE_NOTE",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}/>
                    <BiArchiveIn className="icon-notes" onClick={()=>notesDispatch({type:"ARCHIVE_NOTE",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}/>
                    <AiFillEdit className="icon-notes" onClick={()=>{noteDispatch({type:"SET_EDIT_DETAILS",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}});notesDispatch({type:"DELETE_NOTE_TO_EDIT",payload:{title:note.title,description:note.description,bgcolor:note.bgcolor,label:note.label,priority:note.priority}})}}/>
                </div>
            </div>
            
            </div>
            )
           }
           </div>
        </div>
    )
}

export {Notespage};
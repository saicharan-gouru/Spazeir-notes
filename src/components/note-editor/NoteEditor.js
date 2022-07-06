import "./NoteEditor.css";
import {useNote,useNotes} from "../../contexts";

function NoteEditor(){

    const {noteDispatch,bgcolor,title,description,label,priority} = useNote();
    const {notesDispatch} =useNotes();

    return(
        <div>
            <div className="note-editor" style={{backgroundColor:bgcolor}}>
                <h3>create new note</h3>
                <input className="note-title" value={title} type="text" placeholder="Enter title.." onChange={(e)=>noteDispatch({type:"TITLE",payload:e.target.value})} />
                <textarea className="note-desc" value={description} placeholder="Enter description.." onChange={(e)=>noteDispatch({type:"DESCRIPTION",payload:e.target.value})}></textarea>
                <div className="note-features" style={{backgroundColor:"white"}}>
                    <label>Bgcolor<input type="text" value={bgcolor} placeholder="Enter hexcode,Ex:#111" onChange={(e)=>noteDispatch({type:"BGCOLOR",payload:e.target.value})}/></label>
                    <label> Label<input type="text" value={label} placeholder="Enter label" onChange={(e)=>noteDispatch({type:"LABEL",payload:e.target.value})}/></label>
                    <label>Priority</label>
                    <label><input type="radio" name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"high"})} />High</label>
                    <label><input type="radio" name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"low"})} />Low</label>
                    <button className="button primary-blue" onClick={()=>{notesDispatch({type:"ADD_NOTE",payload:{title:title,description:description,bgcolor:bgcolor,label:label,priority:priority}}); noteDispatch({ type: "RESET" })}}>Add note</button>
                    <button className="button primary-yellow" onClick={()=>noteDispatch({type:"RESET"})}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export {NoteEditor};
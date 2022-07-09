import "./NoteEditor.css";
import {useNote,useNotes} from "../../contexts";

function NoteEditor(){

    const {noteDispatch,bgcolor,title,description,label,priority,isEdit} = useNote();
    const {notesDispatch} =useNotes();

    return(
        <div>
            <div className="note-editor" style={{backgroundColor:bgcolor}}>
                <h3 className="white-bg">{isEdit? "Update existing note" : "create new note"}</h3>
                <input className="note-title" value={title} type="text" placeholder="Enter title.." onChange={(e)=>noteDispatch({type:"TITLE",payload:e.target.value})} />
                <textarea className="note-desc" value={description} placeholder="Enter description.." onChange={(e)=>noteDispatch({type:"DESCRIPTION",payload:e.target.value})}></textarea>
                <div className="note-features white-bg">
                    <label>Bgcolor<input type="text" value={bgcolor} placeholder="Enter color name or hexcode" onChange={(e)=>noteDispatch({type:"BGCOLOR",payload:e.target.value})}/></label>
                    <label> Label<input type="text" value={label} placeholder="Enter label" onChange={(e)=>noteDispatch({type:"LABEL",payload:e.target.value})}/></label>
                    <label>Priority</label>
                    <label><input type="radio" checked={priority==="high"} name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"high"})} />High</label>
                    <label><input type="radio" checked={priority==="low"} name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"low"})} />Low</label>
                    <button className="button primary-blue" onClick={()=>{notesDispatch({type:"ADD_NOTE",payload:{title:title,description:description,bgcolor:bgcolor,label:label,priority:priority}}); noteDispatch({ type: "RESET" })}}>{isEdit ? "update note" : "Add note"}</button>
                    <button className="button primary-yellow" onClick={()=>noteDispatch({type:"RESET"})}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export {NoteEditor};
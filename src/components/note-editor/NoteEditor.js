import "./NoteEditor.css";
import {useNote} from "../../contexts";

function NoteEditor(){

    const {noteDispatch,bgcolor} = useNote();

    return(
        <div className="note-editor" style={{backgroundColor:bgcolor}}>
            <input className="note-title" type="text" placeholder="Enter title.." onChange={(e)=>noteDispatch({type:"TITLE",payload:e.target.value})} />
            <textarea className="note-desc" placeholder="Enter description.." onChange={(e)=>noteDispatch({type:"DESCRIPTION",payload:e.target.value})}></textarea>
            <div className="note-features" style={{backgroundColor:"white"}}>
                <label>Bgcolor<input type="text" placeholder="Enter hexcode" onChange={(e)=>noteDispatch({type:"BGCOLOR",payload:e.target.value})}/></label>
                <label> Label<input type="text" placeholder="Enter label" onChange={(e)=>noteDispatch({type:"LABEL",payload:e.target.value})}/></label>
                <label>Priority</label>
                <label><input type="radio" name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"high"})} />High</label>
                <label><input type="radio" name="priority" onChange={(e)=>noteDispatch({type:"PRIORITY",payload:"low"})} />Low</label>
                <button className="button primary-blue">Add note</button>
            </div>
        </div>
    )
}

export {NoteEditor};
import { createContext, useContext, useReducer } from "react";
import {noteReducer} from "../reducers";

const NoteContext = createContext();

function NoteProvider({children}){

    const [{title,description,bgcolor,label,priority,isEdit},noteDispatch] = useReducer(noteReducer,{title:"",description:"",bgcolor:"",label:"",priority:"",isEdit:false});
    
    return(
        <NoteContext.Provider value={{noteDispatch,title,description,bgcolor,label,priority,isEdit}}>
            {children}
        </NoteContext.Provider>
    )
}

const useNote = () => useContext(NoteContext);

export {NoteProvider,useNote};
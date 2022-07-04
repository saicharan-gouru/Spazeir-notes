import { createContext, useContext, useReducer } from "react";
import {noteReducer} from "../reducers";

const NoteContext = createContext();

function NoteProvider({children}){

    const [{title,description,bgcolor,label,priority},noteDispatch] = useReducer(noteReducer,{title:"",description:"",bgcolor:"",label:"",priority:""});
    
    return(
        <NoteContext.Provider value={{noteDispatch,title,description,bgcolor,label,priority}}>
            {children}
        </NoteContext.Provider>
    )
}

const useNote = () => useContext(NoteContext);

export {NoteProvider,useNote};
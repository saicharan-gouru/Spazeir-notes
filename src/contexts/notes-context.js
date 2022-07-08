import { createContext, useContext, useReducer } from "react";
import {notesReducer} from "../reducers";

const NotesContext = createContext();

function NotesProvider({children}){

    const [{notes,trash,archive,notesCopy},notesDispatch] = useReducer(notesReducer,{notes:[],trash:[],archive:[],notesCopy:[]});
    
    return(
        <NotesContext.Provider value={{notesDispatch,notes,trash,archive,notesCopy}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider,useNotes};
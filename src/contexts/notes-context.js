import { createContext, useContext, useReducer } from "react";
import {notesReducer} from "../reducers";

const NotesContext = createContext();

function NotesProvider({children}){

    const [{notes,trash,archive,notesCopy,labels},notesDispatch] = useReducer(notesReducer,{notes:[],trash:[],archive:[],notesCopy:[],labels:[]});
    
    return(
        <NotesContext.Provider value={{notesDispatch,notes,trash,archive,notesCopy,labels}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider,useNotes};
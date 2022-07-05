import { createContext, useContext, useReducer } from "react";
import {notesReducer} from "../reducers";

const NotesContext = createContext();

function NotesProvider({children}){

    const [{notes,trash,archive},notesDispatch] = useReducer(notesReducer,{notes:[],trash:[],archive:[]});
    return(
        <NotesContext.Provider value={{notesDispatch,notes,trash,archive}}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider,useNotes};
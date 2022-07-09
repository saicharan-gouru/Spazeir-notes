function notesReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_NOTE":
            return {...state, notes: [...state.notes, payload], notesCopy: [...state.notes, payload], labels: [...new Set([...state.labels, payload.label])] }
        case "CLEAR_ALL":
            return {...state, notes: [], notesCopy: [], labels: [] }
        case "DELETE_NOTE":
            return {...state, trash: [...state.trash, payload], notes: state.notes.filter(item => item.title !== payload.title), archive: state.archive.filter(item => item.title !== payload.title), notesCopy: state.notes.filter(item => item.title !== payload.title) }
        case "ARCHIVE_NOTE":
            return {...state, archive: [...state.archive, payload], notes: state.notes.filter(item => item.title !== payload.title), notesCopy: state.notes.filter(item => item.title !== payload.title) }
        case "CLEAR_TRASH":
            return {...state, trash: [] }
        case "CLEAR_ARCHIVE":
            return {...state, archive: [] }
        case "UNARCHIVE_NOTE":
            return {...state, notes: [...state.notes, payload], archive: state.archive.filter(item => item.title !== payload.title), notesCopy: [...state.notes, payload] }
        case "RESTORE":
            return {...state, notes: [...state.notes, payload], trash: state.trash.filter(item => item.title !== payload.title), notesCopy: [...state.notes, payload] }
        case "FILTER_ALL":
            return {...state, notes: state.notesCopy }
        case "FILTER_HIGH_PRIORITY":
            return {...state, notes: state.notesCopy.filter(item => item.priority === "high") }
        case "FILTER_LOW_PRIORITY":
            return {...state, notes: state.notesCopy.filter(item => item.priority === "low") }
        case "DELETE_NOTE_TO_EDIT":
            return {...state, notes: state.notes.filter(item => item.title !== payload.title), archive: state.archive.filter(item => item.title !== payload.title), notesCopy: state.notes.filter(item => item.title !== payload.title) }
        case "SORT_LOW_TO_HIGH":
            return {...state, notes: [...state.notes.filter(item => item.priority === "low"), ...state.notes.filter(item => item.priority === "high")] }
        case "SORT_HIGH_TO_LOW":
            return {...state, notes: [...state.notes.filter(item => item.priority === "high"), ...state.notes.filter(item => item.priority === "low")] }
        default:
            return state;

    }
}

export { notesReducer };
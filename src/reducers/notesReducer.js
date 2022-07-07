function notesReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_NOTE":
            return {...state, notes: [...state.notes, payload] }
        case "CLEAR_ALL":
            return {...state, notes: [] }
        case "DELETE_NOTE":
            return {...state, trash: [...state.trash, payload], notes: state.notes.filter(item => item.title !== payload.title), archive: state.archive.filter(item => item.title !== payload.title) }
        case "ARCHIVE_NOTE":
            return {...state, archive: [...state.archive, payload], notes: state.notes.filter(item => item.title !== payload.title) }
        case "CLEAR_TRASH":
            return {...state, trash: [] }
        case "CLEAR_ARCHIVE":
            return {...state, archive: [] }
        case "UNARCHIVE_NOTE":
            return {...state, notes: [...state.notes, payload], archive: state.archive.filter(item => item.title !== payload.title) }
        default:
            return state;

    }
}

export { notesReducer };
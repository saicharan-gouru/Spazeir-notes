function notesReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_NOTE":
            return {...state, notes: [...state.notes, payload] }
        case "CLEAR_ALL":
            return {...state, notes: [] }
        case "DELETE_NOTE":
            return {...state, trash: [...state.trash, payload], notes: state.notes.filter(item => item.title !== payload.title) }
        case "CLEAR_TRASH":
            return {...state, trash: [] }
        default:
            return state;

    }
}

export { notesReducer };
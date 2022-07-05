function notesReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_NOTE":

            return {...state, notes: [...state.notes, payload] }

        default:
            return state;
    }
}

export { notesReducer };
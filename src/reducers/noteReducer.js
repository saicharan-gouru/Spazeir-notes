function noteReducer(state, { type, payload }) {
    switch (type) {
        case "TITLE":
            return {...state, title: payload }
        case "DESCRIPTION":
            return {...state, description: payload }
        case "LABEL":
            return {...state, label: payload }
        case "BGCOLOR":
            return {...state, bgcolor: payload }
        case "PRIORITY":
            return {...state, priority: payload }
        case "RESET":
            return {...state, title: "", description: "", label: "", priority: "", bgcolor: "" }

        default:
            return state;
    }
}

export { noteReducer };
/* eslint-disable @typescript-eslint/no-explicit-any */
const initialStore = {
    nama_category: '',
    id_meals: '',
}

const reducer = (state = initialStore, action) => {
    if (action.type === 'CHANGE_NAMA_CATEGORY') {
        return {
            ...state,
            nama_category: action.value
        }
    }

    if (action.type === 'CHANGE_ID_MEALS') {
        return {
            ...state,
            id_meals: action.value
        }
    }

    return state
}

export default reducer
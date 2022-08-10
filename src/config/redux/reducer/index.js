/* eslint-disable @typescript-eslint/no-explicit-any */
const initialStore = {
    nama_category: 'helo',
}

const reducer = (state = initialStore, action) => {
    if (action.type === 'CHANGE_NAMA_CATEGORY') {
        return {
            ...state,
            nama_category: action.value
        }
    }

    return state
}

export default reducer
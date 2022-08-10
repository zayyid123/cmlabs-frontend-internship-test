/* eslint-disable @typescript-eslint/no-explicit-any */
const initialStore = {
    data: 'helo',
}

const reducer = (state = initialStore, action) => {
    if (action.type === 'CHANGE_DATA') {
        return {
            ...state,
            data: action.value
        }
    }

    return state
}

export default reducer
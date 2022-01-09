const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {
    currentUser: null
}

const users = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }
})
const { reducer, actions } = users;
export const {setCurrentUser} = actions;
export default reducer;

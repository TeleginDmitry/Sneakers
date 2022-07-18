import {createSlice} from '@reduxjs/toolkit'



export const storageSneakerSlice = createSlice({
    name: 'loved',
    initialState: {
        sneakers: []
    },
    reducers: {
        addLikeSneaker: (state, action) => {
            localStorage.setItem('Loved', state.sneakers)
            const lovedSneaker = localStorage.getItem('Loved')
            const find = lovedSneaker.find((el) => el.id === action.payload.id);
            if (!find) {
                lovedSneaker.push(action.payload.sneaker);
                return state.sneakers = lovedSneaker
            }
        }
    }
})



export const { addLikeSneaker } = storageSneakerSlice.actions
export default storageSneakerSlice.reducer
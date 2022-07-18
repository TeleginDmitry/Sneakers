import {configureStore} from '@reduxjs/toolkit'
import { addLikeSneaker } from '../Features/storageSneaker/storageSneakerSlice'


export const Store = configureStore({
    reducer: {
        storage: addLikeSneaker
    }
})

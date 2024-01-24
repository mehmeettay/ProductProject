import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import modalSLice from './modalSlice'

export const store = configureStore({
    reducer:{
        data:dataSlice,
        modal:modalSLice
    },

})

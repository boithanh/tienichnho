import { configureStore } from '@reduxjs/toolkit'
import testSlice from './slices/testSlice'
import xiNgauSlice from './slices/xiNgauSlice'

export default configureStore({
    reducer: {
        testSlice, xiNgauSlice
    }
})
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tePokemon: "Pi cà chú",
    he: "Điện",
    tanCong: 500
}

const testSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {}
});

export const { } = testSlice.actions

export default testSlice.reducer
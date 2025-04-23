import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    xiNgau: {
        xiNgau1: 1,
        xiNgau2: 1,
        xiNgau3: 1,
    },
    soBanThang: 0,
    soBanChoi: 0,
    banChon: "Chưa chọn"

}

const xiNgauSlice = createSlice({
    name: "xiNgau",
    initialState,
    reducers: {
        thayDoiBanChon: (state, action) => {
            state.banChon = action.payload
        },
        ketQuaNguoiChoi: (state, action) => {
            console.log("hello");
            let xiNgau1 = Math.floor(Math.random() * 6) + 1;
            let xiNgau2 = Math.floor(Math.random() * 6) + 1;
            let xiNgau3 = Math.floor(Math.random() * 6) + 1;
            state.xiNgau = { ...state.xiNgau, xiNgau1, xiNgau2, xiNgau3 }
            state.soBanChoi += 1;
            let ketQua = xiNgau1 + xiNgau2 + xiNgau3 >= 11 ? "Tài" : "Xỉu"
            if (ketQua == state.banChon) {
                state.soBanThang += 1;
            }
        }
    }
});

export const { thayDoiBanChon, ketQuaNguoiChoi } = xiNgauSlice.actions

export default xiNgauSlice.reducer
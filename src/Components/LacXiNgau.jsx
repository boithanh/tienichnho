import React from 'react'
import bgGame from "./../assets/image/bgGame.png"
import XiNgau from './XiNgau'
import KetQuaXiNgau from './KetQuaXiNgau'
import { useDispatch } from 'react-redux'
import { ketQuaNguoiChoi } from '../redux/slices/xiNgauSlice'

const LacXiNgau = () => {
    const dispatch = useDispatch();
    return (
        <div className='xiNgau' style={{ backgroundImage: `url(${bgGame})` }}>
            <h1 className='text-center p-3 mb-3 pt-5'>Game đổ xúc xắc</h1>
            <XiNgau />
            <KetQuaXiNgau />
            <div className='text-center mb-3'><button className='btn-play' onClick={() => {
                dispatch(ketQuaNguoiChoi())
            }}>Play Game</button></div>
        </div>
    )
}

export default LacXiNgau
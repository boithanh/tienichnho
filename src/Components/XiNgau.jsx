import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { array } from 'yup';
import { thayDoiBanChon } from '../redux/slices/xiNgauSlice';
import { Link } from 'react-router-dom';

const XiNgau = () => {
    const { xiNgau } = useSelector((state) => state.xiNgauSlice);
    const dispatch = useDispatch();
    return (
        <>
            <div className='position-absolute z-3 top-0'>
                <div className="text-sm text-gray-500">
                    <Link to="/" className="hover:underline">Trang chủ</Link> / 6/45 Random
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="xiNgau-container mb-3">
                            <button className='btn-xiNgau mb-3' onClick={() => {
                                dispatch(thayDoiBanChon("Tài"))
                            }}>Tài</button>
                            <div className='mb-3'>
                                {
                                    //Cách render ra nhiều thẻ html react nhanh nhất ko cần tạo mảng
                                    // Array.from({ length: 3 }).map((_, index) => (
                                    //     <img src={`./../../lacxingau/${xiNgau3}.png`} width={50} height={50} />
                                    // ))
                                }
                                <img src={`./../../lacxingau/${xiNgau.xiNgau1}.png`} width={60} height={60} className='mx-1' />
                                <img src={`./../../lacxingau/${xiNgau.xiNgau2}.png`} width={60} height={60} className='mx-1' />
                                <img src={`./../../lacxingau/${xiNgau.xiNgau3}.png`} width={60} height={60} className='mx-1' />
                            </div>
                            <button className='btn-xiNgau mb-3' onClick={() => {
                                dispatch(thayDoiBanChon("Xỉu"))
                            }}>Xỉu</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default XiNgau
import React from 'react'
import { useSelector } from 'react-redux'

const KetQuaXiNgau = () => {
    const { soBanThang, soBanChoi, banChon } = useSelector((state) => state.xiNgauSlice);
    return (
        <div className="ketQuaXiNgau mb-lg-5">
            <h5 className='mb-3 t'>Bạn chọn: <span className='text-danger fs-3'>{banChon}</span></h5>
            <h5 className='mb-3 t'>Tổng số bàn thắng: <span className='text-success fs-3'>{soBanThang}</span></h5>
            <h5 className='mb-3 t'>Tổng số bàn chơi: <span className='text-primary fs-3'>{soBanChoi}</span></h5>
        </div>
    )
}

export default KetQuaXiNgau
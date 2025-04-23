import React, { useState } from 'react'
import { defaultLottery, generateRandomNumbers } from '../utils/utils';
import { Link } from 'react-router-dom';

const DefaultLottery = () => {
    const [numberDefault, setNumberDefault] = useState([]);
    const [animate, setAnimate] = useState(false);
    return (
        <>
            <div className='position-absolute z-3 top-0'>
                <div className="text-sm text-gray-500">
                    <Link to="/" className="hover:underline">Trang chủ</Link> / Lotery random
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card mx-auto my-5 animate__animated animate__zoomIn" style={{ width: '18rem' }}>
                            <img src="./../../92e37fa0-4b5a-49c0-9649-4420b7130386.png" className="card-img-top" alt="err" />
                            <div className="card-body mx-auto">
                                <h5 className="card-title">Random Default Lottery 👇</h5>
                                <div className="border border-1 border-dark border-dark bold mb-3">
                                    <p className={`card-text fw-bold p-4 ${animate && "animate__animated animate__flipInX"}`}>{numberDefault.join(" ").toString()}</p>
                                </div>
                                <button className="btn btn-dark mb-3" onClick={() => {
                                    setNumberDefault(defaultLottery());
                                    setAnimate(!animate);
                                    setTimeout(() => {
                                        setAnimate(false); // thêm lại sau 10ms
                                    }, 1000);
                                }}>Ấn để lấy số kiến thiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default DefaultLottery
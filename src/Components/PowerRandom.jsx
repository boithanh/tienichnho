import React, { useState } from 'react'
import { generateRandomNumbers } from '../utils/utils';
import { NavLink } from 'react-router-dom';
import Breadcrumb from './Breadcrumb/Breadcrumb';


const PowerRandom = () => {
    const [power, setPower] = useState([]);
    const [animate, setAnimate] = useState(false);
    let history = JSON.parse(localStorage.getItem("Power")) || [];

    return (
        <>
            <Breadcrumb homeUrl={"/"} currentUrl={""} homeContent={"Trang chủ"} currentContent={"Random Power 6/55"} bgColor={"rgba(255,255,255,0.3)"} color={"black"} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card mx-auto my-5 animate__animated animate__zoomIn" style={{ width: '18rem' }}>
                            <img src="./../../lottery_3.png" className="card-img-top" alt="err" />
                            <div className="card-body">
                                <h5 className="card-title">Random Power 6/55 👇</h5>
                                <div className="border border-1 border-dark border-dark bold mb-3">
                                    <p className={`card-text fw-bold p-4 ${animate && "animate__animated animate__flipInX"}`}>{power.join(" ").toString()}</p>
                                </div>
                                <button className='btn btn-primary mb-3' onClick={() => {
                                    const newPower = generateRandomNumbers(55)
                                    setPower(newPower);
                                    setAnimate(!animate);
                                    setTimeout(() => {
                                        setAnimate(false); // thêm lại sau 10ms
                                    }, 1000);
                                    history.push(newPower); // hoặc chỉ push 1 mảng nếu muốn
                                    localStorage.setItem("Power", JSON.stringify(history));

                                }}>Ấn để lấy số Power</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className='card-title mb-3'>Lịch sử số đã lấy</h5>
                        {
                            history.map((numbers, index) => (
                                <div key={index} className='mb-3'>
                                    <strong>Lần {index + 1}:</strong> {numbers.join(", ")}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PowerRandom
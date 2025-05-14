import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { generateRandomNumbers } from '../utils/utils';
import { NavLink } from 'react-router-dom';

const MegaRandom = () => {
    const [numbers, setNumbers] = useState([]);
    const [animate, setAnimate] = useState(false);
    return (
        <>
            <nav className="breadcrumb z-3 w-100">
                <NavLink to="/" className={({ isActive, isPending }) => {
                    return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
                }} aria-current="page">Trang Chủ</NavLink>
                <NavLink to="/random-mega" className={({ isActive, isPending }) => {
                    return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
                }} aria-current="page">6/45 Random</NavLink>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card mx-auto my-5 animate__animated animate__zoomIn" style={{ width: '18rem' }}>
                            <img src="./../../lottery_2.png" className="card-img-top" alt="err" />
                            <div className="card-body">
                                <h5 className="card-title">Random Mega 6/45 👇</h5>
                                <div className="border border-1 border-dark border-dark bold mb-3">
                                    <p className={`card-text fw-bold p-4 ${animate && "animate__animated animate__flipInX"}`}>{numbers.join(" ").toString()}</p>
                                </div>
                                <button className='btn btn-danger mb-3' onClick={() => {
                                    setNumbers(generateRandomNumbers(45));
                                    setAnimate(!animate);
                                    setTimeout(() => {
                                        setAnimate(false); // thêm lại sau 10ms
                                    }, 1000);
                                }}>Ấn để lấy số Mega</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MegaRandom
import React from 'react'
import { NavLink } from 'react-router-dom'

const SoThienThan = () => {
    return (
        <>
            <nav className="breadcrumb z-3 w-100 top-0 left-0" style={{
                backgroundColor: "rgba(80, 65, 54, 1)"
            }}>
                <NavLink to="/" className={({ isActive, isPending }) => {
                    return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
                }} aria-current="page">Trang Chủ</NavLink>
                <NavLink to="/so-thien-than" className={({ isActive, isPending }) => {
                    return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
                }} aria-current="page">Số Thiên Thần</NavLink>
            </nav>
            <iframe src="https://kechuyentamlinh.vercel.app/" width={"100%"} height={"100%"} style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }} allowFullScreen></iframe>
        </>
    )
}

export default SoThienThan
import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumb from './Breadcrumb/Breadcrumb'

const SoThienThan = () => {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <Breadcrumb homeUrl={"/"} currentUrl={""} homeContent={"Trang chủ"} currentContent={"Số Thiên Thần"} bgColor={"#201E50"} color={"white"} />
                <iframe src="https://angelsnumber.vercel.app/" width={"100%"} height={"100%"} style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }} allowFullScreen></iframe>
            </div>

        </>
    )
}

export default SoThienThan
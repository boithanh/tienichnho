import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({ homeUrl, currentUrl, homeContent, currentContent, bgColor, color, position = "relative" }) => {
    return (
        <nav className="breadcrumb z-3 w-100 top-0 left-0" style={{
            backgroundColor: `${bgColor}`,
            padding: 10,
            marginBottom: 0,
            position: `${position}`
        }}>
            <NavLink to={homeUrl} className={({ isActive, isPending }) => {
                return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
            }} aria-current="page" style={{ color: `${color}` }}>{homeContent}</NavLink>
            <NavLink to={currentUrl} className={({ isActive, isPending }) => {
                return "breadcrumb-item " + (isActive ? "active" : "") + (isPending ? "pending" : "")
            }} aria-current="page">{currentContent}</NavLink>
        </nav>
    )
}

export default Breadcrumb
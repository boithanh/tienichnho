import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import MobileMenu from '../../Components/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { arrNavlink } from '../../data/data';
const { Header, Content, Footer } = Layout;



const HomeTemplate = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="vh-100 vw-100">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                {
                    isMobile ? (<MobileMenu arrNavlink={arrNavlink} />)
                        : (arrNavlink.map((item, index) => {
                            return (
                                isMobile ? <MobileMenu /> : <NavLink to={item.to} className={({ isActive, isPending }) => {
                                    return `mx-2 ${isActive ? "text-dark btn btn-light" : "text-light"}`
                                }} style={{ textDecoration: "none" }}>{item.content}</NavLink>
                            )
                        }))
                }

            </Header>
            <Content style={{ padding: 0, width: "100%", minHeight: "80vh" }}>
                <div style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}>
                    <Outlet context={{ isMobile }} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', maxHeight: "max-content" }}>
                Created by Bối Thạnh ©{new Date().getFullYear()}
            </Footer>
        </Layout >
    );
};
export default HomeTemplate;
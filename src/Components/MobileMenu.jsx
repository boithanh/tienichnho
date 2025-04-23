import React, { useState } from 'react'
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ arrNavlink }) => {
    const [open, setOpen] = useState(false);
    //items mặc định của Menu antd chỉ nhận cặp giá trị key và label, nhưng điểm hay ở chỗ label có thể nhận thêm giá trị là một thẻ jSX thay vì chỉ là một chuỗi string bình thường --> có thể tùy ý thêm thẻ và dùng data binding để bổ sung dữ liệu vào cho thẻ mới vừa thêm.
    const items = arrNavlink.map((item, index) => {
        return ({
            key: index,
            label: <NavLink to={item.to} className="text-decoration-none">{item.content}</NavLink>
        })
    })
    return (
        <>
            {/* Nút mở Menu */}
            <MenuOutlined
                className="menu-icon"
                onClick={() => setOpen(true)}
                style={{ fontSize: "24px", cursor: "pointer", color: "white" }}
            />

            {/* Drawer hiển thị menu */}
            <Drawer
                title="Menu"
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
            >
                <Menu mode="vertical" items={items} />
            </Drawer>
        </>
    );
}

export default MobileMenu




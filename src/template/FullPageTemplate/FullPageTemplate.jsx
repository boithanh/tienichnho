import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useRef, useState } from 'react'
import { arrNavlink } from '../../data/data';
import { removeVietnameseTones } from '../../utils/utils';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { runtimeFlags } from '../../utils/utils';
const FullPageTemplate = () => {
    const [colors, setColors] = useState([]);

    const fetchOnePair = () => {
        try {
            return axios({
                method: 'post',
                url: 'https://colomind-server-workers.boithanh01694.workers.dev/api/colors', //Do colomind ko có https ko gọi trực tiếp để fetch API đc nên phải gọi trung gian qua worker 
                data: '{ "model": "default" }'
            }).then((res) => res.data.result).catch((err) => {
                // console.log("Có gì đó không ổn xảy ra, vui lòng thử lại", err);
                return [[0, 0, 0], [255, 255, 255]];
            })
        } catch (err) {
            console.log("err with technical");
        }
    }
    const fetchManyPair = async () => {
        let promises = Array.from({ length: arrNavlink.length }, () => fetchOnePair())
        const results = await Promise.all(promises);
        return results;
    }
    useEffect(() => {
        if (runtimeFlags.hasAppliedHomeStyle) return;
        runtimeFlags.hasAppliedHomeStyle = true;
        fetchManyPair().then((res) => {
            setColors(res);
        }).catch((err) => {
            console.log(err);
        });
    }
        , [])

    useEffect(() => {
        if (!colors || colors.length === 0) return; // tránh chạy khi chưa có 
        if (colors && runtimeFlags.hasAppliedHomeStyle === false) return; // tránh chạy khi đã có màu
        const toRgb = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`;
        const indexBgColor1 = 4;
        const indexBgColor2 = 3;
        const indexTextColor = 0;
        const indexButton1 = 1;
        const indexButton2 = 2;
        const style = document.createElement('style');
        if (colors.length === 8 && colors.every(p => p && p.length)) {
            const cssRules = colors.map((palette, i) => {
                const bgColor1 = palette[indexBgColor1];
                const bgColor2 = palette[indexBgColor2];
                const buttonColor1 = palette[indexButton1];
                const buttonColor2 = palette[indexButton2]
                const textColor = palette[indexTextColor];
                const [r, g, b] = buttonColor2;
                const isButtonBright = r >= 200 || g >= 200 || b >= 200;
                return ` .dynamic-bg${i}{background-image: linear-gradient(128deg, ${toRgb(bgColor1)}, ${toRgb(bgColor2)}) !important;  transition: background 0.5s ease-in-out;} .dynamic-button${i}.btn::before{background-color: ${toRgb(buttonColor1)} !important} .dynamic-button${i}.btn::after{background-color: ${toRgb(buttonColor2)} !important} .dynamic-button${i}.btn{color: ${toRgb(textColor)}} .dynamic-button${i}.btn:hover{color: ${isButtonBright && "black"} !important} .awesome-custom${i}{color: ${isButtonBright && "black"}}`
            })
            style.innerHTML = cssRules.join("\n");
            document.head.appendChild(style);
        }
        // render ở đây
    }, [colors]); // chỉ chạy một lần khi flag được bật

    const siteTitle = (alias) => {
        switch (true) {
            case alias === "Home":
                return "Hover Me & Scroll Down"
            case alias === "BloodPresure Check":
                return "Kiểm tra thông số huyết áp"
            case alias === "Lottery Random":
                return "Random vé số kiến thiết"
            case alias === "6/45 Random":
                return "Random Mega 6/45"
            case alias === "6/55 Random":
                return "Random Power 6/55"
            case alias === "Lắc xí ngầu":
                return "Trò chơi lắc xí ngầu"
            case alias === "Random Mega Custom":
                return "Random 6/45 custom"
            case alias === "Số thiên thần":
                return "Angel Numbers"
            case alias === "My's book journey diary":
                return "Book Journey diary"
            default:
                return "Page Not Found"
        }
    }
    return (
        <div className="App">
            <ul id="menu">

                {
                    arrNavlink.map((item, index) => {
                        return (
                            <li className='mt-2' data-menuanchor={removeVietnameseTones(item.content).trim().replace(/\s+/g, '-')} key={index}>
                                <a href={`#${index}`}>{item.content}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ReactFullpage
                menu="#menu"
                anchors={arrNavlink.map(item => removeVietnameseTones(item.content).trim().replace(/\s+/g, '-'))}
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                lockAnchors={true}
                render={() => (
                    <ReactFullpage.Wrapper>
                        {
                            arrNavlink.map((item, index) => {
                                return (
                                    <div key={index} className={`section dynamic-bg${index}`}>
                                        <div className='btn-content'><Link className={`btn dynamic-button${index}`} to={item.to}>{siteTitle(item.content)}</Link></div>
                                        <i className={`fa-solid fa-arrow-down fs-2 awesome-custom${index}`}></i>
                                    </div>
                                )
                            })
                        }
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    )

}

export default FullPageTemplate
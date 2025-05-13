import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useState } from 'react'
import { arrNavlink } from '../../data/data';
import { removeVietnameseTones } from '../../utils/utils';
import { Link } from 'react-router-dom';
import axios from 'axios';
const FullPageTemplate = () => {
    const [colors, setColors] = useState([]);
    const [buttonColor, setButtonColor] = useState(false);

    const fetchOnePair = () => {
        try {
            return axios({
                method: 'post',
                url: 'http://colormind.io/api/',
                data: '{ "model": "default" }'
            }).then((res) => res.data.result).catch((err) => {
                // console.log("Có gì đó không ổn xảy ra, vui lòng thử lại", err);
                return [[0, 0, 0], [255, 255, 255]];
            })
        } catch (err) {
            // console.log("err with technical");
        }
    }
    const fetchManyPair = async () => {
        let promises = Array.from({ length: arrNavlink.length }, () => fetchOnePair())
        const results = await Promise.all(promises);
        return results;
    }
    useEffect(() => {
        fetchManyPair().then((res) => {
            setColors(res);
            if (!colors) return; // tránh chạy khi chưa có màu
            // console.log(colors);
            let flag = false;
            const toRgb = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`;
            const indexBgColor1 = 4;
            const indexBgColor2 = 3;
            const indexTextColor = 0;
            const indexButton1 = 1;
            const indexButton2 = 2;
            const style = document.createElement('style');
            const cssRules = colors.map((palette, i) => {
                const bgColor1 = palette[indexBgColor1];
                const bgColor2 = palette[indexBgColor2];
                const buttonColor1 = palette[indexButton1];
                const buttonColor2 = palette[indexButton2]
                const textColor = palette[indexTextColor];
                const [r, g, b] = buttonColor2;
                const [e, f, h] = bgColor1;
                const isButtonBright = r >= 200 || g >= 200 || b >= 200;
                const isBackgroundBright = e >= 200 || f >= 200 || h >= 200;
                setButtonColor(isBackgroundBright);
                return ` .dynamic-bg${i}{background-image: linear-gradient(128deg, ${toRgb(bgColor1)}, ${toRgb(bgColor2)}) !important} .dynamic-button${i}.btn::before{background-color: ${toRgb(buttonColor1)} !important} .dynamic-button${i}.btn::after{background-color: ${toRgb(buttonColor2)} !important} .dynamic-button${i}.btn{color: ${toRgb(textColor)}} .dynamic-button${i}.btn:hover{color: ${isButtonBright && "black"} !important}`
            })
            style.innerHTML = cssRules.join("\n");
            document.head.appendChild(style);
            return () => {
                document.head.removeChild(style);
            };

        }).catch((err) => {
            // console.log(err);
        });

    }
        , [])

    const siteTitle = (alias) => {
        switch (true) {
            case alias === "Home":
                return "Hover Me or Scroll Down ⬇"
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
                            <li className='mt-3' data-menuanchor={removeVietnameseTones(item.content).trim().replace(/\s+/g, '-')} key={index}>
                                <a href={`#${index + 1}`}>{item.content}</a>
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
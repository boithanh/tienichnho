import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react'
import { arrNavlink } from '../../data/data';
import { removeVietnameseTones } from '../../utils/utils';
import { Link } from 'react-router-dom';

const FullPageTemplate = () => {


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
                                <a href={`#${index + 1}`} className="text-white">{item.content}</a>
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
                                    <div key={index} className="section">
                                        <div className='btn-content'><Link className='btn' to={item.to}>{siteTitle(item.content)}</Link></div>
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
import React from 'react'
import pageNotFoundAnimation from './../../assets/animation/pageNotFoundAnimation.json'
import { useLottie } from 'lottie-react';
import { Link } from 'react-router-dom';
import { path } from '../../common/path';

const PageNotFound = () => {
    const options = {
        animationData: pageNotFoundAnimation,
        loop: true,

    };
    const { View } = useLottie(options);
    return <div className='container'>
        <div className='row'>
            <div className="col-xl-5 mx-auto">
                {View}
                <div className='text-center'><Link className='btn btn-dark mb-3' to={path.homePage}>Trở về trang chủ</Link></div>
            </div>
        </div>
    </div>
}

export default PageNotFound
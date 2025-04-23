import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate/HomeTemplate'
import PageNotFound from '../Components/PageNotFound/PageNotFound'
// import BloodPressure from '../Components/BloodPressure'
const BloodPressure = React.lazy(() => import('../Components/BloodPressure'))
import { path } from '../common/path'
import DefaultLottery from '../Components/DefaultLottery'
import { Skeleton } from 'antd'
import MegaRandom from '../Components/MegaRandom'
import PowerRandom from '../Components/PowerRandom'
import Carousel from '../Components/Carousel'
import LacXiNgau from '../Components/LacXiNgau'
import FullPageTemplate from '../template/FullPageTemplate/FullPageTemplate'
import MegaRandomCustom from '../Components/MegaRandomCustom'

const useRouteCustom = () => {

    const elements = useRoutes([
        {
            path: path.homePage,
            element: <FullPageTemplate />,
        },
        {
            path: path.randomDefaultLottery,
            element: <DefaultLottery />
        },
        {
            path: path.randomMega,
            element: <MegaRandom />
        },
        {
            path: path.randomPower,
            element: <PowerRandom />
        },
        {
            path: path.lacXiNgau,
            element: <LacXiNgau />
        },
        {
            path: path.bloodPressure,
            element: <Suspense fallback={<Skeleton active paragraph={{ rows: 30 }} />}><BloodPressure /></Suspense>
        },
        ,
        {
            path: path.randomMegaCustom,
            element: <MegaRandomCustom />
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ])
    return elements;
};

export default useRouteCustom
import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import PageNotFound from '../Components/PageNotFound/PageNotFound'
const BloodPressure = React.lazy(() => import('../Components/BloodPressure'))
import { path } from '../common/path'
import DefaultLottery from '../Components/DefaultLottery'
import { Skeleton } from 'antd'
import MegaRandom from '../Components/MegaRandom'
import PowerRandom from '../Components/PowerRandom'
import LacXiNgau from '../Components/LacXiNgau'
const FullPageTemplate=React.lazy(()=>import('../template/FullPageTemplate/FullPageTemplate'))
import MegaRandomCustom from '../Components/MegaRandomCustom'
const SoThienThan=React.lazy(()=>import('../Components/SoThienThan'))
const BookJourneyDiary=React.lazy(()=>import('../Components/BookJourneyDiary'))

const useRouteCustom = () => {

    const elements = useRoutes([
        {
            path: path.homePage,
            element: <Suspense fallback={<Skeleton active paragraph={{ rows: 30 }} />}><FullPageTemplate /></Suspense>
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
        {
            path: path.soThienThan,
            element: <Suspense fallback={<Skeleton active paragraph={{ rows: 30 }} />}><SoThienThan /></Suspense>
        },
        {
            path: path.randomMegaCustom,
            element: <MegaRandomCustom />
        },
        {
            path: path.bookJourneyDiary,
            element: <Suspense fallback={<Skeleton active paragraph={{ rows: 30 }} />}><BookJourneyDiary /></Suspense>
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ])
    return elements;
};

export default useRouteCustom
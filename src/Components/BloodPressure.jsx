import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import createRandomSquares from './../utils/utils'
import InputCustom from './../hooks/InputCustom'
import * as yup from 'yup'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import { div } from 'framer-motion/client'
import { bpThresholds } from '../data/bloodpressure.data/bloodpressure.data'


const BloodPressure = () => {
    const [value, setValue] = useState("");
    const [valueBlood, setValueBlood] = useState("");
    const [save, setSave] = useState([]);
    const [history, setHistory] = useState("");
    const [hieuAp, setHieuAp] = useState("");
    const [icon, setIcon] = useState(false);
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef(null); // Tạo ref cho div chứa HTML
    const divRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = createRandomSquares(15); // Thêm HTML vào DOM
        }
    }, []); // Dependency array rỗng -> không chạy lại khi nhập input

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('bpValue')) || [];
        setSave(data);

    }, []);

    function getHistory(arrHistory = save) {
        const result = arrHistory.map((item) => {
            let { dayTime, tamThu, tamTruong, chanDoanHuyetAp, chanDoanHieuAp, chanDoanNhipTim } = item
            return (

                <p>
                    <span className='fw-semibold'>
                        {`${dayTime}:`}
                    </span>
                    {` Tâm thu: ${tamThu} | Tâm trương: ${tamTruong} - ${chanDoanHuyetAp} - ${chanDoanHieuAp} - ${chanDoanNhipTim}`}
                </p>
            )

        })
        setHistory(result);
    }

    //Kiểm tra tâm thu và tâm trương
    function systolicAndDiastolicCheck(systolicReuslt, diastolicResult) {
        if (systolicReuslt === "veryLow" && systolicReuslt === diastolicResult) {
            return "Huyết áp cực thấp, cần đến bệnh viện ngay!!!";
        }
        else if (systolicReuslt === "low" && systolicReuslt === diastolicResult) {
            return "Huyết áp thấp";
        }
        else if (systolicReuslt === "normal" && systolicReuslt === diastolicResult) {
            return "Huyết áp bình thường";
        }

        else if (systolicReuslt === "high" && systolicReuslt === diastolicResult) {
            return "Tiền sử tăng huyết áp";
        }
        else if (systolicReuslt === "high" && systolicReuslt === diastolicResult) {
            return "Tiền sử tăng huyết áp";
        }
        else {
            return "Trường hợp ngoài mong đợi của huyết áp, vui lòng thử lại"
        }
    }



    function handleMismatchedBP(sysRank, diasRank) {
        if ((sysRank === 'high' && diasRank === 'normal') || (sysRank === 'veryHigh' && diasRank === 'normal')) return 'Tăng huyết áp tâm thu đơn độc';
        if ((sysRank === 'normal' && diasRank === 'high') || (sysRank === 'normal' && diasRank === 'veryHigh')) return 'Tăng huyết áp tâm trương đơn độc';
        return 'Huyết áp không đồng nhất - nên theo dõi thêm hoặc hỏi bác sĩ';
    }



    function getPpLevel(tamThu, tamTruong, ranges) {
        const difference = (tamThu * 1) - (tamTruong * 1);
        for (let range of ranges) {
            if (
                (range.min === undefined || difference >= range.min) &&
                (range.max === undefined || difference < range.max)
            ) {

                return range.label
            }
        }
        return 'unknownPulsePressure';
    }

    function checkPulsePressure(pulsePressureResult) {
        if (pulsePressureResult === "veryLow") {
            return "Hiệu áp cực hẹp, nguy hiểm cần đến bệnh viện";
        }
        else if (pulsePressureResult === "low") {
            return "Hiệu áp hẹp đáng kể, Có thể liên quan đến suy tim, sốc tim, hoặc hẹp động mạch chủ, dẫn đến giảm cung cấp máu đến các cơ quan. Nếu gặp triệu chứng như chóng mặt, mệt mỏi, khó thở, hoặc lạnh tay chân (do thiếu oxy đến mô) vui lòng đến cơ sở y tế gần nhất để được điều trị kịp thời";
        }
        else if (pulsePressureResult === "normal") {
            return "Hiệu áp bình thường";
        }

        else if (pulsePressureResult === "high") {
            return "Hiệu áp lớn bất thường có thể do tăng huyết áp";
        }
        else if (pulsePressureResult === "high") {
            return "Hiệu áp cực lớn, có thể liên quan do huyết áp tăng nhiều, cần đi khám ngay!!";
        }
        else {
            return "Trường hợp ngoài mong đợi của hiệu áp, vui lòng thử lại"
        }
    }


    const rules = bpThresholds["user"]["day"];
    function getBpLevel(inputValue, ranges) {
        for (let range of ranges) {
            if (
                (range.min === undefined || inputValue >= range.min) &&
                (range.max === undefined || inputValue < range.max)
            ) {
                return range.label;
            }
        }
        return 'unknownBP';
    }

    function BloodPressureCheck(inputValue) {
        let { tamTruong, tamThu, nhipTim } = inputValue;
        let str = "";
        const systolicLevel = getBpLevel(tamThu, rules.systolic);
        const diastolicLevel = getBpLevel(tamTruong, rules.diastolic);
        const pulsePressureLevel = getPpLevel(tamThu, tamTruong, rules.difference);
        const pulsePressureNote = checkPulsePressure(pulsePressureLevel);
        const heartRateLevel = getHeartRateLevel(nhipTim, rules.heartRate)
        const hertRateNote = heartRateCheck(heartRateLevel);

        if (systolicLevel === diastolicLevel) {
            // Cùng nhóm → chẩn đoán thẳng
            str = systolicAndDiastolicCheck(systolicLevel, diastolicLevel);

        } else {
            // Không cùng nhóm → các trường hợp cá biệt
            str = handleMismatchedBP(systolicLevel, diastolicLevel);
        }
        setValueBlood(str);
        setHieuAp(pulsePressureNote);
        setValue(hertRateNote);

        setSave(prev => {
            const updated = [...prev, { "dayTime": getDateTime(), "tamThu": tamThu, "tamTruong": tamTruong, "chanDoanHuyetAp": str, "chanDoanHieuAp": pulsePressureNote, "chanDoanNhipTim": hertRateNote }];
            saveLocalStorage(updated);
            return updated;
        });

    }

    function getHeartRateLevel(heartRate, ranges) {
        for (let range of ranges) {
            if (
                (range.min === undefined || heartRate >= range.min) &&
                (range.max === undefined || heartRate < range.max)
            ) {
                return range.label;
            }
        }
        return 'unknownHeartRate';
    }

    function heartRateCheck(heartRateResult) {
        if (heartRateResult === "low") {
            return "Nhịp tim chậm";
        }
        else if (heartRateResult === "normal") {
            return "Nhịp tim bình thường";
        }
        else if (heartRateResult === "high") {
            return "Nhịp tim nhanh";
        }
        else {
            return "Trường hợp ngoài mong đợi của nhịp tim, vui lòng thử lại"
        }
    }
    // có thể ghi const formik = useformik ({}) hoặc bóc tách ra luôn để sử dụng các thuộc tính bên trong của formik
    //Trường hợp layout đến từ bên tứ 3 (forbite, antDesign) ko có hỗ trợ thuộc tính như name trong input thì dung setFieldValue để khắc phục
    const { handleSubmit, handleChange, values, setFieldValue, errors, handleBlur, touched, resetForm } = useFormik({
        initialValues: {
            tamThu: "",
            tamTruong: "",
            nhipTim: ""
        },
        onSubmit: (values) => {
            BloodPressureCheck(values);
            setIcon(true);
            setAnimate(!animate);
            setTimeout(() => {
                setAnimate(false); // thêm lại sau 10ms
            }, 1000);
        },
        validationSchema: yup.object({
            tamThu: yup.string().required("Vui lòng không bỏ trống Tâm Thu").matches(/^(5[1-9]|[6-9][0-9]|1[0-9]{2})$/, "Vui lòng nhập số và phải hợp lệ [51-199]"),
            tamTruong: yup.string().required("Vui lòng không bỏ trống tâm trương").matches(/^(?:4[1-9]|[5-9]\d|1[01]\d)$/, "Vui lòng nhập số và phải hợp lệ [41-119]"),
            nhipTim: yup.string().required("Vui lòng không bỏ trống nhịp tim").matches(/^(?:3[1-9]|[4-9]\d|[12]\d{2})$/, "Vui lòng nhập số và phải hợp lệ [31 đến 299]")
        })
    });

    function saveLocalStorage(data) {

        return localStorage.setItem("bpValue", JSON.stringify(data))
    }

    function getDateTime() {
        const now = new Date(Date.now());

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = now.getFullYear();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }



    return (
        <>
            <Breadcrumb homeUrl={"/"} currentUrl={""} homeContent={"Trang chủ"} currentContent={"Blood Pressure"} bgColor={"rgba(255,255,255,0.3)"} color={"#29274C"} position='absolute' />
            <div className='container-fluid blood-pressure position-relative'>
                <div className="row">
                    <h1 className='fs-10 mb-4 p-2 text-center mt-5 z-2'>Kiểm tra thông số huyết áp</h1>
                    <div className='col-xl-5 mx-auto'>
                        <div className='form-container glass-morphism'>
                            <form onSubmit={handleSubmit}>
                                <InputCustom labelContent={"Nhập huyết áp tâm thu"} smallContent={"Là số lớn, thường nằm trước"} id={"tamThu"} name={"tamThu"} onChange={handleChange} value={values.tamThu} onBlur={handleBlur} error={errors.tamThu} touched={touched.tamThu} />

                                <InputCustom labelContent={"Nhập huyết áp tâm trương"} smallContent={"Là số nhỏ, nằm sau và không vượt quá 100"} id={"tamTruong"} name={"tamTruong"} onChange={handleChange} value={values.tamTruong} onBlur={handleBlur} error={errors.tamTruong} touched={touched.tamTruong} />

                                <InputCustom labelContent={"Nhập nhịp tim"} smallContent={"Nhịp tim đo được của thiết bị đo"} id={"nhipTim"} name={"nhipTim"} onChange={handleChange} value={values.nhipTim} onBlur={handleBlur} error={errors.nhipTim} touched={touched.nhipTim} />

                                <div className='text-center mb-4 d-flex justify-content-evenly align-items-center gap-2'>
                                    <button type='submit' className='btn btn-outline-dark w-50 d-sm-inline-block mx-sm-2 mb-3'>Kiểm tra</button>
                                    <button type='button' className='btn btn-outline-light w-50 d-sm-inline-block mb-3' onClick={() => {
                                        resetForm();
                                        setValueBlood("");
                                        setHieuAp("");
                                        setValue("");
                                        setIcon(!icon);
                                    }}>Reset</button>
                                </div>
                                <div className={`myShadow`}>
                                    <h5 className='p-2'>Chẩn đoán</h5>
                                    <div className={`pb-5 ${animate && "animate__animated animate__lightSpeedInRight"}`}>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-droplet text-warning fs-3 mx-3`}></i>{valueBlood}</p>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-user text-primary fs-3 mx-3`}></i>{hieuAp}</p>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-heart text-danger fs-4 mx-3`}></i>{value}</p>
                                    </div>
                                </div>
                            </form>
                            <div className={`${save.length > 0 ? "d-flex" : "d-none"} justify-content-center mb-5`}><button className='btn btn-outline-light' onClick={() => { getHistory() }}>Xem lại lịch sử đo</button></div>
                            <div className='rounded-3 p-2 opacity-75 mb-3'>
                                {history}
                            </div>

                            <div className='note'>
                                <p>*** Lưu ý: Đo tại nhà thường có sai số, nếu kết quả đo bất thường trên 2 lần hoặc huyết áp bất thường vui lòng đến trạm y tế hoặc bệnh viện gần nhất để được thăm khám kịp thời</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='random-square' ref={containerRef}></div>
            </div>
        </>
    )

}
export default BloodPressure
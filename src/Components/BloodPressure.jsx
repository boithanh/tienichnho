import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import createRandomSquares from './../utils/utils'
import InputCustom from './../hooks/InputCustom'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { path } from '../common/path'

const BloodPressure = () => {
    const [value, setValue] = useState("");
    const [valueBlood, setValueBlood] = useState("");
    const [squares, setSquares] = useState([]);
    const [hieuAp, setHieuAp] = useState("");
    const [icon, setIcon] = useState(false);
    const containerRef = useRef(null); // Tạo ref cho div chứa HTML


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = createRandomSquares(10); // Thêm HTML vào DOM
        }
    }, []); // Dependency array rỗng -> không chạy lại khi nhập input

    //Kiểm tra tâm thu và tâm trương
    function systolicAndDiastolicCheck(tamThu, tamTruong) {
        if (tamThu <= 70 && tamTruong <= 40) {
            setValueBlood("Huyết áp cực thấp, cần đến bệnh viện ngay!!!");
        }
        else if ((tamThu < 90 && tamThu > 70) && (tamTruong < 60 && tamTruong > 40)) {
            setValueBlood("Huyết áp thấp");
        }
        else if ((tamThu < 115 && tamThu >= 90) && (tamTruong < 65 && tamTruong >= 60)) {
            setValueBlood("Huyết áp bình thường");
        }

        else if ((tamThu >= 115 && tamThu < 130) && (tamTruong >= 65 && tamTruong < 80)) {
            setValueBlood("Tiền sử tăng huyết áp");
        } else {
            systolicCheckOnly(tamThu);
        }

    }

    //Chỉ kiểm tra tâm thu
    function systolicCheckOnly(tamThu) {
        if (tamThu <= 70) {
            setValueBlood("Huyết áp cực thấp, cần đến bệnh viện ngay!!!");
        }
        else if (tamThu < 90 && tamThu > 70) {
            setValueBlood("Huyết áp thấp");
        }
        else if (tamThu < 115 && tamThu >= 90) {
            setValueBlood("Huyết áp bình thường");
        }

        else if (tamThu >= 115 && tamThu < 130) {
            setValueBlood("Tiền sử tăng huyết áp");
        } else {
            setValueBlood("Cao huyết áp");
        }

    }

    function calculatePulsePressure(tamThu, tamTruong) {
        return (tamThu * 1) - (tamTruong * 1)
    }

    function BloodPressureCheck(parameter) {
        let { tamTruong, tamThu } = parameter;
        let hA = calculatePulsePressure(tamThu, tamTruong);
        if (hA >= 40 && hA <= 60) {
            systolicAndDiastolicCheck(tamThu, tamTruong);
            setHieuAp("Hiệu áp bình thường");
        }
        else if (hA >= 35 && hA < 40) {
            systolicCheckOnly(tamThu);
            setHieuAp("Hiệu áp có vẻ hơi hẹp, nhưng không đáng lo ngại. Thông số này nằm trong giới hạn bình thường đối với một số người");
        }
        else if (hA >= 26 && hA < 35) {
            systolicCheckOnly(tamThu);
            setHieuAp("Hiệu áp hẹp đáng kể, Có thể liên quan đến suy tim, sốc tim, hoặc hẹp động mạch chủ, dẫn đến giảm cung cấp máu đến các cơ quan. Nếu gặp triệu chứng như chóng mặt, mệt mỏi, khó thở, hoặc lạnh tay chân (do thiếu oxy đến mô) vui lòng đến cơ sở y tế gần nhất để được điều trị kịp thời");
        }
        else {
            systolicCheckOnly(tamThu);
            setHieuAp("Hiệu áp hẹp, nguy hiểm cần đến bệnh viện");
        }
    }
    function heartRateCheck(parameter) {
        let { nhipTim } = parameter;
        nhipTim *= 1;
        if (nhipTim <= 60) {
            setValue(`Nhịp tim chậm`);
        } else if (nhipTim > 60 && nhipTim < 100) {
            setValue("Nhịp tim bình thường");
        }
        else if (nhipTim >= 100) {
            setValue("Nhịp tim nhanh");
        }
        else {
            setValue("Nhịp tim bất ổn");
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
            heartRateCheck(values);
            setIcon(true);
            resetForm();
        },
        validationSchema: yup.object({
            tamThu: yup.string().required("Vui lòng không bỏ trống Tâm Thu").matches(/^(?:[5-9][1-9]|1\d{2})$/, "Vui lòng nhập số và phải hợp lệ [51-199]"),
            tamTruong: yup.string().required("Vui lòng không bỏ trống tâm trương").matches(/^(?:4[1-9]|[5-9]\d|1[01]\d)$/, "Vui lòng nhập số và phải hợp lệ [41-119]"),
            nhipTim: yup.string().required("Vui lòng không bỏ trống nhịp tim").matches(/^(?:3[1-9]|[4-9]\d|[12]\d{2})$/, "Vui lòng nhập số và phải hợp lệ [31 đến 299]")
        })

    });

    // console.log(errors);
    // console.log(touched);
    return (
        <>
            <div className='position-absolute z-3'>
                <div className="text-sm text-gray-500">
                    <Link to="/" className="hover:underline">Trang chủ</Link> / Blood Pressure
                </div>
            </div>
            <div className='container-fluid blood-pressure'>
                <div className="row">
                    <h1 className='fs-10 mb-4 p-2 text-center my-3 z-2'>Kiểm tra thông số huyết áp</h1>
                    <div className='col-xl-5 mx-auto'>
                        <div className='form-container glass-morphism'>
                            <form onSubmit={handleSubmit}>
                                <InputCustom labelContent={"Nhập huyết áp tâm thu"} smallContent={"Là số lớn, thường nằm trước"} id={"tamThu"} name={"tamThu"} onChange={handleChange} value={values.tamThu} onBlur={handleBlur} error={errors.tamThu} touched={touched.tamThu} />

                                <InputCustom labelContent={"Nhập huyết áp tâm trương"} smallContent={"Là số nhỏ, nằm sau và không vượt quá 100"} id={"tamTruong"} name={"tamTruong"} onChange={handleChange} value={values.tamTruong} onBlur={handleBlur} error={errors.tamTruong} touched={touched.tamTruong} />

                                <InputCustom labelContent={"Nhập nhịp tim"} smallContent={"Nhịp tim đo được của thiết bị đo"} id={"nhipTim"} name={"nhipTim"} onChange={handleChange} value={values.nhipTim} onBlur={handleBlur} error={errors.nhipTim} touched={touched.nhipTim} />

                                <div className='text-center mb-4'><button type='submit' className='btn btn-outline-dark w-100'>Kiểm tra</button></div>
                                <div className='myShadow'>
                                    <h5 className='p-2'>Chẩn đoán</h5>
                                    <div className='pb-5'>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-droplet text-warning fs-3 mx-3`}></i>{valueBlood}</p>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-user text-primary fs-3 mx-3`}></i>{hieuAp}</p>
                                        <p className='mb-3'><i className={`${!icon ? "d-none " : "d-block "}fa-solid fa-heart text-danger fs-4 mx-3`}></i>{value}</p>
                                    </div>
                                </div>
                            </form>
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
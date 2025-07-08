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
            let { dayTime, thoiDiemChanDoan, tamThu, tamTruong, nhipTim, chanDoanHuyetAp, chanDoanHieuAp, chanDoanNhipTim } = item
            return (

                <div className='mb-3 mt-3'>
                    <span className='fw-bold'>
                        {`${dayTime}`}
                    </span>
                    <span className='fw-bolder'>
                        {
                            thoiDiemChanDoan === "banNgay" ? " (Huyết áp ban ngày)" :
                                thoiDiemChanDoan === "banDem" ? " (Huyết áp ban đêm)" :
                                    thoiDiemChanDoan === "24h" ? " (Huyết áp 24h)" :
                                        " (chưa chọn chức năng đo cụ thể)"
                        }
                    </span>
                    <p>
                        {`Tâm thu: ${tamThu} | Tâm trương: ${tamTruong} | Nhịp tim: ${nhipTim}`}
                    </p>
                    <p>
                        {`${chanDoanHuyetAp}`}
                    </p>
                    <p>
                        {`${chanDoanHieuAp}`}
                    </p>
                    <p>
                        {`${chanDoanNhipTim}`}
                    </p>

                </div>
            )

        })
        setHistory(result);
    }

    //Kiểm tra tâm thu và tâm trương
    function systolicAndDiastolicCheck(systolicReuslt, diastolicResult) {
        if (systolicReuslt === "veryLow" && systolicReuslt === diastolicResult) {
            return "Huyết áp hiện đang thấp hơn nhiều so với mức bình thường, nhưng đừng lo lắng quá nhé. Chỉ cần bạn không có triệu chứng như chóng mặt, buồn nôn hay mệt mỏi thì cứ nghỉ ngơi và theo dõi thêm là được đó.";
        }
        else if (systolicReuslt === "low" && systolicReuslt === diastolicResult) {
            return "Huyết áp hơi thấp một chút, nhưng vẫn ổn nếu bạn cảm thấy khỏe. Hãy cố gắng ăn uống đầy đủ, ngủ nghỉ hợp lý và theo dõi thêm vài ngày nữa nhé!";
        }
        else if (systolicReuslt === "normal" && systolicReuslt === diastolicResult) {
            return "👌 Huyết áp bạn đang ở mức lý tưởng rồi đó! Cứ duy trì sinh hoạt lành mạnh như hiện tại là tốt lắm rồi, tuyệt vời luôn!";
        }

        else if (systolicReuslt === "high" && systolicReuslt === diastolicResult) {
            return "Huyết áp đang hơi cao hơn bình thường một chút. Có thể là do vận động, ăn mặn hoặc căng thẳng nhẹ. Bạn chỉ cần thư giãn, ăn nhạt hơn và nghỉ ngơi điều độ là ổn nha!";
        }
        else if (systolicReuslt === "veryHigh" && systolicReuslt === diastolicResult) {
            return "Huyết áp đang cao rõ rệt rồi bạn nhé. Đừng quá lo, nhưng nên theo dõi thường xuyên hơn, hạn chế stress và có thể tham khảo ý kiến bác sĩ nếu tình trạng lặp lại để yên tâm hơn ha!";
        }
        else {
            return "Trường hợp ngoài mong đợi của huyết áp, vui lòng thử lại"
        }
    }

    function systolicCheckOnly(systolicRank, diastolicRank) {
        if (systolicRank === "veryLow" && diastolicRank === "normal") {
            return "Tâm thu của bạn đang thấp hơn đáng kể, nhưng nếu tâm trương vẫn bình thường và bạn không có triệu chứng như choáng, mệt mỏi hay buồn nôn thì cứ theo dõi thêm nhé. Nghỉ ngơi đủ, ăn uống đầy đủ là cơ thể sẽ phục hồi thôi.";
        }
        else if (systolicRank === "low" && diastolicRank === "normal") {
            return "Tâm thu hơi thấp nhẹ, có thể do bạn đang đói, thiếu ngủ hoặc mệt. Nếu bạn vẫn thấy khỏe thì không sao đâu nha, cứ nghỉ ngơi chút rồi đo lại sau.";
        }
        else if (systolicRank === "high" && diastolicRank === "normal") {
            return "Tâm thu của bạn đang hơi cao một chút trong khi tâm trương vẫn bình thường. Điều này có thể do bạn mới vận động, ăn mặn hoặc đang căng thẳng nhẹ. Hít thở sâu, nghỉ ngơi và theo dõi thêm vài lần đo nữa là ổn nha!";
        }

        else if (systolicRank === "veryHigh" && diastolicRank === "normal") {
            return "Tâm thu đang cao rõ rệt so với bình thường, trong khi tâm trương vẫn ổn. Đây có thể là dấu hiệu tăng huyết áp tâm thu đơn độc - thường gặp ở người lớn tuổi hoặc căng thẳng kéo dài. Bạn nên theo dõi thường xuyên hơn và cân nhắc tham khảo bác sĩ nếu tình trạng lặp lại.";
        }
        else {
            return "Trường hợp ngoài mong đợi của huyết áp tâm thu đơn độc, vui lòng thử lại"
        }
    }

    function diastolicCheckOnly(systolicRank, diastolicRank) {
        if (systolicRank === "normal" && diastolicRank === "veryLow") {
            return "Tâm trương hiện hơi thấp rõ rệt, nhưng nếu bạn không có triệu chứng như hoa mắt, chóng mặt thì chưa cần lo lắng. Có thể là do mất nước nhẹ hoặc mệt mỏi. Cứ nghỉ ngơi và theo dõi lại nhé!";
        }
        else if (systolicRank === "normal" && diastolicRank === "low") {
            return "Tâm trương hơi thấp hơn mức lý tưởng. Việc này đôi khi xảy ra ở người có thể trạng mảnh mai hoặc do đang đói, thiếu ngủ. Nghỉ ngơi, uống đủ nước là ổn bạn nha.";
        }
        else if (systolicRank === "normal" && diastolicRank === "high") {
            return "Tâm trương của bạn hơi cao một chút dù tâm thu vẫn bình thường. Đây có thể là ảnh hưởng của chế độ ăn mặn, căng thẳng nhẹ hoặc mất ngủ. Không đáng lo nếu chỉ là tạm thời, bạn chỉ cần điều chỉnh sinh hoạt một chút là ổn.";
        }

        else if (systolicRank === "normal" && diastolicRank === "veryHigh") {
            return "Tâm trương đang cao rõ rệt, có thể là dấu hiệu tăng huyết áp tâm trương đơn độc. Nếu bạn có cảm giác nặng đầu, mệt mỏi hoặc khó chịu thì nên nghỉ ngơi, ăn nhạt hơn và cân nhắc khám nếu tình trạng lặp lại nha.";
        }
        else {
            return "Trường hợp ngoài mong đợi của huyết áp tâm trương đơn độc, vui lòng thử lại"
        }
    }

    function handleMismatchedBP(systolicReuslt, diastolicResult) {
        if (systolicReuslt !== 'normal' && diastolicResult === 'normal') { return systolicCheckOnly(systolicReuslt, diastolicResult) }
        else if (systolicReuslt === 'normal' && diastolicResult !== 'normal') { return diastolicCheckOnly(systolicReuslt, diastolicResult) }
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
            return "⚠️ Hiệu áp hiện hơi hẹp hơn bình thường. Điều này đôi khi gặp ở người huyết áp thấp hoặc thể trạng gầy.Nếu bạn không thấy chóng mặt, mệt hay khó thở thì chưa cần quá lo, chỉ cần nghỉ ngơi đầy đủ và theo dõi thêm là được nha!";
        }
        else if (pulsePressureResult === "low") {
            return "Hiệu áp hơi thấp một chút so với mức lý tưởng. 👉 Không đáng lo nếu bạn vẫn thấy khỏe. Nhớ uống đủ nước, ăn đầy đủ và ngủ nghỉ đúng giờ bạn nhé!";
        }
        else if (pulsePressureResult === "normal") {
            return `👌 Hiệu áp đang ở mức hoàn toàn bình thường. ✨ Cứ duy trì chế độ  sinh hoạt lành mạnh như hiện tại là tuyệt vời rồi đó bạn!`;
        }

        else if (pulsePressureResult === "high") {
            return `🧭 Hiệu áp hơi rộng một chút, nhưng thường là do tâm trạng, vận động, hoặc thay đổi sinh hoạt tạm thời.
            💡 Bạn có thể thư giãn, ngủ sớm hơn và theo dõi thêm vài ngày tới là được nha, không cần lo lắng quá đâu!`;
        }
        else if (pulsePressureResult === "veryHigh") {
            return "⚠️ Hiệu áp đang cao hơn bình thường một chút, nhưng bạn đừng quá lo lắng nha. Một số trường hợp cao tuổi, vận động mạnh hoặc căng thẳng cũng có thể gặp tình trạng này. ✨ Hãy dành thời gian nghỉ ngơi, thư giãn, uống nước ấm và theo dõi lại trong thời gian tới. Nếu vẫn tiếp diễn thì tham khảo ý kiến bác sĩ để yên tâm hơn bạn nhé!";
        }
        else {
            return "Trường hợp ngoài mong đợi của hiệu áp, vui lòng thử lại"
        }
    }



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
            return "Nhịp tim của bạn đang hơi chậm một chút, nhưng không sao nếu bạn vẫn cảm thấy khỏe mạnh. Một số người tập thể thao hoặc ngủ đủ giấc cũng thường có nhịp tim thấp mà không ảnh hưởng gì. Cứ theo dõi thêm là được nha!";
        }
        else if (heartRateResult === "normal") {
            return "Nhịp tim của bạn đang hoàn toàn bình thường. Cứ giữ vững lối sống lành mạnh như hiện tại là tốt lắm rồi đó!";
        }
        else if (heartRateResult === "high") {
            return "Nhịp tim đang hơi nhanh một chút, có thể do bạn vừa vận động, lo lắng hoặc thiếu ngủ. Hãy nghỉ ngơi, uống nước ấm và theo dõi lại sau một lúc nha. Nếu thường xuyên thấy tim đập nhanh, bạn có thể đi kiểm tra để yên tâm hơn!";
        }
        else {
            return "Trường hợp ngoài mong đợi của nhịp tim, vui lòng thử lại"
        }
    }
    function handleMixedDeviation() {
        return `📌 Đây là tình trạng huyết áp không ổn định. Nếu bạn cảm thấy mệt mỏi, chóng mặt, hồi hộp hoặc bất thường khác, hãy gặp nhân viên y tế để được tư vấn.`

    }

    function chonLoai(moment) {
        if (moment === "banNgay") {
            return bpThresholds['user']['day']
        }
        else if (moment === "banDem") {
            return bpThresholds['user']['night'];
        }
        else {
            return bpThresholds['user']['24h']
        }
    }


    function BloodPressureCheck(inputValue) {
        let { tamTruong, tamThu, nhipTim, thoiDiem } = inputValue;
        const rules = chonLoai(thoiDiem);
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

        } else if ((systolicLevel !== 'normal' && diastolicLevel === 'normal') ||
            (systolicLevel === 'normal' && diastolicLevel !== 'normal')) {
            // Không cùng nhóm → các trường hợp cá biệt
            str = handleMismatchedBP(systolicLevel, diastolicLevel);
        }
        else {
            // Trường hợp lệch kép → Chẩn đoán phức hợp
            str = handleMixedDeviation();
        }
        setValueBlood(str);
        setHieuAp(pulsePressureNote);
        setValue(hertRateNote);

        setSave(prev => {
            const updated = [...prev, { "dayTime": getDateTime(), "thoiDiemChanDoan": thoiDiem, "tamThu": tamThu, "tamTruong": tamTruong, "nhipTim": nhipTim, "chanDoanHuyetAp": str, "chanDoanHieuAp": pulsePressureNote, "chanDoanNhipTim": hertRateNote }];
            saveLocalStorage(updated);
            return updated;
        });

    }


    // có thể ghi const formik = useformik ({}) hoặc bóc tách ra luôn để sử dụng các thuộc tính bên trong của formik
    //Trường hợp layout đến từ bên tứ 3 (forbite, antDesign) ko có hỗ trợ thuộc tính như name trong input thì dung setFieldValue để khắc phục
    const { handleSubmit, handleChange, values, setFieldValue, errors, handleBlur, touched, resetForm } = useFormik({
        initialValues: {
            tamThu: "",
            tamTruong: "",
            nhipTim: "",
            thoiDiem: ""
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
            nhipTim: yup.string().required("Vui lòng không bỏ trống nhịp tim").matches(/^(?:3[1-9]|[4-9]\d|[12]\d{2})$/, "Vui lòng nhập số và phải hợp lệ [31 đến 299]"),
            thoiDiem: yup.string().oneOf(['banNgay', 'banDem', '24h'], 'Vui lòng chọn trước khi submit')
                .required('Vui lòng chọn thời điểm đo')
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

                                <div className="mb-5">
                                    <label htmlFor="thoiDiem" className="form-label">Thời điểm đo</label>
                                    <select className="form-select form-select-lg" name="thoiDiem" id="thoiDiem" value={value.thoiDiem} onChange={handleChange} onBlur={handleBlur}>
                                        <option value="" defaultChecked >Vui lòng chọn thời điểm đo</option>
                                        <option value={"banNgay"}>Ban ngày</option>
                                        <option value={"banDem"}>Ban đêm</option>
                                        <option value={"24h"}>24h</option>
                                    </select>
                                    {touched && errors.thoiDiem ? <p className='text-danger'>{errors.thoiDiem}</p> : null}
                                </div>


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
import React, { useEffect } from 'react'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, BookmarkCheck } from "lucide-react";
import useResponsive from '../hooks/useResponsive';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { path } from '../common/path';
const books = [
    {
        id: 1,
        title: "Sức mạnh của sự kiên trì",
        skill: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-yellow-200 to-pink-200",
        image: "books/CamScanner 13-8-25 20.09_1.jpeg",
        animation: "fade-in",
        progress: 82,
        notes: [
            "Kiên trì không phải là chạy nước rút, mà là marathon không vạch đích."
        ]
    },
    {
        id: 2,
        title: "Lý thuyết trò chơi",
        skill: "Tâm lý học",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 21.07_2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
           "Hiểu luật chơi là bước đầu tiên để trở thành người thiết kế luật chơi",
           "Trong mọi cuộc chơi, người thông minh không chọn điều tốt nhất cho mình – mà chọn điều khiến đối thủ không thể giành lợi thế."
        ],
    },
    {
        id: 3,
        title: "Bí Quyết Để Học Ít - Hiểu Nhiều - Nhớ Lâu - Hiệu Quả ",
        skill: "Kỹ năng học thuật",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.57(1)_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Học thông minh quan trọng hơn học nhiều – chất lượng đánh bại số lượng."
        ]
    },
    {
        id: 4,
        title: "Đắc nhân tâm",
        skill: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.56_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Thành công bắt đầu từ việc hiểu người khác trước khi mong họ hiểu mình"
        ]
    },
    {
        id: 5,
        title: "Khi ta thay đổi thế giới sẽ đổi thay",
        skill: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.55_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Bạn không thể thay đổi cuộc đời nếu cứ mãi giữ những suy nghĩ cũ."
        ]
    },
    {
        id: 6,
        title: "Mặc kệ thiên hạ - Sống như người Nhật",
        skill: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.25_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Sống cho mình, đừng sống vì ánh mắt người khác."
        ]
    },
    {
        id: 7,
        title: "Tư duy mở",
        skill: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.22_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Tư duy hẹp giới hạn bạn, tư duy mở mở ra cả thế giới."
        ]
    },
    {
        id: 8,
        title: "Nghệ Thuật từ chối",
        skill: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.21_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Nói 'không' đúng cách là cách bạn nói 'có' với cuộc đời mình."
        ]
    },
    {
        id: 9,
        title: "Bí Ẩn của sự may mắn",
        skill: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.19_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "May mắn không phải là ngẫu nhiên, mà là kết quả của tư duy và hành động."
        ]
    },
    {
        id: 10,
        title: "Gian Nan đừng vội nản",
        skill: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.17_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Khó khăn là lớp học vĩ đại nhất, nhưng phần thưởng chỉ dành cho người không bỏ cuộc."
        ]
    },
    {
        id: 11,
        title: "Nghệ thuật từ bỏ thói quen xấu",
        skill: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.15(1)_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Thói quen xấu là kẻ thù thầm lặng - đánh bại nó bằng hành động nhỏ mỗi ngày"
        ]
    },
    {
        id: 12,
        title: "Sức Mạnh Của Sự Kỷ Luật",
        skill: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.14_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Kỷ luật là cầu nối giữa ước mơ và hiện thực."
        ]
    },
    {
          id: 13,
        title: "Người Nam Châm",
        skill: "Luật hấp dẫn & Tư duy tích cực",
        color: "from-indigo-200 to-blue-200",
        image: "books/Screenshot 2025-08-15 155526.png",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Bạn không thu hút điều bạn muốn - bạn thu hút điều bạn tin mình xứng đáng.",
            "Năng lượng tích cực là thỏi nam châm mạnh nhất vũ trụ – hãy sạc đầy nó mỗi ngày."
        ]
    },
    {
          id: 14,
        title: "38 Bức Thư Rockefeller Gửi Cho Con Trai",
        skill: "Tầm nhìn, kỷ luật thép và tư duy doanh ",
        color: "from-indigo-200 to-blue-200",
        image: "books/38 la thu.png",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Thành công bắt đầu từ thói quen nhỏ: đúng giờ, giữ lời, và luôn học hỏi kẻ thù.",
            "Kẻ mạnh không sợ thất bại - họ sợ sự tự mãn sau chiến thắng."
        ]
    },
    {
          id: 15,
        title: "Cây cam ngọt của tôi",
        skill: "Tiểu thuyết văn học • Tự sự • Hồi ký tuổi thơ",
        color: "from-indigo-200 to-blue-200",
        image: "books/Screenshot 2025-08-15 160216.png",
        animation: "fade-in",
        progress: 100,
        notes: [
             "🌳 Đôi khi, những điều bé nhỏ nhất – một cái cây, một người bạn – lại dạy ta bài học lớn nhất về tình yêu và nỗi đau.",
             "🍊 Trái tim trẻ thơ như trái cam ngọt: có vị ngọt của hy vọng, nhưng cũng ẩn chút chua chát của cuộc đời."
        ]
    }
    
];
const BookJourneyDiary = () => {
    const [current, setCurrent] = useState(0);
    const book = books[current];
    const responsive = useResponsive({
        tiny: 350,
        mobile: 576,
        tablet: 768,
        desktop: 1024
    })

//     useEffect(() => {
//     books.forEach(src => {
//         const{image}=src
//       const img = new Image();
//       img.src = image;
//     });
//   }, []);

    return (
        <>
            <Breadcrumb homeUrl={"/"} currentUrl={""} homeContent={"Trang chủ"} currentContent={"Book Journey Diary"} bgColor={"black"} color={"white"} />
            <div className="container-fluid books position-relative">
       <div className='books-background'>
<AnimatePresence mode="wait">
  <motion.img
    key={book.image}
    src={book.image}
    alt=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  />
</AnimatePresence>
        </div>         

  
                <div className="overlay">
                </div>
                <div className="row">
                    <div className={`mx-auto ${responsive.mobile?"col-12":"col-9"}`}>
                        <div className={`min-vh-100 mw-100 ${responsive.mobile?"p-0 pt-4 pb-4":"p-4"} d-flex flex-column align-items-center justify-content-start border-start border-end border-black`}>
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className={`position-relative books-content ${book.color} ${responsive.mobile ? "w-100" : "w-50"}`}>
                                    <div className="justify-content-start d-flex align-items-center gap-3">
                                         <BookOpen />
                                              <h2 className="rounded-5 fs-2 bold mb-2 d-flex align-items-center gap-2">
                                    {book.title}
                                            </h2>
                                    </div>
                                <div>
                                <p className="italic text-sm mb-4">{book.skill}</p>
                                </div>  
                                <div className={`mx-auto text-center ${responsive.mobile?"col-12":"col-7"}`}>
                                    <img src={book.image} alt={book.title} className="rounded-5 object-fit-cover mb-4 accordion" />
                                      <div className="wrapper">
  <div className="cube">
    <svg id="ant1" className="ants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.39 53.12"><title>ant</title><path d="M539.22,398.8a20.17,20.17,0,0,0,3-10.91,14,14,0,0,1,6.22-12.12c.58-.41.56-1.79.6-2.74,0-.18-1-.44-1.53-.61a10.21,10.21,0,0,1-2.52-.74,3.21,3.21,0,0,0-3.17-.18,16.22,16.22,0,0,1-5,.34c-.4,0-.8-.54-1.2-.83l.17-.32c.3.09.6.16.89.27a4.36,4.36,0,0,0,4.08-.16c1.9-1.12,3.92-1.5,5.88.08a8.9,8.9,0,0,0,1.79.86c.43-2.45.07-4.19-1.94-5.61-1.13-.8-1.77-2.3-2.59-3.51a4.82,4.82,0,0,1-.58-1.2c-.89-2.69-3.22-3.93-5.38-5.33a8.47,8.47,0,0,1-.86-.64c-.09-.07-.11-.23-.32-.71.74.37,1.22.58,1.67.83,1.32.74,2.66,1.45,3.92,2.28a3.13,3.13,0,0,1,1,1.45,13.54,13.54,0,0,0,4.09,6l1.88-2.86c-2.65-.24-3.22-1.08-2.51-3.8.22-.86.56-1.68.91-2.71-1.3-.4-2.55-.85-3.83-1.17a3,3,0,0,1-2.21-1.94c-1-2.31-1.82-4.69-3.92-6.3-.13-.1-.11-.38.08-.83.42.31,1,.52,1.24.94,1,1.66,1.92,3.41,3,5.06a5.58,5.58,0,0,0,1.66,1.73,19.86,19.86,0,0,0,2.81,1.25c1,.44,2,.88,3.13.07a1.68,1.68,0,0,1,1.42-.13c1.29.57,2.27-.17,3.4-.52,2.45-.75,4.18-2,4.47-4.76a3.2,3.2,0,0,1,2.11-2.53,3.33,3.33,0,0,1-.26.82,9.36,9.36,0,0,0-2,5,1.67,1.67,0,0,1-1.59,1.65c-1.33.26-2.62.7-3.87,1a38.19,38.19,0,0,1,1.09,4c.36,2.31-.35,3.06-2.8,3l1.91,3a46.1,46.1,0,0,0,3-4.59c.74-1.48,1.2-2.93,3-3.58,1.38-.49,2.57-1.55,4.06-2.15a2.18,2.18,0,0,1-.39.65,8.37,8.37,0,0,1-1.66,1.13c-2.62,1.17-3.78,3.5-4.92,5.91a11.72,11.72,0,0,1-2.19,3.19c-2.42,2.44-2.18,2.73-2,5.77a7.21,7.21,0,0,0,1.52-.72c1.88-1.54,3.86-1.32,5.75-.2a4.4,4.4,0,0,0,4.45.1c.2-.09.41-.15.61-.22l.26.36c-.55.34-1.1,1-1.66,1-1.8,0-3.66.35-5.35-.72a2.33,2.33,0,0,0-1.56.07c-1.22.33-2.43.73-3.63,1.13a1.85,1.85,0,0,0-.86.47c-.28.35.41,3,.78,3.36.79.72,1.59,1.43,2.36,2.18,2.78,2.68,3.25,6.16,3.36,9.75a22.41,22.41,0,0,0,2.87,10.44,1.74,1.74,0,0,1-1.64-1.54c-.86-3.41-2.14-6.72-2.29-10.31-.14-3.25-.56-4.16-1.89-5.52a24.93,24.93,0,0,1-.17,4.45,12.52,12.52,0,0,1-1.68,4.17c-1.53,2.36-4.41,2.28-6-.05-1.85-2.67-2.05-5.66-1.53-8.76.06-.35.16-.69.25-1.07a6.81,6.81,0,0,0-2.94,5.69c-.17,3.81-1.31,7.38-2.26,11A2.54,2.54,0,0,1,539.22,398.8Z" transform="translate(-535.68 -345.68)" /></svg>
    <svg id="ant2" className="ants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.39 53.12"><title>ant</title><path d="M539.22,398.8a20.17,20.17,0,0,0,3-10.91,14,14,0,0,1,6.22-12.12c.58-.41.56-1.79.6-2.74,0-.18-1-.44-1.53-.61a10.21,10.21,0,0,1-2.52-.74,3.21,3.21,0,0,0-3.17-.18,16.22,16.22,0,0,1-5,.34c-.4,0-.8-.54-1.2-.83l.17-.32c.3.09.6.16.89.27a4.36,4.36,0,0,0,4.08-.16c1.9-1.12,3.92-1.5,5.88.08a8.9,8.9,0,0,0,1.79.86c.43-2.45.07-4.19-1.94-5.61-1.13-.8-1.77-2.3-2.59-3.51a4.82,4.82,0,0,1-.58-1.2c-.89-2.69-3.22-3.93-5.38-5.33a8.47,8.47,0,0,1-.86-.64c-.09-.07-.11-.23-.32-.71.74.37,1.22.58,1.67.83,1.32.74,2.66,1.45,3.92,2.28a3.13,3.13,0,0,1,1,1.45,13.54,13.54,0,0,0,4.09,6l1.88-2.86c-2.65-.24-3.22-1.08-2.51-3.8.22-.86.56-1.68.91-2.71-1.3-.4-2.55-.85-3.83-1.17a3,3,0,0,1-2.21-1.94c-1-2.31-1.82-4.69-3.92-6.3-.13-.1-.11-.38.08-.83.42.31,1,.52,1.24.94,1,1.66,1.92,3.41,3,5.06a5.58,5.58,0,0,0,1.66,1.73,19.86,19.86,0,0,0,2.81,1.25c1,.44,2,.88,3.13.07a1.68,1.68,0,0,1,1.42-.13c1.29.57,2.27-.17,3.4-.52,2.45-.75,4.18-2,4.47-4.76a3.2,3.2,0,0,1,2.11-2.53,3.33,3.33,0,0,1-.26.82,9.36,9.36,0,0,0-2,5,1.67,1.67,0,0,1-1.59,1.65c-1.33.26-2.62.7-3.87,1a38.19,38.19,0,0,1,1.09,4c.36,2.31-.35,3.06-2.8,3l1.91,3a46.1,46.1,0,0,0,3-4.59c.74-1.48,1.2-2.93,3-3.58,1.38-.49,2.57-1.55,4.06-2.15a2.18,2.18,0,0,1-.39.65,8.37,8.37,0,0,1-1.66,1.13c-2.62,1.17-3.78,3.5-4.92,5.91a11.72,11.72,0,0,1-2.19,3.19c-2.42,2.44-2.18,2.73-2,5.77a7.21,7.21,0,0,0,1.52-.72c1.88-1.54,3.86-1.32,5.75-.2a4.4,4.4,0,0,0,4.45.1c.2-.09.41-.15.61-.22l.26.36c-.55.34-1.1,1-1.66,1-1.8,0-3.66.35-5.35-.72a2.33,2.33,0,0,0-1.56.07c-1.22.33-2.43.73-3.63,1.13a1.85,1.85,0,0,0-.86.47c-.28.35.41,3,.78,3.36.79.72,1.59,1.43,2.36,2.18,2.78,2.68,3.25,6.16,3.36,9.75a22.41,22.41,0,0,0,2.87,10.44,1.74,1.74,0,0,1-1.64-1.54c-.86-3.41-2.14-6.72-2.29-10.31-.14-3.25-.56-4.16-1.89-5.52a24.93,24.93,0,0,1-.17,4.45,12.52,12.52,0,0,1-1.68,4.17c-1.53,2.36-4.41,2.28-6-.05-1.85-2.67-2.05-5.66-1.53-8.76.06-.35.16-.69.25-1.07a6.81,6.81,0,0,0-2.94,5.69c-.17,3.81-1.31,7.38-2.26,11A2.54,2.54,0,0,1,539.22,398.8Z" transform="translate(-535.68 -345.68)" /></svg>
    <svg id="ant3" className="ants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.39 53.12"><title>ant</title><path d="M539.22,398.8a20.17,20.17,0,0,0,3-10.91,14,14,0,0,1,6.22-12.12c.58-.41.56-1.79.6-2.74,0-.18-1-.44-1.53-.61a10.21,10.21,0,0,1-2.52-.74,3.21,3.21,0,0,0-3.17-.18,16.22,16.22,0,0,1-5,.34c-.4,0-.8-.54-1.2-.83l.17-.32c.3.09.6.16.89.27a4.36,4.36,0,0,0,4.08-.16c1.9-1.12,3.92-1.5,5.88.08a8.9,8.9,0,0,0,1.79.86c.43-2.45.07-4.19-1.94-5.61-1.13-.8-1.77-2.3-2.59-3.51a4.82,4.82,0,0,1-.58-1.2c-.89-2.69-3.22-3.93-5.38-5.33a8.47,8.47,0,0,1-.86-.64c-.09-.07-.11-.23-.32-.71.74.37,1.22.58,1.67.83,1.32.74,2.66,1.45,3.92,2.28a3.13,3.13,0,0,1,1,1.45,13.54,13.54,0,0,0,4.09,6l1.88-2.86c-2.65-.24-3.22-1.08-2.51-3.8.22-.86.56-1.68.91-2.71-1.3-.4-2.55-.85-3.83-1.17a3,3,0,0,1-2.21-1.94c-1-2.31-1.82-4.69-3.92-6.3-.13-.1-.11-.38.08-.83.42.31,1,.52,1.24.94,1,1.66,1.92,3.41,3,5.06a5.58,5.58,0,0,0,1.66,1.73,19.86,19.86,0,0,0,2.81,1.25c1,.44,2,.88,3.13.07a1.68,1.68,0,0,1,1.42-.13c1.29.57,2.27-.17,3.4-.52,2.45-.75,4.18-2,4.47-4.76a3.2,3.2,0,0,1,2.11-2.53,3.33,3.33,0,0,1-.26.82,9.36,9.36,0,0,0-2,5,1.67,1.67,0,0,1-1.59,1.65c-1.33.26-2.62.7-3.87,1a38.19,38.19,0,0,1,1.09,4c.36,2.31-.35,3.06-2.8,3l1.91,3a46.1,46.1,0,0,0,3-4.59c.74-1.48,1.2-2.93,3-3.58,1.38-.49,2.57-1.55,4.06-2.15a2.18,2.18,0,0,1-.39.65,8.37,8.37,0,0,1-1.66,1.13c-2.62,1.17-3.78,3.5-4.92,5.91a11.72,11.72,0,0,1-2.19,3.19c-2.42,2.44-2.18,2.73-2,5.77a7.21,7.21,0,0,0,1.52-.72c1.88-1.54,3.86-1.32,5.75-.2a4.4,4.4,0,0,0,4.45.1c.2-.09.41-.15.61-.22l.26.36c-.55.34-1.1,1-1.66,1-1.8,0-3.66.35-5.35-.72a2.33,2.33,0,0,0-1.56.07c-1.22.33-2.43.73-3.63,1.13a1.85,1.85,0,0,0-.86.47c-.28.35.41,3,.78,3.36.79.72,1.59,1.43,2.36,2.18,2.78,2.68,3.25,6.16,3.36,9.75a22.41,22.41,0,0,0,2.87,10.44,1.74,1.74,0,0,1-1.64-1.54c-.86-3.41-2.14-6.72-2.29-10.31-.14-3.25-.56-4.16-1.89-5.52a24.93,24.93,0,0,1-.17,4.45,12.52,12.52,0,0,1-1.68,4.17c-1.53,2.36-4.41,2.28-6-.05-1.85-2.67-2.05-5.66-1.53-8.76.06-.35.16-.69.25-1.07a6.81,6.81,0,0,0-2.94,5.69c-.17,3.81-1.31,7.38-2.26,11A2.54,2.54,0,0,1,539.22,398.8Z" transform="translate(-535.68 -345.68)" /></svg>
    <svg id="ant4" className="ants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.39 53.12"><title>ant</title><path d="M539.22,398.8a20.17,20.17,0,0,0,3-10.91,14,14,0,0,1,6.22-12.12c.58-.41.56-1.79.6-2.74,0-.18-1-.44-1.53-.61a10.21,10.21,0,0,1-2.52-.74,3.21,3.21,0,0,0-3.17-.18,16.22,16.22,0,0,1-5,.34c-.4,0-.8-.54-1.2-.83l.17-.32c.3.09.6.16.89.27a4.36,4.36,0,0,0,4.08-.16c1.9-1.12,3.92-1.5,5.88.08a8.9,8.9,0,0,0,1.79.86c.43-2.45.07-4.19-1.94-5.61-1.13-.8-1.77-2.3-2.59-3.51a4.82,4.82,0,0,1-.58-1.2c-.89-2.69-3.22-3.93-5.38-5.33a8.47,8.47,0,0,1-.86-.64c-.09-.07-.11-.23-.32-.71.74.37,1.22.58,1.67.83,1.32.74,2.66,1.45,3.92,2.28a3.13,3.13,0,0,1,1,1.45,13.54,13.54,0,0,0,4.09,6l1.88-2.86c-2.65-.24-3.22-1.08-2.51-3.8.22-.86.56-1.68.91-2.71-1.3-.4-2.55-.85-3.83-1.17a3,3,0,0,1-2.21-1.94c-1-2.31-1.82-4.69-3.92-6.3-.13-.1-.11-.38.08-.83.42.31,1,.52,1.24.94,1,1.66,1.92,3.41,3,5.06a5.58,5.58,0,0,0,1.66,1.73,19.86,19.86,0,0,0,2.81,1.25c1,.44,2,.88,3.13.07a1.68,1.68,0,0,1,1.42-.13c1.29.57,2.27-.17,3.4-.52,2.45-.75,4.18-2,4.47-4.76a3.2,3.2,0,0,1,2.11-2.53,3.33,3.33,0,0,1-.26.82,9.36,9.36,0,0,0-2,5,1.67,1.67,0,0,1-1.59,1.65c-1.33.26-2.62.7-3.87,1a38.19,38.19,0,0,1,1.09,4c.36,2.31-.35,3.06-2.8,3l1.91,3a46.1,46.1,0,0,0,3-4.59c.74-1.48,1.2-2.93,3-3.58,1.38-.49,2.57-1.55,4.06-2.15a2.18,2.18,0,0,1-.39.65,8.37,8.37,0,0,1-1.66,1.13c-2.62,1.17-3.78,3.5-4.92,5.91a11.72,11.72,0,0,1-2.19,3.19c-2.42,2.44-2.18,2.73-2,5.77a7.21,7.21,0,0,0,1.52-.72c1.88-1.54,3.86-1.32,5.75-.2a4.4,4.4,0,0,0,4.45.1c.2-.09.41-.15.61-.22l.26.36c-.55.34-1.1,1-1.66,1-1.8,0-3.66.35-5.35-.72a2.33,2.33,0,0,0-1.56.07c-1.22.33-2.43.73-3.63,1.13a1.85,1.85,0,0,0-.86.47c-.28.35.41,3,.78,3.36.79.72,1.59,1.43,2.36,2.18,2.78,2.68,3.25,6.16,3.36,9.75a22.41,22.41,0,0,0,2.87,10.44,1.74,1.74,0,0,1-1.64-1.54c-.86-3.41-2.14-6.72-2.29-10.31-.14-3.25-.56-4.16-1.89-5.52a24.93,24.93,0,0,1-.17,4.45,12.52,12.52,0,0,1-1.68,4.17c-1.53,2.36-4.41,2.28-6-.05-1.85-2.67-2.05-5.66-1.53-8.76.06-.35.16-.69.25-1.07a6.81,6.81,0,0,0-2.94,5.69c-.17,3.81-1.31,7.38-2.26,11A2.54,2.54,0,0,1,539.22,398.8Z" transform="translate(-535.68 -345.68)" /></svg>
  </div>
</div>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold mb-1">Trích dẫn hay:</p>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        {
                                        book.notes.map((note, i) => (
                                            <li key={i}>{note}</li>
                                        ))
                                        }
                                    </ul>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div className="fs-5 d-flex align-items-center gap-2">
                                        <BookmarkCheck className="w-4 h-4" /> Đã đọc: {book.progress}%
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button onClick={() => {
                                            setCurrent((current - 1 + books.length) % books.length)
                                        }
                                    } className='btn btn-outline-dark'>◀ Trước</button>
                                        <button onClick={() => setCurrent((current + 1) % books.length)} className='btn btn-outline-dark'> Tiếp ▶</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BookJourneyDiary
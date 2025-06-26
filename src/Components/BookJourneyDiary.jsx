import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, BookmarkCheck } from "lucide-react";
import useResponsive from '../hooks/useResponsive';
const books = [
    {
        id: 1,
        title: "Người Nam Châm",
        skill: "Luật Hấp Dẫn",
        color: "from-yellow-200 to-pink-200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUJruiuPX20UEkfQQowCWzRcdP4hPz8ozlQ&s",
        animation: "fade-in",
        progress: 35,
        notes: [
            "Biểu đồ chữ T giúp làm rõ điều mình thật sự mong muốn",
            "Ngôn ngữ tích cực có sức mạnh định hình rung động"
        ]
    },
    {
        id: 2,
        title: "Sức Mạnh Của Kỷ Luật",
        skill: "Tự kiểm soát",
        color: "from-indigo-200 to-blue-200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1h43gGyciu88xOs1E-S6z4hfuPSkrQvUrQ&s",
        animation: "slide-left",
        progress: 80,
        notes: [
            "Tạo thói quen là chìa khóa vượt qua sự trì hoãn",
            "Kỷ luật là cầu nối giữa mục tiêu và thành công"
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
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className={`min-vh-100 mw-100 p-4 d-flex flex-column align-items-center justify-content-center border-start border-end border-black`}>
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`p-4 border border-black rounded-5 ${book.color} ${responsive.mobile ? "w-100" : "w-50"}`} style={{ minHeight: 500 }}>

                            <h2 className="rounded-5 fs-2 bold mb-2 d-flex align-items-center gap-2">
                                <BookOpen /> {book.title}
                            </h2>
                            <p className="italic text-sm mb-4">{book.skill}</p>
                            <img src={book.image} alt={book.title} className="rounded-5 mw-25 object-fit-cover mb-4 accordion" />

                            <div className="mb-4">
                                <p className="font-semibold mb-1">Ghi chú tâm đắc:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    {book.notes.map((note, i) => (
                                        <li key={i}>{note}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="fs-5 d-flex align-items-center gap-2">
                                    <BookmarkCheck className="w-4 h-4" /> Đã đọc: {book.progress}%
                                </div>
                                <div className="d-flex gap-2">
                                    <button onClick={() => setCurrent((current - 1 + books.length) % books.length)} className='btn btn-outline-dark'>◀ Trước</button>
                                    <button onClick={() => setCurrent((current + 1) % books.length)} className='btn btn-outline-dark'> Tiếp ▶</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookJourneyDiary
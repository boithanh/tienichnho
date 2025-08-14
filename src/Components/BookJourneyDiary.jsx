import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, BookmarkCheck } from "lucide-react";
import useResponsive from '../hooks/useResponsive';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import smcskt from './../assets/image/books/CamScanner 13-8-25 20.09_1.jpeg';
import { path } from '../common/path';
const books = [
    {
        id: 1,
        title: "Sức mạnh của sự kiên trì",
        skill: "Self-help, tâm lý ứng dụng",
        color: "from-yellow-200 to-pink-200",
        image: "books/CamScanner 13-8-25 20.09_1.jpeg",
        animation: "fade-in",
        progress: 82,
        notes: [
            "Tôi không phải là người lạc quan, vì tôi không chắc mọi chuyện sẽ có một kết thúc có hậu; tôi không phải là người bi quan, vì tôi không chắc mọi chuyện sẽ có một kết thúc tồi tệ. Tôi chỉ có hy vọng thôi... - Nhà văn Séc Havel"
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
           "Lý thuyết trò chơi là bách khoa toàn thư về tâm lý học, về tẩy não và chống lại tẩy não, thao túng và chống lại thao túng, thống trị và chống lại thống trị",
           "Cuốn sách giới thiệu công thức chiến thắng cho những 'trò chơi' đấu trí giữa người với người trong cuộc sống hằng ngày",
           "Phân tách các khái niệm lý thuyết trò chơi vốn mơ hồ trở thành ngôn ngữ dễ hiểu và kết nối liền mạch với nghệ thuật tâm lý học; cho phép bạn nắm vững những bí ẩn của trò chơi tâm lý trong thời gian ngắn nhất."
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
            "Các chuyên gia đã thiết kế những phương pháp, nguyên tắc học tập thông minh và tốt nhất hiện nay, nhằm mang lại một giải pháp đột phá và tác động tích cực cho nền giáo dục Việt Nam.",
            "Cuốn sách này được dịch sang nhiều thứ tiếng và bán chạy tại hơn 25 quốc gia, được sử dụng trong các trường Đại học quốc tế danh giá"
        ]
    },
    {
        id: 4,
        title: "Đắc nhân tâm",
        skill: "Kinh điển về kỹ năng mềm",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.56_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Đắc Nhân Tâm - How to Win Friends and Influence People của Dale Carnegie là tác phẩm nổi tiếng nhất thế giới và có tầm ảnh hưởng mạnh mẽ nhất của mọi thời đại. Cuốn sách đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia. Đây là cuốn sách liên tục đứng đầu danh mục sách bán chạy nhất (Best-selling Books) do báo The New York Times bình chọn suốt mười năm liền. Tác phẩm có sức lan tỏa vô cùng rộng lớn - dù bạn đi đến bất cứ đâu, bất kỳ quốc gia nào cũng đều có thể nhìn thấy. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất về thể loại này, có ảnh hưởng làm thay đổi cuộc đời hàng triệu người trên thế giới.First News trân trọng giới thiệu đến bạn đọc Việt Nam ấn bản được cập nhật, bổ sung đầy đủ nhất."
        ]
    },
    {
        id: 5,
        title: "Khi ta thay đổi thế giới sẽ đổi thay",
        skill: "Self-help, Phát triển cá nhân",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.55_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Cách chúng ta suy nghĩ, cách chúng ta nhìn nhận về bản thân mình và người khác - cả về thể chất, trí tuệ, tinh thần lẫn tình cảm - cùng với cách chúng ta trải nghiệm cuộc sống sẽ quyết định ta là ai. Chúng ta có đủ khôn ngoan hay không? Chúng ta có đang sống với niềm tin vững vàng trong tim hay không? Chúng ta có đang để nỗi sợ kiểm soát hành động của mình không? Chúng ta phải làm gì để thay đổi cuộc sống của mình cho tốt đẹp hơn? Quyển sách nhỏ này sẽ giúp bạn tìm được câu trả lời."
        ]
    },
    {
        id: 6,
        title: "Mặc kệ thiên hạ - Sống như người Nhật",
        skill: "Văn hóa Nhật, Lối sống tối giản",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.25_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Khi mùa đông lạnh lẽo vừa qua đi, mùa xuấn ấm áp sẽ đến. Giây phút bạn chấp nhận từ bỏ và gạt đi định kiến của người khác, sống bằng chính kiến của bản thân sẽ là thời điểm bạn thấy tâm hồn mình thanh thản."
        ]
    },
    {
        id: 7,
        title: "Tư duy mở",
        skill: "Tư duy phản biện, Tư duy sáng tạo",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.22_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Rèn luyện tư duy mở sẽ mang đến rất nhiều lợi ích khác nhau trong cuộc sống cũng như công việc của một người. Có thế kế đến như: Mang đến cái nhìn sâu sắc hơn về cuộc sống. Một người có tư duý mở sẽ không ngừng tiếp thu những kiến thức, ý tưởng mới. Thông qua đó sẽ nâng cao hiểu biết về con người, thế giới xung quanh cũng như hoàn thiện bản thân tôt hơn.",
            "Có cơ hội trải nghiệm nhiều điều mới mẻ, Khi sẵn sàng đón nhận mọi thú với tâm thế cởi mở, sẽ có nhiều cơ hội trải nghiệm những điều mới, vượt qua giới hạn của bạn thân và có cuộc sống nhiều màu sắc hơn. Phát triển bản thân. Giữ tâm trí cởi mở sẽ giúp bạn không ngừng học hỏi, phát triển bản thân mà không bận tâm quá nhiều về vấn đề tuổi tác.",
            "Mạnh mẽ về mặt tinh thần. Luôn cởi mở và sẵn sàng đón nhận những điều mới mẻ có thể giúp bạn trở nên mạnh mẽ, sôi nối hơn. Lạc quan hơn trong cuộc sống. Người cởi mở thường ít có suy nghĩ tiêu cực bởi họ luôn không ngừng tìm hiểu để giải quyết vấn đề mình đang gặp phải thay vì tự kìm hãm bản thân."
        ]
    },
    {
        id: 8,
        title: "Nghệ Thuật từ chối",
        skill: "Kỹ năng giao tiếp, Quản lý thời gian",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.21_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Từ chối người khác là một trong những kỹ năng quan trọng nhất mà bạn cần xây dựng. Nó giải phóng bạn, giúp bạn theo đuổi những lợi ích của mình, cả về phương diện cá nhân lẫn công việc. Với mục đích đó, nó sẽ nâng cao hiệu quả làm việc, cải thiện các mối quan hệ của bạn và mang đến cho bạn sự tự tin và yên bình mà bạn có thể thấy xa lạ vào lúc này.",
            "Sự khác biệt giữa người thành công và người rất thành công là người rất thành công nói 'không' với hầu hết mọi việc"
        ]
    },
    {
        id: 9,
        title: "Bí Ẩn của sự may mắn",
        skill: "Tâm lý học, Luật hấp dẫn",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.19_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Tại sao có những người sống một đời thành công và hành phúc trong khi những người khác lại chỉ toàn đối mặt với thất bại?",
            "Tại sao có những người tìm được người bạn đời lý tưởng trong khi những người khác cứ kéo lê hết mối quan hệ đổ vỡ này đến mối quan hệ đổ vỡ khác?",
            "Điều gì làm cho một số người có được nghề nghiệp thành công trong khi những người khác cứ phải làm những việc mà mình chán ghét?",
            "Vậy những người không may có thể cải thiện vận may và cuộc đời mình được không? Câu trả lời là được."
        ]
    },
    {
        id: 10,
        title: "Gian Nan đừng vội nản",
        skill: "Động lực, Vượt khó",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.17_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Nếu quả đất vẫn tiếp tục quay mà bạn phải đi đến kết thúc...",
            "Nếu bạn đang tìm kiếm ánh sáng mặt trời mà tất cả những gì bạn nhìn thấy là bóng đêm tối mịt...",
            "Nếu tất cả xung quanh bạn là những niềm vui mà riêng với bạn chỉ là nỗi buồn...",
            "Nếu bạn đang quá sức mệt mỏi mà cuộc sống lại tiếp tục quật ngã bạn...",
            "Nếu bạn khóc...",
            "Thì bạn hãy nghĩ những giọt nước mắt của bạn rơi xuống đất đã làm nên điều kỳ diệu: vẻ đẹp của những bông hoa như sự dịu dàng trên tay bạn."
        ]
    },
    {
        id: 11,
        title: "Nghệ thuật từ bỏ thói quen xấu",
        skill: "Tâm lý học hành vi, Thay đổi thói quen",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.15(1)_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Dành cho những bạn đang trong tình trạng 'Mình lại thế nửa rồi...'"
        ]
    },
    {
        id: 12,
        title: "Sức Mạnh Của Sự Kỷ Luật",
        skill: "Kỹ năng sống, động lực.",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.14_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Trí thông minh bẩm sinh giống như những cái vuốt sắc được ban tặng cho những con hổ nhưng nếu những con hổ không rèn luyện, không nỗ lực thì chúng cũng có thể bị chết đói vì không săn được mồi. Để có được phong thái ung dung của chúa tể rừng xanh những con hổ cũng phải tập luyện không ngừng, mỗi ngày đều phải chạy nhanh và nhanh hơn nữa so với ngày hôm trước để có thể đuổi kịp những con mồi. Nếu buông thả bản thân trong sự thoải mái thì những con hổ sớm muộn gì cũng sẽ bị những con vật khác ăn thịt và những cái vuốt sắc kia sẽ chỉ còn đơn thuần giống như vật trang trí không có tác dụng."
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
        <>
            <Breadcrumb homeUrl={"/"} currentUrl={""} homeContent={"Trang chủ"} currentContent={"Book Journey Diary"} bgColor={"black"} color={"white"} />
            <div className="container-fluid books" style={{background:`url("${book.image}")`,
             backgroundRepeat:"no-repeat", 
             backgroundSize:"cover"     
             }}>
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
                                <h2 className="rounded-5 fs-2 bold mb-2 d-flex align-items-center gap-2">
                                    <BookOpen /> {book.title}
                                </h2>
                                <p className="italic text-sm mb-4">{book.skill}</p>
                                <div className='col-7 mx-auto'>
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
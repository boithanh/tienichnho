
function randomId(){
    return (Math.floor(Math.random()*1000)+1)+Date.now();
}

export const books = [
    {
        id: randomId(),
        title: "Sức mạnh của sự kiên trì",
        subject: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-yellow-200 to-pink-200",
        image: "books/CamScanner 13-8-25 20.09_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Kiên trì không phải là chạy nước rút, mà là marathon không vạch đích."
        ]
    },
    {
        id: randomId(),
        title: "Lý thuyết trò chơi",
        subject: "Tâm lý học",
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
        id: randomId(),
        title: "Khóa học cấp tốc về tư bản và tiền bạc",
        subject: "Tư duy tài chính",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 20-8-25 11.39_1.JPG",
        animation: "fade-in",
        progress: 100,
        notes: [
           "Bạn không thể kiểm soát được số phận, nhưng chấc chắn có quyền lèo lái con thuyền cuộc đời mình"
        ],
    },

    {
        id: randomId(),
        title: "Bí Quyết Để Học Ít - Hiểu Nhiều - Nhớ Lâu - Hiệu Quả ",
        subject: "Kỹ năng học thuật",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.57(1)_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Học thông minh quan trọng hơn học nhiều – chất lượng đánh bại số lượng."
        ]
    },
    {
        id: randomId(),
        title: "Đắc nhân tâm",
        subject: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.56_1.jpeg",
        animation: "fade-in",
        progress: 12,
        notes: [
            "Thành công bắt đầu từ việc hiểu người khác trước khi mong họ hiểu mình"
        ]
    },
    {
        id: randomId(),
        title: "Khi ta thay đổi thế giới sẽ đổi thay",
        subject: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.55_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Bạn không thể thay đổi cuộc đời nếu cứ mãi giữ những suy nghĩ cũ."
        ]
    },
    {
        id:randomId(),
        title: "Mặc kệ thiên hạ - Sống như người Nhật",
        subject: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.25_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Sống cho mình, đừng sống vì ánh mắt người khác."
        ]
    },
    {
        id: randomId(),
        title: "Tư duy mở",
        subject: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.22_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Tư duy hẹp giới hạn bạn, tư duy mở mở ra cả thế giới."
        ]
    },
    {
        id: randomId(),
        title: "Nghệ Thuật từ chối",
        subject: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.21_1 2.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Nói 'không' đúng cách là cách bạn nói 'có' với cuộc đời mình."
        ]
    },
    {
        id: randomId(),
        title: "Bí Ẩn của sự may mắn",
        subject: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.19_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "May mắn không phải là ngẫu nhiên, mà là kết quả của tư duy và hành động."
        ]
    },
    {
        id: randomId(),
        title: "Gian Nan đừng vội nản",
        subject: "Phát Triển Bản Thân & Tư Duy",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.17_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Khó khăn là lớp học vĩ đại nhất, nhưng phần thưởng chỉ dành cho người không bỏ cuộc."
        ]
    },
    {
        id: randomId(),
        title: "Nghệ thuật từ bỏ thói quen xấu",
        subject: "Kỹ Năng Sống & Lối Sống",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.15(1)_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Thói quen xấu là kẻ thù thầm lặng - đánh bại nó bằng hành động nhỏ mỗi ngày"
        ]
    },
    {
        id: randomId(),
        title: "Sức Mạnh Của Sự Kỷ Luật",
        subject: "Tâm Lý & Khoa Học Ứng Dụng",
        color: "from-indigo-200 to-blue-200",
        image: "books/CamScanner 13-8-25 20.14_1.jpeg",
        animation: "fade-in",
        progress: 100,
        notes: [
            "Kỷ luật là cầu nối giữa ước mơ và hiện thực."
        ]
    },
    {
          id: randomId(),
        title: "Người Nam Châm",
        subject: "Luật hấp dẫn & Tư duy tích cực",
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
          id: randomId(),
        title: "38 Bức Thư Rockefeller Gửi Cho Con Trai",
        subject: "Tầm nhìn, kỷ luật thép và tư duy doanh ",
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
          id: randomId(),
        title: "Cây cam ngọt của tôi",
        subject: "Tiểu thuyết văn học • Tự sự • Hồi ký tuổi thơ",
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


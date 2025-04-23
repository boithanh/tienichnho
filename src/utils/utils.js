export const generateRandomNumbers = (loaiXoSo = 45) => {
    const numbersSet = new Set();

    while (numbersSet.size < 6) {
        let randomNumber = Math.floor(Math.random() * loaiXoSo) + 1;

        if (randomNumber / 10 >= 1) {
            numbersSet.add(randomNumber);
        }
        else {
            randomNumber = '0' + randomNumber;
            console.log(randomNumber);

            numbersSet.add(randomNumber);
        }
    }
    let tmp = Array.from(numbersSet);
    return tmp.sort();
};

export const defaultLottery = () => {
    const numbersSet = [];

    while (numbersSet.length < 6) {
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        numbersSet.push(randomNumber);
    }
    return numbersSet;
};


export default function createRandomSquares(count) {
    const htmlArr = Array.from({ length: count }).map((_, i) => {
        let size = Math.random() * 50 + 30; // Kích thước từ 30px - 80px
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let borderRadius = Math.random() * 30; // Bo góc từ 0 - 30px
        let blurAmount = Math.random() * 10 + 2; // Độ mờ từ 2px - 12px
        let shadowOpacity = Math.random() * 0.5 + 0.1; // Độ trong suốt của box-shadow
        let backgroundOpacity = Math.random() * 0.5 + 0.2; // Độ trong suốt của background

        return `
            <div class="square"
                style="
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, ${backgroundOpacity});
                    border-radius: ${borderRadius}px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, ${shadowOpacity});
                    backdrop-filter: blur(${blurAmount}px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    position: absolute;
                ">
            </div>`;
    });

    return htmlArr.join(""); // Trả về string HTML
}

export const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
    );
    return str;
};


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Hàm để tạo một hướng ngẫu nhiên cho gradient
function getRandomDirection() {
    const directions = ['to right', 'to left', 'to top', 'to bottom'];
    return directions[Math.floor(Math.random() * directions.length)];
}

// Hàm để tạo ra gradient ngẫu nhiên
export function setRandomBackground() {
    const colors = [getRandomColor(), getRandomColor()];
    const direction = getRandomDirection();
    const gradient = `linear-gradient(${direction}, ${colors.join(', ')})`;
    return gradient;
}


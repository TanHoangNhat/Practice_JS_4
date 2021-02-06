/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu tháng năm từ 2 ô input
 * * * var month =
 * * * var year =
 * * Xử lý
 * * * Nếu month == 2 => kiểm tra năm đó có nhuận hay không rồi đưa ra kết quả
 * * * Nếu month != 2 => Dùng swith case để đưa ra số ngày của tháng là 30 hoặc 31
 * * Đầu ra (output)
 * * * Xuất kế quả ra màn hình
 */

document.getElementById("btnCountDay").onclick = function () {
    var month = parseInt(document.getElementById("txtMonth_2").value);
    var year = parseInt(document.getElementById("txtYear_2").value);

    var result = 0;

    if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            result = 29;
        } else {
            result = 28;
        }
    } else if (month != 2) {
        switch (month) {
            case 1:
                result = 31;
                break;
            case 3:
                result = 31;
                break;
            case 4:
                result = 30;
                break;
            case 5:
                result = 31;
                break;
            case 6:
                result = 30;
                break;
            case 7:
                result = 31;
                break;
            case 8:
                result = 31;
                break;
            case 9:
                result = 30;
                break;
            case 10:
                result = 31;
                break;
            case 11:
                result = 30;
                break;
            case 12:
                result = 31;
                break;
            default:
                break;
        }
    }

    result == 0 ? document.getElementById("txtResult__pro--2").innerHTML = "Vui lòng nhập lại!!!" : document.getElementById("txtResult__pro--2").innerHTML = "Số ngày: " + result;
}
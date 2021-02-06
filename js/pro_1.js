/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu ngày tháng năm từ 3 ô input
 * * * var day =
 * * * var month =
 * * * var year =
 * * * Tạo thêm 6 biến chứa dữ liệu ngày trước và ngày sau
 * * * prevDateDay, prevDateMonth, prevDateYear, nextDateDay, nextDateMonth, nextDateYear
 * * Xử lý
 * * * Dùng if else xử lý các trường hợp ngày đầu tháng, cuối tháng
 * * * Dùng if else để kiểm tra có phải năm nhuận hay không, áp dụng để xử lý tường hợp tháng 2
 * * * Điều kiện để xét năm nhuận là: Năm nhuận là (năm chia hết cho 4 và không chia hết cho 100) HOẶC (là năm chia hết cho 400)
 * * * Gộp những thành phần Ngày, Tháng, Năm lại cho ra kết quả
 * * Đầu ra (output)
 * * * Xuất kế quả ra màn hình
 */

document.getElementById("btnPrevDay").onclick = function () {
    var day = parseInt(document.getElementById("txtDay").value);
    var month = parseInt(document.getElementById("txtMonth").value);
    var year = parseInt(document.getElementById("txtYear").value);

    var prevDateDay = 0;
    var prevDateMonth = 0;
    var prevDateYear = 0;

    var result = "";

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 1 && day <= 30) {
            prevDateDay = day - 1;
            prevDateMonth = month;
            prevDateYear = year;
        } else if (day == 1) {
            prevDateDay = 31;
            prevDateMonth = month - 1;
            prevDateYear = year;
        }
    } else if (month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day > 1 && day <= 31) {
            prevDateDay = day - 1;
            prevDateMonth = month;
            prevDateYear = year;
        } else if (day == 1) {
            prevDateDay = 30;
            prevDateMonth = month - 1;
            prevDateYear = year;
        }
    } else if (month == 3) {
        if (day > 1 && day <= 31) {
            prevDateDay = day - 1;
            prevDateMonth = month;
            prevDateYear = year;
        } else if (day == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                prevDateDay = 29;
                prevDateMonth = month - 1;
                prevDateYear = year;
            } else {
                prevDateDay = 28;
                prevDateMonth = month - 1;
                prevDateYear = year;
            }
        }
    } else if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            if (day > 1 && day <= 29) {
                prevDateDay = day - 1;
                prevDateMonth = month;
                prevDateYear = year;
            } else if (day == 1) {
                prevDateDay = 31;
                prevDateMonth = month - 1;
                prevDateYear = year;
            }
        } else {
            if (day > 1 && day <= 28) {
                prevDateDay = day - 1;
                prevDateMonth = month;
                prevDateYear = year;
            } else if (day == 1) {
                prevDateDay = 31;
                prevDateMonth = month - 1;
                prevDateYear = year;
            }
        }
    } else if (month == 1) {
        if (day > 1 && day <= 31) {
            prevDateDay = day - 1;
            prevDateMonth = month;
            prevDateYear = year;
        } else if (day == 1) {
            prevDateDay = 31;
            prevDateMonth = 12;
            prevDateYear = year - 1;
        }
    }

    // Nếu không chạy vào những trường hợp if else trên nghĩa là ngày tháng nhập vào không đúng định dạng
    if (prevDateDay != 0 && prevDateMonth != 0 && prevDateYear != 0) {
        result = "Ngày trước đó: " + prevDateDay + "/" + prevDateMonth + "/" + prevDateYear;
    } else {
        result = "Vui lòng nhập lại!!!";
    }

    document.getElementById("txtResult__pro--1--1").innerHTML = result;
}

document.getElementById("btnNextDay").onclick = function () {
    var day = parseInt(document.getElementById("txtDay").value);
    var month = parseInt(document.getElementById("txtMonth").value);
    var year = parseInt(document.getElementById("txtYear").value);

    var nextDateDay = 0;
    var nextDateMonth = 0;
    var nextDateYear = 0;

    var result = "";

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 0 && day <= 29) {
            nextDateDay = day + 1;
            nextDateMonth = month;
            nextDateYear = year;
        } else if (day == 30) {
            nextDateDay = 1;
            nextDateMonth = month + 1;
            nextDateYear = year;
        }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
        if (day > 0 && day <= 30) {
            nextDateDay = day + 1;
            nextDateMonth = month;
            nextDateYear = year;
        } else if (day == 31) {
            nextDateDay = 1;
            nextDateMonth = month + 1;
            nextDateYear = year;
        }
    } else if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            // Điều kiện để xét năm nhuận là: Năm nhuận là (năm chia hết cho 4 và không chia hết cho 100) HOẶC (là năm chia hết cho 400)
            if (day > 0 && day <= 28) {
                nextDateDay = day + 1;
                nextDateMonth = month;
                nextDateYear = year;
            } else if (day == 29) {
                nextDateDay = 1;
                nextDateMonth = month + 1;
                nextDateYear = year;
            }
        } else {
            if (day > 0 && day <= 27) {
                nextDateDay = day + 1;
                nextDateMonth = month;
                nextDateYear = year;
            } else if (day == 28) {
                nextDateDay = 1;
                nextDateMonth = month + 1;
                nextDateYear = year;
            }
        }
    } else if (month == 12) {
        if (day > 0 && day <= 30) {
            nextDateDay = day + 1;
            nextDateMonth = month;
            nextDateYear = year;
        } else if (day == 31) {
            nextDateDay = 1;
            nextDateMonth = 1;
            nextDateYear = year + 1;
        }
    }

    // Nếu không chạy vào những trường hợp if else trên nghĩa là ngày tháng nhập vào không đúng định dạng
    if (nextDateDay != 0 && nextDateMonth != 0 && nextDateYear != 0) {
        result = "Ngày tiếp theo: " + nextDateDay + "/" + nextDateMonth + "/" + nextDateYear;
    } else {
        result = "Vui lòng nhập lại!!!";
    }

    document.getElementById("txtResult__pro--1--2").innerHTML = result;
}
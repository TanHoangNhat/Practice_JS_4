/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu 3 số nguyên của người dùng nhập vào
 * * *      => tạo 3 biến để chứa dữ liệu
 * * Xử lý
 * * * So sánh chéo để tìm ra số lớn nhất, số giữa, số nhỏ nhất
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình theo thứ tự tăng dần
 */

document.getElementById("btnOrderNumber").onclick = function () {
    var number_1 = parseInt(document.getElementById("txtNumber_1").value);
    var number_2 = parseInt(document.getElementById("txtNumber_2").value);
    var number_3 = parseInt(document.getElementById("txtNumber_3").value);

    var max = 0;
    var mid = 0;
    var min = 0;

    if (number_1 > number_2) {
        if (number_1 > number_3) {
            max = number_1;
            if (number_2 > number_3) {
                mid = number_2;
                min = number_3;
            } else {
                mid = number_3;
                min = number_2;
            }
        } else {
            max = number_3;
            mid = number_1;
            min = number_2;
        }
    } else {
        if (number_2 > number_3) {
            max = number_2;
            if (number_1 > number_3) {
                mid = number_1;
                min = number_3;
            } else {
                mid = number_3;
                min = number_1;
            }
        } else {
            max = number_3;
            mid = number_2;
            min = number_1;
        }
    }

    document.getElementById("txtResult__basic--1").innerHTML = "Sắp xếp tăng dần: " + min + ", " + mid + ", " + max;
}
/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu 3 số nguyên do người dùng nhập vòa
 * * Xử lý
 * * * Xác định từng số xem nó là chẵn hay lẻ bằng công thức chia lấy dư
 * * * Tạo biến count để đếm số chẵn, số lẻ lấy 3 trừ cho count
 * * Đầu ra (output)
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnFindEvenOdd").onclick = function () {
    var num_1 = parseInt(document.getElementById("txtNum_1").value);
    var num_2 = parseInt(document.getElementById("txtNum_2").value);
    var num_3 = parseInt(document.getElementById("txtNum_3").value);

    var count = 0;

    if (num_1 % 2 == 0) {
        count += 1;
    }

    if (num_2 % 2 == 0) {
        count += 1;
    }

    if (num_3 % 2 == 0) {
        count += 1;
    }

    document.getElementById("txtResult__basic--3").innerHTML = "Kết quả: Số chẵn: " + count + "; Số lẻ: " + (3 - count);
}
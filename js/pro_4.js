/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu từ các ô input của người dùng
 * * * Tạo 3 biến để lưu khoảng cách từ nhà của mỗi SV đến trường
 * * Xử lý
 * * * Dùng công thức tính khoảng cách giữa 2 điểm trong mặt phẳng Oxy, lần lượt cho 3 SV
 * * * So sánh chéo để tìm ra khoảng cách xa nhất
 * * Đầu ra (ouput)
 * * * Xuất kết quả ra màn hình
 */

document.getElementById("btnMaxDistance").onclick = function () {
    var studentName_1 = document.getElementById("txtStudentName_1").value;
    var studentName_2 = document.getElementById("txtStudentName_2").value;
    var studentName_3 = document.getElementById("txtStudentName_3").value;

    var student_1_X = parseInt(document.getElementById("txtStudent_1_X").value);
    var student_1_Y = parseInt(document.getElementById("txtStudent_1_Y").value);
    var student_2_X = parseInt(document.getElementById("txtStudent_2_X").value);
    var student_2_Y = parseInt(document.getElementById("txtStudent_2_Y").value);
    var student_3_X = parseInt(document.getElementById("txtStudent_3_X").value);
    var student_3_Y = parseInt(document.getElementById("txtStudent_3_Y").value);

    var school_X = parseInt(document.getElementById("txtSchool_X").value);
    var school_Y = parseInt(document.getElementById("txtSchool_Y").value);

    var distance_1 = Math.sqrt(Math.pow(school_X - student_1_X, 2) + Math.pow(school_Y - student_1_Y, 2));
    var distance_2 = Math.sqrt(Math.pow(school_X - student_2_X, 2) + Math.pow(school_Y - student_2_Y, 2));
    var distance_3 = Math.sqrt(Math.pow(school_X - student_3_X, 2) + Math.pow(school_Y - student_3_Y, 2));

    var result = "";

    if(distance_1 > distance_2){
        if(distance_1 > distance_3){
            result = studentName_1;
        } else {
            result = studentName_3;
        }
    } else {
        if(distance_2 > distance_3) {
            result = studentName_2;
        } else {
            result = studentName_3;
        }
    }

    document.getElementById("txtResult__pro--4").innerHTML = "Khoảng cách xa nhất là nhà của " + result;
}
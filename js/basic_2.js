/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu người dùng nhập vào => var textInput
 * * Xử lý
 * * * Dùng switch case để tìm các trường hợp của B, M, A, E
 * * Đầu ra (output)
 * * * Xuất câu chào ra màn hình
 */

document.getElementById("btnSayHello").onclick = function() {
    var textInput = document.getElementById("txtText").value;

    var result = "";

    switch(textInput) {
        case "b":
            result = "Chào Bố ạ!!!";
            break;
        case "m":
            result = "Chào Mẹ ạ!!!";
            break;
        case "a":
            result = "Chào Anh ạ!!!";
            break;
        case "e":
            result = "Chào Em gái!!!";
            break;
        case "B":
            result = "Chào Bố ạ!!!";
            break;
        case "M":
            result = "Chào Mẹ ạ!!!";
            break;
        case "A":
            result = "Chào Anh ạ!!!";
            break;
        case "E":
            result = "Chào Em gái!!!";
            break;
        default:
            result = "Vui lòng nhập lại!!!";
    }

    document.getElementById("txtResult__basic--2").innerHTML = result;
}
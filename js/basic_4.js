/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Lấy dữ liệu 3 cạnh của tam giác
 * * Xử lý
 * * * Nếu có 2 cạnh bằng nhau => Tam giác cân
 * * * Nếu có 3 cạnh bằng nhau => Tam giác đều
 * * * Nếu 3 cạnh thỏa định lý pytago => Tam giác vuông
 * * * Nếu không phải 3 loại trên => Tam giác thường
 * * Đầu ra (output)
 * * * Xuất tên tam giác ra màn hình
 */

document.getElementById("btnCallName").onclick = function () {
    var edge_1 = parseInt(document.getElementById("txtEdge_1").value);
    var edge_2 = parseInt(document.getElementById("txtEdge_2").value);
    var edge_3 = parseInt(document.getElementById("txtEdge_3").value);

    var name = "";

    if (edge_1 == edge_2 && edge_2 == edge_3) {
        name = "Tam giác đều";
    } else if ((edge_1 == edge_2 && edge_2 != edge_3) || (edge_1 == edge_3 && edge_3 != edge_2) || (edge_2 == edge_3 && edge_3 != edge_1)) {
        name = "Tam giác cân";
    } else if (Math.pow(edge_1, 2) + Math.pow(edge_2, 2) == Math.pow(edge_3, 2) ||
        Math.pow(edge_1, 2) + Math.pow(edge_3, 2) == Math.pow(edge_2, 2) ||
        Math.pow(edge_2, 2) + Math.pow(edge_3, 2) == Math.pow(edge_1, 2)) {
        name = "Tam giác vuông";
    } else {
        name = "Tam giác thường";
    }

    document.getElementById("txtResult__basic--4").innerHTML = "Tam giác này là " + name;
}
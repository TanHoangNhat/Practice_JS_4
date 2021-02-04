/**
 * Mô hình 3 khối
 * * Đầu vào (input)
 * * * Số nguyên có 3 chữ số => var number
 * * * var unit = 0
 * * * var ten = 0
 * * * var hundred = 0
 * * Xử lý
 * * * hundred = number / 100
 * * * ten = number % 100 / 10
 * * * unit number % 10
 * * * Đổi số sang chữ => dùng switch case
 * * * Ghép chữ thành cách đọc => dùng if else
 * * Đầu ra (output)
 * * * Xuất ra màn hình cách đọc
 */

document.getElementById("btnSpell").onclick = function () {
    var number = parseInt(document.getElementById("txtThreeDigitsNumber").value);
    var hundred = Math.floor(number / 100);
    var ten = Math.floor((number % 100) / 10);
    var unit = number % 10;

    var hundredSpell = "";
    var tenSpell = "";
    var unitSpell = "";

    var numberSpell = "";

    switch (hundred) {
        case 1:
            hundredSpell = "Một";
            break;
        case 2:
            hundredSpell = "Hai";
            break;
        case 3:
            hundredSpell = "Ba";
            break;
        case 4:
            hundredSpell = "Bốn";
            break;
        case 5:
            hundredSpell = "Năm";
            break;
        case 6:
            hundredSpell = "Sáu";
            break;
        case 7:
            hundredSpell = "Bảy";
            break;
        case 8:
            hundredSpell = "Tám";
            break;
        case 9:
            hundredSpell = "Chín";
            break;
        default:
            hundredSpell = "Không";
    }

    switch (ten) {
        case 1:
            tenSpell = "mười";
            break;
        case 2:
            tenSpell = "hai";
            break;
        case 3:
            tenSpell = "ba";
            break;
        case 4:
            tenSpell = "bốn";
            break;
        case 5:
            tenSpell = "năm";
            break;
        case 6:
            tenSpell = "sáu";
            break;
        case 7:
            tenSpell = "bảy";
            break;
        case 8:
            tenSpell = "tám";
            break;
        case 9:
            tenSpell = "chín";
            break;
        default:
            tenSpell = "Không";
    }

    switch (unit) {
        case 1:
            unitSpell = "một";
            break;
        case 2:
            unitSpell = "hai";
            break;
        case 3:
            unitSpell = "ba";
            break;
        case 4:
            unitSpell = "bốn";
            break;
        case 5:
            unitSpell = "năm";
            break;
        case 6:
            unitSpell = "sáu";
            break;
        case 7:
            unitSpell = "bảy";
            break;
        case 8:
            unitSpell = "tám";
            break;
        case 9:
            unitSpell = "chín";
            break;
        default:
            unitSpell = "Không";
    }

    if (ten != 1) {
        tenSpell += " mươi";
    }

    if (hundred != 0 && ten != 0 && unit != 0) {
        if (unit == 5) {
            numberSpell = hundredSpell + " trăm " + tenSpell + " lăm";
        } else if (unit == 1 && ten != 1) {
            numberSpell = hundredSpell + " trăm " + tenSpell + " mốt";
        } else {
            numberSpell = hundredSpell + " trăm " + tenSpell + " " + unitSpell;
        }
    } else if (hundred != 0 && ten == 0 && unit != 0) {
        numberSpell = hundredSpell + " trăm lẻ " + unitSpell;
    } else if (hundred != 0 && ten != 0 && unit == 0) {
        numberSpell = hundredSpell + " trăm " + tenSpell;
    } else if (hundred != 0 && ten == 0 && unit == 0) {
        numberSpell = hundredSpell + " trăm";
    }

    document.getElementById("txtResult__ad--3").innerHTML = numberSpell;
}
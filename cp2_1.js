const arr = ["rau xào", "thịt luộc", " gà rán"];
const setjson = JSON.stringify(arr);
localStorage.setItem("menu", setjson);

function nhap(){
let x = prompt("Nhập vào một trong các lệnh C, R, U, D: ")
    if (x == "C"){
        let z = prompt("Nhập tên món ăn mới: ");
        arr.push(z);
        setjson = JSON.stringify(arr);
        localStorage.setItem(" menu", setjson);
    }else if (x == "R"){
        alert(arr.join(", "));
    }else if (x == "U"){
        let cu = prompt("Nhập vào tên món ăn muốn update: ");
        let moi = prompt(" Nhập vào tên món ăn mới: ");
        arr[arr.indexOf(cu)] = moi;
        setjson = JSON.stringify(arr);
        localStorage.setItem(" menu", setjson);
    }else if (x == "D"){
        let xoa = prompt(" Nhập vào tên món ăn muốn xoá: ");
        arr.splice(arr.indexOf(xoa), 1);
        setjson = JSON.stringify(arr);
        localStorage.setItem(" menu", setjson);
    }
}

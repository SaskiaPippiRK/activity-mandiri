function fn_ValForm() {
var sMsg = "";
var inputEmail = document.getElementById("email").value;
var formatEmail = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z]{2,}$/i;

if(document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
}
if(inputEmail == "") {
    sMsg += "\n* Anda belum mengisikan email";
} else {
    if(!formatEmail.test(inputEmail)) {
        sMsg += "\n* Email anda invalid";
    }
}
if(document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan message";
}

if(sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
} else {
    return true;
}
}
function login()
{
    var uname = document.getElementById('uname').value;
    var pwd = document.getElementById('pwd').value;
    alert('Username: '+uname+'\nPassword: '+ pwd)
    document.getElementById('uname').value = "";
    document.getElementById('pwd').value = "";

}

document.addEventListener("DOMContentLoaded", function(event) {
    var login_btn = document.getElementById('login');
    login_btn.addEventListener('click', login, false);
});
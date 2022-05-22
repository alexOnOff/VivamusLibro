const send = function () {
let login = document.getElementById('login').value;
let password = document.getElementById('password').value;
text = 'Зарегистрирован новый пользователь - ' + login
let url = `https://api.telegram.org/bot5064591398:AAGuDMoH0DThKh-8oFaP92P4m8QRG90oOuM/sendMessage?chat_id=1003676067&text=${text}`;
document.location = "";
let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
let xhr = new XHR();
xhr.open('GET', url, true);
xhr.send();
}
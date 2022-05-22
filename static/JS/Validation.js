$(document).ready(function() {
$("#reg_form").validate({
    errorClass: "error fail_alert",
    validClass: "valid success-alert",
    rules: {
        login:{
            required: true,
            minlength: 3,
            maxlength: 20
        },
        user_email:{
            required: true
        },
        password:{
            required: true,
            minlength: 5
        },
        birthday:{
            required: true,
            min: "01.01.1900",
            max: "31.12.2022"
        }
    },
    messages:{
        login: {
            required: "Логин должен содержать от 3 до 20 символов",
            minlength: "Логин должен содержать 3 и более символа",
            maxlength: "Логин должен содержать до 20 символов"
        },
        user_email: {
            required: "Введите свой почтовый ящик",
            email: "Почта должна быть в формате user@domain.rld"
        },
        password: {
            required: "Придумайте пароль",
            minlength: "Пароль должен содержать минимум 5 символов"
        },
        birthday: {
          required: "Введите дату своего рождения",
          max: "Неверная дата рождения",
          min: "Неверная дата рождения"
        }
    }
});
});

$(document).ready(function () {
$("#aut_form").validate({
    errorClass: "error fail_alert",
    validClass: "valid success-alert",
    rules: {
        login:{
            required: true,
            minlength: 3,
            maxlength: 20
        },
        password:{
            required: true,
            minlength: 5
        }
    },
    messages:{
        login: {
            required: "Логин должен содержать от 3 до 20 символов",
            minlength: "Логин должен содержать 3 и более символа",
            maxlength: "Логин должен содержать до 20 символов"
        },
        password: {
            required: "Придумайте пароль",
            minlength: "Пароль должен содержать минимум 5 символов"
        }
    }

});
});



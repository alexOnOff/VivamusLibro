const languageArray = {
    "home" :  {
        "ru": "Главная",
        "en": "Home",
    },
    "library": {
        "ru": "Библиотека",
        "en": "Library",
    },
    "raiting": {
        "ru": "Рейтинг",
        "en": "Raiting",
    },
    "community": {
        "ru": "Сообщество",
        "en": "Community",
    },
    "about": {
        "ru": "О нас",
        "en": "About as",
    },
    "title": {
        "ru": "Истроии, которые оживают",
        "en": "Alive Stories",
    },
    "subtitle": {
        "ru": "Живые истории",
        "en": "Alive Stories",
    },
    "subtitleContext" :  {
        "ru": "Окунитесь в мир историй, где вы станете главным гером. Только от вас зависят ключевые поступки героя, а может и целой группы людей.",
        "en": "Plunge into the world of stories where you will become the main character. The key actions of the hero, or maybe a whole group of people, depend only on you.",
    },
    "popular" :  {
        "ru": "Популярные истории",
        "en": "Popular Stories",
    },
}

function chooseLanguage() {
    if(localStorage.getItem('language') == "en"){
        document.getElementById("home").innerHTML = "Home";
        document.getElementById("library").innerHTML = "Library";
        document.getElementById("raiting").innerHTML = "Raiting";
        document.getElementById("community").innerHTML = "Community";
        document.getElementById("about").innerHTML = "About as";
        document.getElementById("title").innerHTML = "Alive Stories";
        document.getElementById("subtitle").innerHTML = "Alive Stories";
        document.getElementById("subtitleContext").innerHTML = "Plunge into the world of stories where you will become the main character. The key actions of the hero, or maybe a whole group of people, depend only on you.";
        document.getElementById("popular").innerHTML = "Popular Stories";
    }
    else{
        document.getElementById("home").innerHTML = "Главная";
        document.getElementById("library").innerHTML = "Библиотека";
        document.getElementById("raiting").innerHTML = "Рейтинг";
        document.getElementById("community").innerHTML = "Сообщество";
        document.getElementById("about").innerHTML = "О нас";
        document.getElementById("title").innerHTML = "Истроии, которые оживают";
        document.getElementById("subtitle").innerHTML = "Живые истории";
        document.getElementById("subtitleContext").innerHTML = "Окунитесь в мир историй, где вы станете главным гером. Только от вас зависят ключевые поступки героя, а может и целой группы людей.";
        document.getElementById("popular").innerHTML = "Популярные истории";

    }
    console.log('sdf');
}

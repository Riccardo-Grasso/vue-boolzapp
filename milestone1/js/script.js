Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        chat: [
            {
                nome: "Michele",
                img: "img/avatar_1.jpg"
            },
            {
                nome: "Giulia",
                img: "img/avatar_io.jpg"
            },
            {
                nome: "Sara",
                img: "img/avatar_6.jpg"
            },
            {
                nome: "Daniele",
                img: "img/avatar_5.jpg"
            }
        ]
    }
});
Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        chat: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg'
            },
            {
                name: 'Giulia',
                avatar: 'img/avatar_io.jpg'
            },
            {
                name: 'Sara',
                avatar: 'img/avatar_6.jpg'
            },
            {
                name: 'Daniele',
                avatar: 'img/avatar_5.jpg'
            }
        ]
    }
});
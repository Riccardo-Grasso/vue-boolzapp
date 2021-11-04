Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        chat: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                messages: [
                    {
                        text: "Hai portato a spasso il cane?",
                        timestamp: "10/01/2020 15:30:55",
                        status: "sent"
                    },
                    {
                        text: "Ricordati di farlo mangiare!",
                        timestamp: "10/01/2020 15:31:25",
                        status: "sent"
                    },
                    {
                        text: "Tutto fatto!",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                ]

            },

            {
                name: 'Giulia',
                avatar: 'img/avatar_io.jpg',
                messages: [
                    {
                        text: "Hey ciao! Come va?",
                        timestamp: "10/01/2020 15:30:55",
                        status: "sent"
                    },

                    {
                        text: "Tutto bene! A te?",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                ]
            },

            {
                name: 'Sara',
                avatar: 'img/avatar_6.jpg',
                messages: [
                    {
                        text: "A che ora inizia il film questa sera?",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                    {
                        text: "21:30",
                        timestamp: "10/01/2020 15:30:55",
                        status: "sent"
                    },
                    {
                        text: "NON FARE TARDI!!!",
                        timestamp: "10/01/2020 15:31:25",
                        status: "sent"
                    },
                    {
                        text: "Ok ok lol",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                ]
            },

            {
                name: 'Daniele',
                avatar: 'img/avatar_5.jpg',
                messages: [
                    {
                        text: "Oi!",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                    {
                        text: "Sei online?",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                    {
                        text: "Arrivo tra 5 minuti",
                        timestamp: "10/01/2020 15:30:55",
                        status: "sent"
                    },
                    {
                        text: "Ti aspetto",
                        timestamp: "10/01/2020 16:01:45",
                        status: "received"
                    },
                ]
            }
        ],
        active: {},
        nuovoMessaggio: ""
    },
    methods: {
        attivaChat: function (chatAttiva) {
            this.active = chatAttiva;
        },

        ultimoMessaggio(messages) {
            if (messages.length === 0) {
                return "";
            }
            const messaggio = messages[messages.length - 1].text;
            return messaggio; //.slice(0, 20)
        },

        lunghezzaObj(active) {
            length = Object.keys(active).length;
            return length;
        },

        pushNuovoMessaggio() {
            const mess = this.nuovoMessaggio.trim();

            if (mess === "") {
                return;
            }

            this.active.messages.push({
                text: mess,
                timestamp: "10/01/2020 15:30:55",
                status: "sent"
            });

            this.nuovoMessaggio = "";
        },
    }

});
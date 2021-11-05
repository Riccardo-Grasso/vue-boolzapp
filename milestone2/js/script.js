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
                        timestamp: "04/11/2021 15:30:55",
                        status: "sent"
                    },
                    {
                        text: "Ricordati di farlo mangiare!",
                        timestamp: "04/11/2021 15:31:25",
                        status: "sent"
                    },
                    {
                        text: "Tutto fatto!",
                        timestamp: "04/11/2021 16:01:45",
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
                        timestamp: "03/11/2021 09:30:55",
                        status: "sent"
                    },

                    {
                        text: "Tutto bene! A te?",
                        timestamp: "03/11/2021 11:01:45",
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
                        timestamp: "03/11/2021 16:01:45",
                        status: "received"
                    },
                    {
                        text: "21:30",
                        timestamp: "03/11/2021 16:30:55",
                        status: "sent"
                    },
                    {
                        text: "NON FARE TARDI!!!",
                        timestamp: "03/11/2021 16:31:25",
                        status: "sent"
                    },
                    {
                        text: "Ok ok lol",
                        timestamp: "03/11/2021 16:35:45",
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
                        timestamp: "02/11/2021 21:01:45",
                        status: "received"
                    },
                    {
                        text: "Sei online?",
                        timestamp: "02/11/2021 21:02:02",
                        status: "received"
                    },
                    {
                        text: "Arrivo tra 5 minuti",
                        timestamp: "02/11/2021 21:03:55",
                        status: "sent"
                    },
                    {
                        text: "Ti aspetto",
                        timestamp: "02/11/2021 21:04:45",
                        status: "received"
                    },
                ]
            }
        ],
        active: {},
        nuovoMessaggio: "",
        myUltimoAccesso: "",
        myFilter: ""
    },
    methods: {
        attivaChat: function (chatAttiva) {
            this.active = chatAttiva;

            let receivedMessages = chatAttiva.messages.filter(el => el.status == "received");
            console.log(receivedMessages);
            this.myUltimoAccesso = receivedMessages[receivedMessages.length - 1].timestamp;
        },

        ultimoMessaggio(messages) {
            if (messages.length === 0) {
                return "";
            }
            const messaggio = messages[messages.length - 1].text;
            return messaggio; //.slice(0, 20)
        },

        ultimoAccesso(messages) {
            if (messages.length === 0) {
                return "";
            }
            const accesso = messages[messages.length - 1].timestamp;
            return accesso; //.slice(0, 20)
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
                timestamp: this.myDateTime(),
                status: "sent"
            });

            this.nuovoMessaggio = "";

            setTimeout(() => {
                // push del messaggio nell'array dei messaggi
                this.messaggioRisposta();
            }, this.numeroRandom(1000, 3000));
        },

        numeroRandom(min, max) {
            const rand = Math.floor(Math.random() * (max - min + 1) + min);
            return rand;
        },

        messaggioRisposta() {
            this.active.messages.push({
                text: "ok",
                timestamp: this.myDateTime(),
                status: "received"
            });
            this.myUltimoAccesso = this.myDateTime();
        },

        myDateTime() {
            let today = new Date();
            let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date + ' ' + time;

            return dateTime;
        },

        filterChat() {
            return this.chat.filter(contact => {
                return contact.name.toLowerCase().includes(this.myFilter.toLowerCase().trim());
            });
        }
    },
});
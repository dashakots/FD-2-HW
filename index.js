'use strict';

function Participant(name, email) {
    this.name = name;
    this.email = email;
}

function Event(title, date) {
    this.title = title;
    this.date = date;
    this.participants = [];


    this.addParticipant = function(participant) {
        if (participant instanceof Participant) {
            this.participants.push(participant);
        } else {
            console.error(`Участник ${this.title} от ${this.date} должен быть экземпляром Participant`);
        }
    };

    this.listParticipants = function() {
        if (this.participants.length === 0) {
            return `Участников в событии "${this.title}" от ${this.date} нет.`;
        }
        const participantNames = this.participants.map(participant => participant.name)
        return `Участники "${this.title}" от ${this.date} : ${participantNames.join(', ')}.`;
    };


    this.findParticipantByEmail = function(email) {
        return this.participants.find(function(participant) {
            return participant.email === email;
        });
    };
}

// Создание участников

const participant1 = new Participant('Dasha', 'dashakotsuba@mail.ru');
const participant2 = new Participant('Roma', 'roma1995@gmail.com');
const participant3 = new Participant('Jordan', 'jordan@gmail.com');
const participant4 = {
    name: 'Nick',
    email: 'nick@gmail.com',
};

// Создание событий

const event1 = new Event('Webinar', '2024-10-30');
const event2 = new Event('Conference', '2024-12-01');
const event3 = new Event('Party', '2022-07-12');

// Добавление участников к событиям

event1.addParticipant(participant1);
event1.addParticipant(participant3);

// Добавление событий

event2.addParticipant(participant2);
event2.addParticipant(participant4);

// Вывод информации об участниках
console.log(event1.listParticipants());
console.log(event2.listParticipants());
console.log(event3.listParticipants());
console.log(event2.findParticipantByEmail('roma1995@gmail.com'));
console.log(event1.findParticipantByEmail('dashakotsuba@mail.ru'));


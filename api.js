import React from 'react';
import axios from "axios";

const events = [
    {
        ID: "1",
        title: "Ebraheem Birthday",
        catagory: "Birthday",
        date: "25/6/2019",
        where: "sakhnin"
    },
    {
        ID: "2",
        title: "Ebraheem New Born",
        catagory: "New Born",
        date: "25/6/2019",
        where: "sakhnin"
    },
    {
        ID: "3",
        title: "Ebraheem Wedding",
        catagory: "Wedding",
        date: "25/6/2026",
        where: "sakhnin"
    },
    {
        ID: "4",
        title: "Ebraheem Grraduation",
        catagory: "Party",
        date: "25/6/2020",
        where: "sakhnin"
    }
];
const wishes = [
    {
        "userID": "1",
        "ID": "1",
        "from": "Ameer",
        "wishContent": "Happy birthday wish you all the best",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "2",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "3",
        "from": "Samah seh",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "4",
        "from": "Ibraheem",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "5",
        "from": "Arkan",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "6",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "7",
        "from": "Ameer",
        "wishContent": "Best wishes on this wonderful journey, as you build your new lives together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "3",
        "ID": "8",
        "from": "sally",
        "wishContent": "Wishing you joy, love and happiness on your wedding day and as you begin your new life together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "1",
        "ID": "9",
        "from": "Ibraheem",
        "wishContent": "May God grant you all of life's blessings and love's joys",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "2",
        "ID": "10",
        "from": "Ameer",
        "wishContent": "Welcome to the world little one, it is a place full of delights and wonders",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "2",
        "ID": "11",
        "from": "Sally",
        "wishContent": "Wishing you much happiness as you welcome your new little bundle of joy into your family",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "3",
        "ID": "12",
        "from": "Sleman",
        "wishContent": "Congratulations! Now is the time to enjoy your baby’s little feet and baby smell. It will not be there forever, and you should take as many pictures as possible. You will want to miss a single precious moment!",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "13",
        "from": "Basel",
        "wishContent": "Wishing you joy and happiness, and plently of wonderful moments together.",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "14",
        "from": "Basel",
        "wishContent": "Congratulations on your well-deserved success.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "3",
        "ID": "15",
        "from": "sleman",
        "wishContent": "I’m sure today will be only the first of many proud, successful moments for you",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "16",
        "from": "Arkan",
        "wishContent": "Congratulations today and best wishes for all your tomorrows.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "17",
        "from": "Mohamad",
        "wishContent": "Can’t wait to see where life will take you next. Wherever it is, our prayers go with you!",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    }
]
const Users = [
    {
        userId: 1,
        userName: 'sally@gmail.com',
        name: 'sally',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"

            },
            {
                ID: "3",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            }]
    },
    {
        userId: 2,
        userName: '2@gmail.com',
        name: '2',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Ebraheem Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            },
            {
                ID: "3",
                title: "Ebraheem Birthday",
                catagory: "Birthday",
                date: "25/6/2019",
                where: "sakhnin"
            }]
    }
]
const getUserWishesByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const userWishes = wishes.filter(wish => wish.userID == userId);
            resolve(userWishes);
        }, 500);
    })
}
const getUserEventsByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const userEvents = Users.filter(user => (user.userId == userId))[0].events;
            resolve(userEvents);
        }, 500);
    })

}

const getEvents = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(events);
        }, 500);
    })
}
const getWishes = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(wishes);
        }, 500);
    });
}
const FilterEvents = event =>  {
    
}
const getEvent = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            const event = events.find(e => e.ID === id);
            resolve(event);
        }, 500);
    });
}
const getUsers = () => {
    return JSON.parse(localStorage.getItem('users'));
}

export {
    getUsers,
    getWishes,
    getEvents,
    getEvent,
    getUserEventsByUserID,
    getUserWishesByUserID
};
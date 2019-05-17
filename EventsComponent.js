import React from 'react';



import './general.css'
import NavBarComponent from './NavBarComponent';
import SearchedEventComponent from './SearchedEventComponent';
import WishesComponent from './WishesComponent';
export default class EventsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [
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
            ],
            wishes: [
                {
                    "ID": "1",
                    "from": "Ameer",
                    "wishContent": "Happy birthday wish you all the best",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "2",
                    "from": "sally",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "3",
                    "from": "Samah seh",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "4",
                    "from": "Ibraheem",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "5",
                    "from": "Arkan",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "6",
                    "from": "sally",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "7",
                    "from": "Ameer",
                    "wishContent": "Best wishes on this wonderful journey, as you build your new lives together.",
                    "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
                    "eventID": "3"
                },
                {
                    "ID": "8",
                    "from": "sally",
                    "wishContent": "Wishing you joy, love and happiness on your wedding day and as you begin your new life together.",
                    "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
                    "eventID": "3"
                },
                {
                    "ID": "9",
                    "from": "Ibraheem",
                    "wishContent": "May God grant you all of life's blessings and love's joys",
                    "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
                    "eventID": "3"
                },
                {
                    "ID": "10",
                    "from": "Ameer",
                    "wishContent": "Welcome to the world little one, it is a place full of delights and wonders",
                    "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
                    "eventID": "2"
                },
                {
                    "ID": "11",
                    "from": "Sally",
                    "wishContent": "Wishing you much happiness as you welcome your new little bundle of joy into your family",
                    "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
                    "eventID": "2"
                },
                {
                    "ID": "12",
                    "from": "Sleman",
                    "wishContent": "Congratulations! Now is the time to enjoy your baby’s little feet and baby smell. It will not be there forever, and you should take as many pictures as possible. You will want to miss a single precious moment!",
                    "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
                    "eventID": "2"
                },
                {
                    "ID": "13",
                    "from": "Basel",
                    "wishContent": "Wishing you joy and happiness, and plently of wonderful moments together.",
                    "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
                    "eventID": "2"
                },
                {
                    "ID": "14",
                    "from": "Basel",
                    "wishContent": "Congratulations on your well-deserved success.",
                    "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
                    "eventID": "4"
                },
                {
                    "ID": "15",
                    "from": "sleman",
                    "wishContent": "I’m sure today will be only the first of many proud, successful moments for you",
                    "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
                    "eventID": "4"
                },
                {
                    "ID": "15",
                    "from": "Arkan",
                    "wishContent": "Congratulations today and best wishes for all your tomorrows.",
                    "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
                    "eventID": "4"
                },
                {
                    "ID": "16",
                    "from": "Mohamad",
                    "wishContent": "Can’t wait to see where life will take you next. Wherever it is, our prayers go with you!",
                    "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
                    "eventID": "4"
                }
            ],
            searchedID: '',
            searchedEventFlag: false,
            rowIsClicked: false,
            wishIsAdded: false
        };
        this.updateSearchId = this.updateSearchId.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
        this.rowClick = this.rowClick.bind(this);
        this.addBestWish = this.addBestWish.bind(this);
        this.updateWishIsAdded = this.updateWishIsAdded.bind(this);
    }
    updateWishIsAdded(value) {
        if (value)
            this.setState({
                wishIsAdded: false
            });
    }
    updateSearchId(e) {
        // searchedid = value of input field , Searcheventflag is for rendering the table.
        this.setState({ searchedID: e.target.value }, function () {
            console.log(this.state.searchedID);
        });
        { this.state.searchedEventFlag ? this.setState({ searchedEventFlag: false }) : '' }
    }
    searchClicked() {
        this.setState({ searchedEventFlag: true }, function () {
            console.log(this.state.searchedEventFlag);
        });
    }
    rowClick() {
        this.setState({ rowIsClicked: true });
    }

    addBestWish(wish) {
        alert("added successfully");
        this.setState({ wishes: [...this.state.wishes, wish] }, function () {
            this.state.wishes.map((item) => {
                console.log(item.from);
            });
        });
        this.setState({
            wishIsAdded: true
        }, function () {
            console.log("Wish is added?" + this.state.wishIsAdded);
        });
    }
    render() {
        {
            if (!this.state.rowIsClicked) {
                return <>
                    <div className="container">
                        <div className="row">
                            <div id="searchingdiv" style={{ width: "900px" }}>
                                <div className="row" ><h1 style={{ color: "red", textAlign: "center", marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}>Searching for event</h1></div>
                                <div className="row">
                                    <div className="col" style={{ marginLeft: "30px" }}>
                                        <label className="font-weight-bold">Event ID: </label>
                                        <input type="text" style={{ width: "100px" }} value={this.state.searchedID} onChange={this.updateSearchId.bind(this)} />
                                    </div>
                                    <div className="col">
                                        <label style={{ color: "red" }} >OR FILTER</label>
                                    </div>
                                    <div className="col">
                                        <label className="font-weight-bold"> Ctagory:</label>
                                        <select name="Catagory" style={{ width: "100px" }}>
                                            <option value="New Born">New Born</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Party">Party</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label className="font-weight-bold">From Date: </label>
                                        <input id="fromDate" type="date" style={{ width: "100px" }} />
                                    </div>
                                    <div className="col">
                                        <label className="font-weight-bold">To Date: </label>
                                        <input id="toDate" type="date" style={{ width: "100px" }} />
                                    </div>
                                    <div className="col">
                                        <label className="font-weight-bold">Where: </label>
                                        <input type="text" style={{ width: "100px" }} />
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-primary" style={{ border: "2px solid white", marginBottom: "40px" }} onClick={this.searchClicked}>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <center>
                                    <div >
                                        <table style={{ textAlign: "center", marginTop: "30px" }} className="table tablebackground tableStyle" id="result">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Catagory</th>
                                                    <th scope="col">Event Title</th>
                                                    <th scope="col">When</th>
                                                    <th scope="col">Where</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.searchedEventFlag ? this.state.events.map(({ ID, title, catagory, date, where }, i) => { return this.state.searchedID == ID ? <SearchedEventComponent key={i} ID={ID} title={title} catagory={catagory} date={date} func={this.rowClick} where={where} /> : '' }) : ''}
                                            </tbody>
                                        </table>
                                        <div style={{ display: "inline-block" }}> <button type="button" style={{ border: "2px solid white" }} className="btn btn-primary">Prev</button>
                                            <button type="button" className="btn btn-primary" style={{ border: "2px solid white" }}>Next</button></div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </>;
            }
            else {
                return <>
                    <WishesComponent id={this.state.searchedID} events={this.state.events} wishes={this.state.wishes} wishIsAdded={this.state.wishIsAdded} addNewWish={this.addBestWish} lastIDofWish={this.state.wishes[this.state.wishes.length - 1].ID} updateWishIsAdded={this.updateWishIsAdded} />
                </>;
            }
        }
    }

}   

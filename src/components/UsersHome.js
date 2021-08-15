import React from 'react';
import FriendsBox from './FriendsBox';
import '../css/userhomepage.css';
import CurrentUser from "../currentUser";
import Rails from '../api/rails';
import Friend from './Friend';
import faker from "faker";
import ChatBox from "./ChatBox";

class UserHome extends React.Component {
    state = { friends: [], currentChat: <ChatBox></ChatBox> }
    componentDidMount() {
        this.getUsersData();

    }
    showChat(messages) {//show chat with that messages
        console.log(messages);
        let current = <ChatBox messages={messages} ></ChatBox>
        this.setState({ currentChat: current });
        // console.log(current);
    }

    getUsersData() {
        let userid = CurrentUser.getid();
        Rails.get(`/users/${userid}/friendships`)
            .then((res) => this.setState({ friends: res.data.map((friend) => <Friend showChat={(messages) => this.showChat(messages)} image={faker.image.avatar()} id={friend.id} key={friend.id} userName={friend.name} userEmail={friend.email}></Friend>) }))
            .catch((res) => console.log(res));
    }

    render() {
        return (

            <div className="user-home">
                <div>
                    <FriendsBox friends={this.state.friends}></FriendsBox>
                </div>
                <div>
                    {this.state.currentChat}
                </div>
            </div>
        );

    }


}

export default UserHome;
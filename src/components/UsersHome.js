import React from 'react';
import FriendsBox from './FriendsBox';
import '../css/userhomepage.css';
import CurrentUser from "../currentUser";
import Rails from '../api/rails';
import Friend from './Friend';
import faker from "faker";
import ChatBox from "./ChatBox";
import '../css/messageBox.css';

class UserHome extends React.Component {
    state = { friends: [], currentChat: <ChatBox></ChatBox>}
    componentDidMount() {
        this.getUsersData();

    }
    showChat(messages,friend_id) {//show chat with that messages
        console.log(messages);
        let current = <ChatBox messages={messages} friend_id={friend_id} ></ChatBox>
        this.setState({ currentChat: current});
        
    }

    getUsersData() {
        let userid = CurrentUser.getid();
        Rails.get(`/users/${userid}/friendships`)
            .then((res) => this.setState({ friends: res.data.map((friend) => <Friend showChat={(messages,friend_id) => this.showChat(messages,friend_id)} image={faker.image.avatar()} id={friend.id} key={friend.id} userName={friend.name} userEmail={friend.email}></Friend>) }))
            .catch((res) => console.log(res));
    }

    render() {
        return (

            <div className="user-home">
                <div>
                    <FriendsBox friends={this.state.friends}></FriendsBox>
                </div>
                <div className="message-box">
                    {this.state.currentChat}
                </div>
            </div>
        );

    }


}

export default UserHome;
import React from 'react';
import Chat from './Chat';
import jwtToken from "../jwtToken";
import cookie from "universal-cookie";
import Rails from '../api/rails';

class ChatCards extends React.Component {
    state = { friends: [] }
    componentDidMount() {
        this.getUsersData();

    }

    getUserId() {
        let ck = new cookie();
        let token = ck.get("token");
        let userid = jwtToken.decode(token);
        return userid;
    }
    getUsersData() {
        let userid = this.getUserId();
        Rails.get(`/users/${userid}/friendships`)
            .then((res) => this.setState({ friends: res.data.friends }))
            .catch((res) => console.log(res));
    }
    componentDidUpdate() {
        console.log(this.state.friends);
    }

    render() {
        let friends = this.state.friends.map((friend) => <Chat id={friend.id} key={friend.id} userName={friend.name} userEmail={friend.email}></Chat>);
        
        return (
            <div className="chat-container">
                {friends}
            </div>
        );
    }
}

export default ChatCards;
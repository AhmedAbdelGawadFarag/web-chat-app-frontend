import React from 'react';
import Friend from './Friend';
import jwtToken from "../jwtToken";
import cookie from "universal-cookie";
import Rails from '../api/rails';
import  "../css/friendcontainer.css";
class FriendsBox extends React.Component {
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
        let friends = this.state.friends.map((friend) => <Friend id={friend.id} key={friend.id} userName={friend.name} userEmail={friend.email}></Friend>);
        
        return (
            <div className="friends-container">
                {friends}
            </div>
        );
    }
}

export default FriendsBox;
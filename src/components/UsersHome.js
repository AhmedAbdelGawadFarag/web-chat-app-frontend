import React from 'react';
import FriendsBox from './FriendsBox';
import '../css/userhomepage.css';
import MessageBox from "./ChatBox";
class UserHome extends React.Component {


    render() {

        return (
            <div className="user-home">
                <FriendsBox></FriendsBox>
                <MessageBox></MessageBox>
            </div>
        );

    }


}

export default UserHome;
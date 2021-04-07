import React from 'react';
import ChatCards from './ChatCards';
import '../css/userhomepage.css';
import MessageBox from "./MessageBox";
class UserHome extends React.Component {


    render() {

        return (
            <div className="user-home">
                <ChatCards></ChatCards>
                <MessageBox></MessageBox>
            </div>
        );

    }


}

export default UserHome;
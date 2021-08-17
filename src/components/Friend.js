import React from 'react';
import "../css/friend.css";
import Rails from "../api/rails";
import CurrentUser from "../currentUser";
import Message from "./Message";

class Friend extends React.Component {

    renderMessages(res) {
        let messages = res.data.map((message) => <Message user_id={message.sender_id} key={message.id} data={message.body}></Message>);
        
        this.props.showChat(messages, this.props.id);
    }

    getMessages(event) {
        event.preventDefault();
        let userid = CurrentUser.getid();
        Rails.get(`/users/${userid}/friendships/${this.props.id}/messages`)
            .then((res) => this.renderMessages(res))
            .catch((res) => console.log(res));
    }

    render() {
        return (
            <button type="button" className="btn btn-outline-info" onClick={(event) => this.getMessages(event)}>
                <div id={this.props.id} className="friend">

                    <div>
                        <img className="friend-image" alt="img" src={this.props.image}></img>
                    </div>

                    <div className="friend-data">
                        <h5>  {this.props.userName}</h5>
                        <h5> {this.props.userEmail}</h5>
                    </div>

                </div>

            </button>

        );


    }

}

export default Friend;
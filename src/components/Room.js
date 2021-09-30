import React from 'react';
import "../css/friend.css";
import Rails from "../api/rails";
import CurrentUser from "../currentUser";
import Message from "./Message";

class Room extends React.Component {

    renderMessages(res) {
        let messages = res.data.map((message) => <Message sender_name={'~'+message.user_name} user_id={message.sender_id} key={message.id} data={message.body}></Message>);
        
        this.props.showChat(messages, this.props.id);
    }

    getMessages(event) {
        event.preventDefault();
        let userid = CurrentUser.getid();
        Rails.get(`/users/${userid}/rooms/${this.props.id}`)
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
                        <h5>  {this.props.room_name}</h5>
                    </div>

                </div>

            </button>

        );


    }

}

export default Room;
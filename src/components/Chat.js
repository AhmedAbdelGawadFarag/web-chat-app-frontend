import React from 'react';
import "../css/chat.css";
import faker from "faker";


class Chat extends React.Component {
    whenClicked(event) {
        event.preventDefault();
    }
    render() {
        return (
            <button type="button" class="btn btn-outline-info">
                <div id={this.props.id} className="user-chat">

                    <div>
                        <img className="chat-image" alt="img" src={faker.image.avatar()}></img>
                    </div>
                    <div className="user-data">
                        <h5>  {this.props.userName}</h5>
                        <h5> {this.props.userEmail}</h5>
                    </div>

                </div>

            </button>

        );


    }
}

export default Chat;
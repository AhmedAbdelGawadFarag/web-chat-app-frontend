import React from "react";
import "../css/message.css";
import Rails from "../api/rails";
import User from "../currentUser";

class ChatBox extends React.Component {
    state = { text: "" };

    send_message(res) {
        res.preventDefault();

        Rails.post(
            `/users/${User.getid()}/friendships/${this.props.friend_id}/messages`,
            {
                body: this.state.text,
                sender_id: User.getid(),
                receiver_id: this.props.friend_id,
            }
        )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

    }

    render() {
        return (
            <div>
                {this.props.messages}

                <form onSubmit={(data) => this.send_message(data)}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message"
                        value={this.state.text}
                        onChange={(data) => this.setState({ text: data.target.value })}
                    />
                </form>
            </div>
        );
    }
}
export default ChatBox;

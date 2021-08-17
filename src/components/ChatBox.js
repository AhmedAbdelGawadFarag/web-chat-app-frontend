import React from "react";
import "../css/message.css";
import Rails from "../api/rails";
import User from "../currentUser";
import { ActionCableConsumer } from "react-actioncable-provider";
import Message from "./Message";
class ChatBox extends React.Component {
    state = { text: "", typed_messages: [] };//typed_messages is diffrenet from props.messages

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
            //  .then((res) => console.log(res))
            .catch((err) => console.log(err));

    }

    append_message(message) {
        //console.log(message);

        let currmessage = [message].map((m) => <Message user_id={m.sender_id} key={m.id} data={m.body}></Message>);
        this.state.typed_messages.push(currmessage[0]);

        this.setState({ typed_messages: this.state.typed_messages });

    }

     render() {
        //  console.log("RENDERFUC");
        //   console.log(this.state.typed_messages);
        return (
            <div>

                {this.props.messages}

                <div>
                    {this.state.typed_messages}
                </div>

                <form onSubmit={(data) => this.send_message(data)}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message"
                        value={this.state.text}
                        onChange={(data) => this.setState({ text: data.target.value })}
                    />
                </form>

                <ActionCableConsumer channel={{ channel: "ChatChannel" }} onReceived={(message) => this.append_message(message)}>

                </ActionCableConsumer>


            </div>
        );
    }
}
export default ChatBox;

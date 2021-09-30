import React from "react";
import "../css/message.css";
import Rails from "../api/rails";
import User from "../currentUser";
import { ActionCableConsumer } from "react-actioncable-provider";
import Message from "./Message";
import "../css/chatArea.css";
class ChatBox extends React.Component {
    state = { text: "", typed_messages: [] };//typed_messages is diffrenet from props.messages

    send_message(res) {

        res.preventDefault();

        Rails.post(
            `/messages`,
            {
                body: this.state.text,
                sender_id: User.getid(),
                room_id: this.props.room_id,
            }
        )
            //  .then((res) => console.log(res))
            .catch((err) => console.log(err));

    }

    append_message(message) {
        console.log("received new message");
        this.setState({ typed_messages: [...this.state.typed_messages, <Message user_id={message.sender_id} key={message.id} data={message.body}></Message>] });
    }

    render() {
        return (
            <div className="chat-area" >

                <div className="message-box">

                    {this.props.messages}

                    {/* <div> */}
                    {this.state.typed_messages}
                    {/* </div> */}

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

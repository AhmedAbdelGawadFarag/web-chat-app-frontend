import React from "react";
import "../css/friend.css";
import Rails from "../api/rails";
import CurrentUser from "../currentUser";
import Message from "./Message";
import { ActionCableConsumer } from "react-actioncable-provider";

class Room extends React.Component {
  state = { messages: [] };

  renderMessages(res) {
    let messages = res.data.map((message) => (
      <Message
        sender_name={"~" + message.user_name}
        user_id={message.sender_id}
        key={message.id}
        data={message.body}
      ></Message>
    ));
    this.setState({ messages: messages });
    this.props.showChat(messages, this.props.id);
  }

     add_message(message) {
        console.log("received new message");
        this.setState({ messages: [...this.state.messages, <Message user_id={message.sender_id} key={message.id} data={message.body}></Message>] });

        if(this.props.NeedRender(this.props.id))
           this.props.showChat(this.state.messages, this.props.id);
        
     }
    
  subscribe_to_this_room() {
    //subscribe user to current web socket
    return (
      <ActionCableConsumer
        channel={{ channel: "ChatChannel", room: this.props.id }}
        onReceived={(m) => this.add_message(m) }
      ></ActionCableConsumer>
    );
  }

  getMessages(event) {
    event.preventDefault();

    this.subscribe_to_this_room();

    let userid = CurrentUser.getid();
    Rails.get(`/users/${userid}/rooms/${this.props.id}`)
      .then((res) => this.renderMessages(res))
      .catch((res) => console.log(res));
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={(event) => this.getMessages(event)}
      >
        <div id={this.props.id} className="friend">
          <div>
            <img
              className="friend-image"
              alt="img"
              src={this.props.image}
            ></img>
          </div>

          <div className="friend-data">
            <h5> {this.props.room_name}</h5>
          </div>
        </div>

        {this.subscribe_to_this_room()}
      </button>
    );
  }
}

export default Room;

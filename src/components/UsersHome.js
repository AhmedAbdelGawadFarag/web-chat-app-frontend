import React from "react";
import FriendsBox from "./FriendsBox";
import "../css/chatWindow.css";
import CurrentUser from "../currentUser";
import Rails from "../api/rails";
import Room from "./Room";
import faker from "faker";
import ChatBox from "./ChatBox";
import "../css/messageBox.css";
import { ActionCableProvider } from "react-actioncable-provider";

class UserHome extends React.Component {
  state = { rooms: [], currentChat: <ChatBox></ChatBox> };

  cnt = 0;

  NeedRender(room_id) {
    // console.log(room_id, this.state.currentChat.props.room_id);
    if (this.state.currentChat.props.room_id === room_id) return true;
    return false;
  }

  componentDidMount() {
    this.getFriendsData();
  }

  showChat(messages, room_id) {
    //show chat with that messages
    console.log("renderd");
    // this.cnt += 1;
    let current = (
      <ChatBox key={this.cnt} messages={messages} room_id={room_id}></ChatBox>
    );
    this.setState({ currentChat: current });
  }

  getRoomName(users) {
    let room_name = "";

    if (users.length === 2) {
      console.log(CurrentUser.getid());
      if (CurrentUser.getid() != users[0].id) room_name = users[0].name;
      else room_name = users[1].name;
    } else {
      users.map((user) => (room_name += user.name + ","));

      room_name = room_name.slice(0, -1);
    }

    return room_name;
  }

  getFriendsData() {
    let userid = CurrentUser.getid();

    Rails.get(`/users/${userid}/rooms`)
      .then((res) => {
        let rooms = res.data.map((room) => (
          <Room
            id={room.room_id}
            room_name={this.getRoomName(room.users)}
            image={faker.image.avatar()}
            key={room.room_id}
            showChat={(messages, room_id) => this.showChat(messages, room_id)}
            NeedRender={(room_id) => this.NeedRender(room_id)}
          ></Room>
        ));

        this.setState({ rooms: rooms });
      })

      .catch((res) => console.log(res));
  }

  render() {
    return (
      <div className="chat-window">
        <ActionCableProvider
          url={
            "ws:" +
            Rails.defaults.baseURL.substr(5, Rails.defaults.baseURL.length) +
            "/cable"
          }
        >
          <FriendsBox friends={this.state.rooms}></FriendsBox>

          {this.state.currentChat}
        </ActionCableProvider>
      </div>
    );
  }
}

export default UserHome;

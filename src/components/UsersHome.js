import React from "react";
import FriendsBox from "./FriendsBox";
import "../css/chatWindow.css";
import CurrentUser from "../currentUser";
import Rails from "../api/rails";
import Friend from "./Friend";
import faker from "faker";
import ChatBox from "./ChatBox";
import "../css/messageBox.css";
import { ActionCableProvider } from "react-actioncable-provider";

class UserHome extends React.Component {
  state = { friends: [], currentChat: <ChatBox></ChatBox> };

  cnt = 0;
  componentDidMount() {
    this.getUsersData();
  }

  showChat(messages, friend_id) {
    //show chat with that messages
    this.cnt += 1;
    let current = (
      <ChatBox
        key={this.cnt}
        messages={messages}
        friend_id={friend_id}
      ></ChatBox>
    );
    this.setState({ currentChat: current });
  }

  getUsersData() {
    let userid = CurrentUser.getid();

    Rails.get(`/users/${userid}/friendships`)
      .then((res) =>
        this.setState({
          friends: res.data.map((friend) => (
            <Friend
              showChat={(messages, friend_id) =>
                this.showChat(messages, friend_id)
              }
              image={faker.image.avatar()}
              id={friend.id}
              key={friend.id}
              userName={friend.name}
              userEmail={friend.email}
            ></Friend>
          )),
        })
      )
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
          <FriendsBox friends={this.state.friends}></FriendsBox>

          {this.state.currentChat}
        </ActionCableProvider>
      </div>
    );
  }
}

export default UserHome;

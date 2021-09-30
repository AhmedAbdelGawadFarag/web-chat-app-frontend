import React from "react";
import "../css/message.css";
import user from "../currentUser";

class Message extends React.Component {
  get_render_pos() {
    let st = {};

    if (user.getid() == this.props.user_id) {
      st.alignSelf = "flex-end";
      st.marginRight = "1%";
    } else {
      st.alignSelf = "flex-start";
      st.marginLeft = "1%";
    }

    return st;
  }

  render() {
    return (
      <div className="message" style={this.get_render_pos()}>
        <div style={{backgroundColor:"white"}} className="rounded py-2 px-3 mb-2" s>
          <p className="message-data user-name">{this.props.sender_name}</p>
          <p className="message-data">{this.props.data}</p>
        </div>
      </div>
    );
  }
}
export default Message;

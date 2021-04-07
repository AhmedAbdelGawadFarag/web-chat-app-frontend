import React from 'react';
// import Message from "./Message";
import "../css/message.css"
class ChatBox extends React.Component {
    state = { messages: [] }

    fillMessages() {

    }

    render() {
        return (
            <div>
              <div>
                  {this.props.messages}
              </div>

                {/* <input type="text" className="form-control" placeholder="Type a message" /> */}
            </div >
        );
    }

}
export default ChatBox;
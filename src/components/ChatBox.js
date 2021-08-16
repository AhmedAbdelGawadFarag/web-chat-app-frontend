import React from 'react';
// import Message from "./Message";
import "../css/message.css"
class ChatBox extends React.Component {
    state = { messages: [] }

    fillMessages() {

    }

    render() {
        return (
            <div >
    
              {this.props.messages}
              
                {/* <input type="text" className="form-control" placeholder="Type a message" /> */}
            </div >
        );
    }

}
export default ChatBox;
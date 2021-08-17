import React from 'react';
import "../css/message.css";
import user from "../currentUser";

class Message extends React.Component {

    get_render_pos() {

        if (user.getid() == this.props.user_id) return "flex-end";

        return "flex-start";

    }


    render() {

        return (
            <div className="message" style={{ justifyContent: this.get_render_pos() }}>
                <div className="bg-light rounded py-2 px-3 mb-2"  >
                    <p className="message-data">  {this.props.data}</p>
                </div>
            </div>
        );

    }


}
export default Message;
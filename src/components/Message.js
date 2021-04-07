import React from 'react';
import "../css/message.css"
class Message extends React.Component {

    render() {
        return (

            <div className="bg-light rounded py-2 px-3 mb-2 message-data">
                <img className="friend-image"  alt="img" src={"http://pm1.narvii.com/6290/9daddc43d903f1fc591697dd11edb894e85b35f7_00.jpg"}></img>
                <p>  {this.props.data}</p>
            </div>
        );
    }


}
export default Message;
import React from 'react';
import "../css/friendcontainer.css";
class FriendsBox extends React.Component {

    render() {

        return (
                <div className="friends-container">
                    {this.props.friends}
                </div>
        );
    }
}

export default FriendsBox;
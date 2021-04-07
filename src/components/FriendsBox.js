import React from 'react';
import "../css/friendcontainer.css";
class FriendsBox extends React.Component {

    render() {

        return (
            <div>
                <div className="friends-container">
                    {this.props.friends}
                </div>
            </div>
        );
    }
}

export default FriendsBox;
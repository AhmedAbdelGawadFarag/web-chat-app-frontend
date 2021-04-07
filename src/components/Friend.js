import React from 'react';
import "../css/friend.css";
import faker from "faker";


class Friend extends React.Component {
    whenClicked(event) {
        event.preventDefault();
    }
    render() {
        return (
            <button type="button" class="btn btn-outline-info">
                <div id={this.props.id} className="friend">

                    <div>
                        <img className="friend-image" alt="img" src={faker.image.avatar()}></img>
                    </div>
                    <div className="friend-data">
                        <h5>  {this.props.userName}</h5>
                        <h5> {this.props.userEmail}</h5>
                    </div>

                </div>

            </button>

        );


    }
}

export default Friend;
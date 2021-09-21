import React, { Component } from "react";


class Button extends Component {
    state = { liked: false };
    toggle = () => {
        let localLiked = this.state.liked;

    localLiked = !localLiked;
    this.setState({ liked: localLiked });
};
render() {
    return (
        <div className="container">
            <center>
                <div
                className="container"
                onClick={() => this.toggle()}
                >
                {this.state.liked === false ? (
                    <>
                    <i className='material-icons'>phone</i>
                    <p className='under_icon'>phone home</p>
                    </>
                ) : (
                    <i className='material-icons'>phone_in_talk</i>
                )}
                </div>
            </center>
            </div>
        );
    }
}

export default Button;
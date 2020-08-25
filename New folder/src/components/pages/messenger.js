import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Sidebar from "../partials/sidebar";
import ThreadView from '../partials/threadView';
import ChatInput from '../partials/chatInput';


class Messenger extends Component {
    render() {
        return (
            <div className="messenger-container">
                <Sidebar />
                <ThreadView />
                <ChatInput />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Messenger));
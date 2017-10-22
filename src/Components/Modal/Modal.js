import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {

    render() {
        return (
            <div className="modal">
                <div className="content">
                    <h2>{this.props.data.title}</h2>
                    <img src={this.props.data.src} alt={this.props.data.title}/>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Modal;
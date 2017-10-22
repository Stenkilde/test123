import React, { Component } from 'react';
import './Gallery.scss';
import Modal from '../Modal/Modal';

class GalleryItem extends Component {

    constructor() {
        super();

        this.state = {
            openModal: false
        }
    }

    handleClick() {
        this.setState(prevState => ({ ...prevState, openModal: !prevState.openModal }));
    };

    render() {
        return (
            <li className="galleryItem thumbnail" onClick={() => this.handleClick()}>
                <div className="meta">
                    <p>{this.props.data.title}</p>
                    <p className="description">{this.props.data.description}</p>
                </div>
                <img className="image" src={this.props.data.src} alt={this.props.data.title} />
                {this.state.openModal ? <Modal data={this.props.data} /> : null}
            </li>
        );
    }
}

export default GalleryItem;
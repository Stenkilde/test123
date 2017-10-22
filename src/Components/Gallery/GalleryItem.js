import React, { Component } from 'react';
import './Gallery.scss';

class GalleryItem extends Component {

    createModal() {
        const markup = `
                <div class="content">
                    <h2>
                        ${this.props.data.title}
                    </h2>
                    <img src="${this.props.data.src}" alt="${this.props.data.title}">
                    <p>${this.props.data.description}</p>
                </div>
            `;

        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = markup;

        document.body.appendChild(modal);
    }

    removeModal() {
        const modalCheck = document.querySelector('.modal');
        document.body.removeChild(modalCheck);
    }

    handleClick() {
        const modalCheck = document.querySelector('.modal');

        if (modalCheck) {
            document.body.removeChild(modalCheck);

            this.createModal();
        } else {
            this.createModal();
        }
    }

    render() {
        return (
            <li className="galleryItem thumbnail" onClick={(e) => this.handleClick(e)}>
                <div className="meta">
                    <p>{this.props.data.title}</p>
                    <p className="description">{this.props.data.description}</p>
                </div>
                <img className="image" src={this.props.data.src} alt={this.props.data.title} />
            </li>
        );
    }
}

export default GalleryItem;
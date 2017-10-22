import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

import './Gallery.scss';

class Gallery extends Component {

    render() {
        return (
            <div className="gallery">
                {this.props.photos.map((photo, index) => (
                    <GalleryItem key={index} data={photo} />
                ))}
            </div>
        );
    }
}

export default Gallery;

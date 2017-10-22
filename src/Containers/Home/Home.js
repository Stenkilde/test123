import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Gallery from '../../Components/Gallery/Gallery';

// Fake API
import { collection } from '../../Services/PhotoService';

class Home extends Component {

    constructor() {
        super();

         this.state = {
             photos: []
         }
    }

    componentDidMount() {
        collection().then((response) => {
            this.setState({
                photos: response.collection
            })
        })
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <section>
                    {(() => {
                        // @NOTE We don't want to mount if there is no jobs in the feed
                        if (this.state.photos.length !== 0) {
                            return (
                                <Gallery photos={this.state.photos} />
                            )
                        } else {
                            return (
                                <h2>There is no photos available at the moment</h2>
                            );
                        }
                    })()}
                </section>
            </div>
        );
    }
}

export default Home;

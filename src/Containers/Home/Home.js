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
                    <div>
                        {this.state.photos.length !== 0 ? <Gallery photos={this.state.photos} />
                        : <h2>There is no photos available at the moment</h2>}
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;

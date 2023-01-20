import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import { BsFacebook, BsTwitter, BsInstagram, BsReddit, BsYoutube } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubtitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <div className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubtitle}</h4>
                                <p>{headerText}</p>
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <BsFacebook />
                                        </div>
                                        <div className="col-2">
                                            <BsTwitter />
                                        </div>
                                        <div className="col-2">
                                            <BsInstagram />
                                        </div>
                                        <div className="col-2">
                                            <BsReddit />
                                        </div>
                                        <div className="col-2">
                                            <BsYoutube />
                                        </div>
                                        <div className="col-2">
                                            <FaGooglePlusG />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Maps</a>
                                    </li>
                                </ul>
                                {/* Tab Pane */}
                                <div className="tab-content mb-5">
                                    {/* About Place Tab */}
                                    <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                                        <h2 className='mb-3'>{title}</h2>
                                        <p>{description}</p>
                                        <img src={img} alt={title} className="img-thumbnail img-fluid" />
                                    </div>
                                    {/* reviews */}
                                    <div className="tab-pane in active" id="reviews" role="tabpanel">Reviews Content</div>
                                    {/* maps */}
                                    <div className="tab-pane in active pt-5" id="map" role="tabpanel"><iframe src={maps} style={{ border: '0', height: '28.125rem', width: '100%', frameBorder: '0' }}></iframe>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        );
    }
}

export default Details;
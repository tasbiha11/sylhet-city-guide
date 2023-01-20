import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import { BsFacebook, BsTwitter, BsInstagram, BsReddit, BsYoutube } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';
import styled from 'styled-components';
import Reviews from '../Reviews';

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
                            <HeaderDetails className="container-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubtitle}</h4>
                                <p>{headerText}</p>
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <span><BsFacebook title={'Facebook'} /></span>
                                        </div>
                                        <div className="col-2">
                                            <span>   <BsTwitter title={'Twitter'} /></span>
                                        </div>
                                        <div className="col-2">
                                            <span>   <BsInstagram title={'Instagram'} /></span>
                                        </div>
                                        <div className="col-2">
                                            <span >  <BsReddit title={'Reddit'} /></span>
                                        </div>
                                        <div className="col-2">
                                            <span> <BsYoutube title={'Youtube'} /></span>
                                        </div>
                                        <div className="col-2">
                                            <span> <FaGooglePlusG title={'Google Plus'} /></span>
                                        </div>
                                    </div>
                                </div>
                            </HeaderDetails>
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
                                    <div className="tab-pane active" id="reviews" role="tabpanel"><Reviews /></div>
                                    {/* maps */}
                                    <div className="tab-pane pt-5 active" id="map" role="tabpanel"><iframe src={maps} style={{ border: '0', height: '28.125rem', width: '100%', frameBorder: '0' }}></iframe>
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

const HeaderDetails = styled.header`
background:linear-gradient(rgba(109,109,109),rgba(255,255,255));
height:100vh;
text-transform:uppercase;
color:var(--mainWhite);
text-align:center;


h1{
    padding-top:10%;
    color:var(--mainDark);
}
h4{
     color:var(--mainDark);
}

p{
    padding-left:10%;
    padding-right:10%;
    margin-bottom:10%;
    color:var(--mainDark);
}

span{
    font-size:1.875rem;
    color:var(--mainDark);
}

span:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

.nav-item{
    height:18.75rem;
}

@media(max-width:760px){
    h1,h4{
        color:var(--mainWhite);
    }
}
`;
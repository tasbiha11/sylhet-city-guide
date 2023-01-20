import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';
import styled from 'styled-components';

class PageNotFound extends Component {
    render() {
        return (
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>404 Error !</h1>
                            <h4>Page Not Found</h4>
                            <div className="error-details">
                                Sorry. The requested page cannot be found.
                            </div>
                            <div className="error-actions">
                                <Link to="/" className="btn btn-outline-primary btn-lg">
                                    <AiFillHome /> Home
                                </Link>
                                <Link className="btn btn-outline-primary btn-lg">
                                    <BsFillEnvelopeOpenFill /> Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }
}

export default PageNotFound;

const ComponentNotFound = styled.div`
    .error-template{
        padding: 40px 15px;
        text-align:center;
    }
    .error-actions{
        margin-top:15px;
        margin-bottom:15px;
    }
    .btn{
        margin-right:10px;
    }
`;
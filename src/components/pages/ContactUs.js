import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className="my-5 py-5">
                    <div className="container">
                        <div className="well well-sm">
                            <h3><strong>Our Location</strong></h3>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238.14053612069!2d91.86468382110854!3d24.89558466805436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552af8919883%3A0x6fc2fe33c01b3797!2sZindabazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1674227002431!5m2!1sen!2sbd" style={{ border: '0', width: '100%', height: '315px', frameBorder: '0' }} allowFullScreen></iframe>
                            </div>
                            <div className="col-md-5">
                                <h4><strong>Contact Us</strong></h4>
                                <form>
                                    <div className="from-group py-1">
                                        <input type="text" className="form-control" placeholder='Name' />
                                    </div>
                                    <div className="from-group py-1">
                                        <input type="email" className="form-control" placeholder='Email' />
                                    </div>
                                    <div className="from-group py-1">
                                        <input type="tel" className="form-control" placeholder='Mobile' />
                                    </div>
                                    <textarea className='form-control py-1' cols="30" rows="3" placeholder='Message'></textarea>
                                    <Link className="btn btn-outline-primary text-uppercase mt-2">
                                        <RiSendPlaneFill /> Send
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactUs;
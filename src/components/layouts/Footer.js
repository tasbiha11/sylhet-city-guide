import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer className='main-footer'>
            <div className='footer-middle'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                            <h4>About</h4>
                            <ul className='list-unstyled'>
                                <li> Sylhet </li>
                                <li> Tourism </li>
                                <li> Bangladesh </li>

                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <h4>Founders</h4>
                            <ul className='list-unstyled'>
                                <li><a href=""> Contact </a></li>
                                <li><a href=""> Message </a></li>
                                <li><a href=""> List </a></li>

                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <h4>Motivation</h4>
                            <ul className='list-unstyled'>
                                <li><a href=""> Background </a></li>
                                <li><a href=""> Story </a></li>
                                <li><a href=""> Established </a></li>

                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <h4>Developers</h4>
                            <ul className='list-unstyled'>
                                <li><a href=""> Tasbiha </a></li>
                                <li><a href=""> Tabassum </a></li>
                                <li><a href=""> Hussain </a></li>

                            </ul>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p className='text-sm-center'>
                            © Tasbiha 2023
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom:2rem;
}

ul li a{
    color: var(--mainGrey);
}

ul li a:hover{
    color:var(--mainLightGrey);
}

`;
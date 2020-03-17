import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import goldengate from 'assets/images/goldengate.png'



class ContactPage extends React.Component {
    render = () =>
        <div>
            <NavBar mode="dark" />

            <div className="contact-page">
                <svg className="trapezoidal-horizintal" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#040B13" points="0,0 100,0 60,100 0,100"/>
                </svg>

                <div className="golden-gate" style={{ backgroundImage: `url(${goldengate})` }} />

                <div className="get-in-touch">
                    <h2>Get in touch with us.</h2>
                </div>

                <form className="contact-form" noValidate autoComplete="off">
                    <TextField required id="standard-required" label="Name" />
                    <TextField required id="standard-required" label="Email" />
                    <TextField required id="standard-required" label="Message" />
                    <Button className="send-button" color="primary">Send Message</Button>
                </form>

                <div className="contact-info">
                    <h2>Contact</h2>

                    <div className="contact-data">
                        <div>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Fax</p>
                          	<p>Hours</p>
                        </div>

                        <div>
                            <p>ken@dretzka.com</p>
                            <p>800 258 0227</p>
                            <p>800 944 0174</p>
                            <p>Monday-Friday</p>
                            <p>8:30 am - 4:30 pm</p>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
}


export default ContactPage

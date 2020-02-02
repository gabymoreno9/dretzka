import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'


class ContactPage extends React.Component {
    render = () =>
        <div>
            <NavBar mode="dark" />

                <svg class="trapezoidal-horizintal" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#040B13" points="0,0 100,0 40,100 0,100"/>
                </svg>

            <Footer />
        </div>
}


export default ContactPage

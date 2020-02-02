import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'


class AboutPage extends React.Component {
    render = () =>
        <div>
            <NavBar />

                <svg class="trapezoidal-horizintal" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#2f375d" points="0,100 100,0 100,100"/>
                </svg>


            <Footer />
        </div>
}


export default AboutPage

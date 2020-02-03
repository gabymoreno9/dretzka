import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'

import landingPageHero from 'assets/images/landingPageHero.png'
import landingPageDining from 'assets/images/landingPageDining.png'
import landingPageBed from 'assets/images/landingPageBed.png'
import landingPageKitchen from 'assets/images/LandingPageKitchen.png'
import landingPageTable from 'assets/images/landingPageTable.png'




class LandingPage extends React.Component {
    render = () =>
        <div className="landing-page">
            <NavBar mode="dark" />
            <div className="hero" style={{ backgroundImage: `url(${landingPageHero})` }}>
            </div>
            <div className="line-card-description">
                We provide something<br/>
                lorem ipsum dolorem<br/>
                porro quisquam est qui<br/>
                dolorem ipsum<br/>
            </div>

        <div className="container">
            <div className="row">
                <div className="column-image" style={{ backgroundImage: `url(${landingPageDining})` }} />
                <div className="column-text" >
                    <h1>Modern <br/> Solutions</h1>
                    <p>Neque porro quisquam est qui <br/>
                    dolorem ipsum quia dolor<br/>
                     sit amet, consectetur adi<br/></p>
                </div>
            </div>

            <div className="row">
                <div className="column-text" >
                    <h1>Our <br/> Purpose</h1>
                    <p>Neque porro quisquam est qui <br/>
                    dolorem ipsum quia dolor<br/>
                     sit amet, consectetur adi<br/></p>
                </div>
                <div className="column-image" style={{ backgroundImage: `url(${landingPageBed})` }} />
            </div>

            <div className="row">
                <div className="column-image" style={{ backgroundImage: `url(${landingPageTable})` }} />
                <div className="column-text" >
                    <h1>Who We Are</h1>
                    <p>Neque porro quisquam est qui <br/>
                    dolorem ipsum quia dolor<br/>
                     sit amet, consectetur adi<br/></p>
                </div>
            </div>

            <div className="row">
                <div className="column-text" >
                    <h1>Let's <br/> Talk</h1>
                    <p>Neque porro quisquam est qui <br/>
                    dolorem ipsum quia dolor<br/>
                     sit amet, consectetur adi<br/></p>
                </div>
                <div className="column-image" style={{ backgroundImage: `url(${landingPageKitchen})` }} />
            </div>
        </div>



            <Footer />
        </div>
}


export default LandingPage

import React from 'react'
import PageWithNavBar from 'ui/PageWithNavBar'

import landingPageHero from 'assets/images/landingPageHero.png'
import landingPageDining from 'assets/images/landingPageDining.png'
import landingPageBed from 'assets/images/landingPageBed.png'
import landingPageKitchen from 'assets/images/LandingPageKitchen.png'
import landingPageTable from 'assets/images/landingPageTable.png'


class LandingPage extends React.Component {
    render = () =>
        <PageWithNavBar mode="dark" className="landing-page">
            <div className="hero" style={{ backgroundImage: `url(${landingPageHero})` }} />
            <div className="line-card-description">
            Dretzka and Associates strive to provide the highest in quality and
            stylish lighting and ceiling fan products for every application whether 
            it be in commercial or residential environments
            </div>

            <div className="container">
                <div className="row">
                    <div className="column-image" style={{ backgroundImage: `url(${landingPageDining})` }} />
                    <div className="column-text" >
                        <h1>Modern <br/> Solutions</h1>

                        <p>We have a multitude of solutions for
                        all design needs from traditional to
                        contemporary and everything in between.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column-text" >
                        <h1>Our <br/> Purpose</h1>
                        <p>
                            Your needs become our needs.
                            Let us help you succeed with any
                            and all that we have to offer.
                        </p>
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
                        <p>Dretzka and Associates are
                            here to help in any way we can.
                            Feel free to reach out to us at any time:<br/>
                            ken@dretzka.com<br/>
                            kenny@dretzka.com<br/>
                            Julia@dretzka.com<br/>
                            jack@dretzka.com (heating products only)<br/>
                            </p>
                    </div>
                    <div className="column-image" style={{ backgroundImage: `url(${landingPageKitchen})` }} />
                </div>
            </div>
        </PageWithNavBar>
}


export default LandingPage

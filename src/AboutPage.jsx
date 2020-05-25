import React from 'react'
import PageWithNavBar from 'ui/PageWithNavBar'
import Ken from 'assets/images/ken.png';
import Jack from 'assets/images/jack.png';
import Kenny from 'assets/images/kenny.png';
import Julie from 'assets/images/julie.png';


class AboutPage extends React.Component {
    render = () =>
        <PageWithNavBar mode="dark" className="about-us-page">
            <div className="about-us-content">
                <div className="about-us-text">
                    <div className="about-us-title">
                        The team behind Dretzka & Associates
                    </div>
                    <br/>

                    <div className="our-history">
                        Our History
                        <p>Founded in 1985, Dretzka and <br/>
                        Associates have grown into a <br/>
                        powerfully dynamic and reputable <br/>
                        organization serving Northern <br/>
                        California, Western Nevada and <br/>
                        Hawaii.</p>
                    </div>
                    <br/>
                    
                    <div className="our-mission">
                        Our Mission
                        <p>Our goals have remained the same as <br/>
                        they were int he beginning:<br/>
                        <br/>
                        Represent the very best of companies
                        <br/>
                        <br/>
                        Serve them better than they expect
                        <br/>
                        <br/>
                        Provide the very best of service and <br/>
                        training to our costumers
                        </p>
                    </div>
                </div>

                <div className="profile-pics">
                    <div className="profile-pic">
                        <img src={Ken} alt={"the big boss ken dretzka"}/>
                        Ken Dretzka
                    </div>
                    <div className="profile-pic">
                        <img src={Kenny} alt={"kenny dretzka"}/>
                        Kenny Dretzka
                    </div>
                    <div className="profile-pic">
                        <img src={Julie} alt={"Julia Soto"}/>
                        Julia Soto
                    </div>
                    <div className="profile-pic">
                        <img src={Jack} alt={"Jack Wiley"}/>
                        Jack Wiley
                    </div>
                </div>
            </div>

        </PageWithNavBar>
}


export default AboutPage

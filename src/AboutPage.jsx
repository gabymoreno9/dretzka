import React from 'react'
import PageWithNavBar from 'ui/PageWithNavBar'


class AboutPage extends React.Component {
    render = () =>
        <PageWithNavBar mode="dark" className="about-us-page">
            <div className="about-us-title">
                The team behind Dretzka & <br/>Associates
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

        </PageWithNavBar>
}


export default AboutPage

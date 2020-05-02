import React from 'react'
import PageWithNavBar from 'ui/PageWithNavBar'


class AboutPage extends React.Component {
    render = () =>
        <PageWithNavBar mode="dark" className="about-us-page">
            <div className="about-us-title">
                The team behind Dretzka & Associates
            </div>
        </PageWithNavBar>
}


export default AboutPage

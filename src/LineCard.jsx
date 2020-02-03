import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'

import halfMoon from 'assets/images/half-moon.jpg'
import alloy from 'assets/images/alloy.png'
import elco  from 'assets/images/elco.png'
import et2   from 'assets/images/et2.png'
import bulbrite from 'assets/images/bulbrite.png'
import emerson from 'assets/images/emerson.png'
import fanimation from 'assets/images/fanimation.png'
import legrand from 'assets/images/legrand.png'
import maxim from 'assets/images/maxim.png'
import schonbek from 'assets/images/schonbek.png'
import studiom from 'assets/images/studiom.png'
import swarovski from 'assets/images/swarovski.png'

let lineCards = [
    { image: alloy, href: "https://www.alloyled.com/" },
    { image: elco, href: "https://elcolighting.com/" },
    { image: et2, href: "https://www.et2online.com/", className: "too-lorge" },
    { image: bulbrite, href: "https://bulbrite.com/" },
    { image: emerson, href: "https://www.emerson.com/en-us", className: "emerson" },
    { image: fanimation, href: "https://www.fanimation.com/" },
    { image: legrand, href: "https://www.legrand.us/" },
    { image: maxim, href: "https://www.maximlighting.com/" },
    { image: schonbek, href: "https://www.swarovski-lighting.com/schonbek1870" },
    { image: studiom, href: "https://www.studiomlighting.com/" },
    { image: swarovski, href: "https://www.swarovski-lighting.com/" }
]



class LineCard extends React.Component {
    render = () =>
        <div>
            <NavBar mode = "dark" />

            <div className="line-card-hero"
                 style={{ backgroundImage: `url(${halfMoon})` }} />

            <div className="line-card-description">
                We are proud to represent the following manufacturers of lighting,
                ceiling fans, and related accessories.
            </div>

            <div className="line-card-logos">
                {lineCards.map((card, i) =>
                    <a key={i} href={card.href}>
                        <div className={`line-card-logo ${card.className}`}>
                            <img src={card.image} />
                        </div>
                    </a>)}
            </div>

            <Footer />
        </div>
}


export default LineCard

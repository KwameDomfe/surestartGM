import { Link } from "react-router-dom"
import image from '../../../images/placeholders/regular_images/regular_03.jpg'

function Learning() {
    return (
        <div className = ""
        >
            <div className="flex ggap0-50 vh-60 container f1-50">
                <figure className="grid gtc1 items-center justify-center">
                    <img src={image} alt="" className="gc1s1 gr1s1 h-100 black-50"/>
                    <figcaption className="gc1s1 gr1s1 tc"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                        </p>
                        <h2 className="mb2-00">Preschool</h2>
                        <Link to="learning/preschool"
                            className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00"
                        >
                            Learn More
                        </Link>
                    </figcaption>
                </figure>
                <figure className="grid gtc1 items-center justify-center">
                    <img src={image} alt="" className="gc1s1 gr1s1 h-100"/>
                    <figcaption className="gc1s1 gr1s1 tc"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                        </p>
                        <h2 className="mb2-00">Lower Primary</h2>
                        <Link to="learning/lower-primary"
                            className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00"
                        >
                            Learn More
                        </Link>
                    </figcaption>
                </figure>
                <figure className="grid gtc1 items-center justify-center">
                    <img src={image} alt="" className="gc1s1 gr1s1 h-100"/>
                    <figcaption className="gc1s1 gr1s1 tc"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                        </p>
                        <h2 className="mb2-00">Upper Primary</h2>
                        <Link to="learning/upper-primary"
                            className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00"
                        >
                            Learn More
                        </Link>
                    </figcaption>
                </figure>
                <figure className="grid gtc1 items-center justify-center">
                    <img src={image} alt="" className="gc1s1 gr1s1 h-100"/>
                    <figcaption className="gc1s1 gr1s1 tc"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                        </p>
                        <h2 className="mb2-00">Junior High</h2>
                        <Link to="learning/junior-high"
                            className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00"
                        >
                            Learn More
                        </Link>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Learning

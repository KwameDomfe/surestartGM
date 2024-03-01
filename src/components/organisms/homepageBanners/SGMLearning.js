import { Link } from "react-router-dom"
import image from '../../../images/placeholders/regular_images/regular_01.png'

function SGMLearning() {
    const SGMLearning = [
        {
            id : 1,
            image: '',
            desc: 'Lorem bla bla and so on',
            link: ''
        },
        {
            id : 2,
            image: '',
            desc: 'Lorem bla bla and so on',
            link: ''
        },
        {
            id : 3,
            image: '',
            desc: 'Lorem bla bla and so on',
            link: ''
        },
        {
            id : 4,
            image: '',
            desc: 'Lorem bla bla and so on',
            link: ''
        }
    ]
    return (
        <div className ="bg-black-20 w-100"
        >
            <header className="container container50">
                <hgroup className="tc mv4-00">
                    <h2 className="f3-00 ttu">SureStart Green Montessori Learning</h2>
                    <p className="f1-50 lh-copy">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sunt in modi pariatur reprehenderit a blanditiis eaque dignissimos ad, odio, vero, earum quisquam! Qui facilis praesentium ipsum natus repudiandae sequi?
                    </p>
                </hgroup>
            </header>

            <div className="bg-secondary pv4-00">
                <div className ="flex ggap0-50 
                    vh-60 container container90 
                    f1-25 "
                >
                    <figure 
                        className="grid gtc1 items-center justify-center"
                    >
                        <img src={image} 
                            alt="" 
                            className="gc1s1 gr1s1 
                                h-100  
                                cover"
                        />
                        <figcaption className="gc1s1 gr1s1 
                            flex flex-column items-center justify-center
                            h-100 
                            pa1-00 
                            bg-black-40 
                            white-90 tc"
                        >
                            <p className="mb1-00">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                            </p>
                            <h2 className="mb2-00">Preschool</h2>
                            <Link to="learning/preschool"
                                className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center"
                    >
                        <img src={image} alt="" className="gc1s1 gr1s1 h-100 cover"/>
                        <figcaption className="gc1s1 gr1s1 flex flex-column items-center justify-center
                            h-100 pa1-00 
                            bg-black-30 
                            white-90 tc"
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                            </p>
                            <h2 className="mb2-00">Lower Primary</h2>
                            <Link to="learning/lower-primary"
                                className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center">
                        <img src={image} alt="" className="gc1s1 gr1s1 h-100 cover"/>
                        <figcaption className="gc1s1 gr1s1 flex flex-column items-center justify-center
                            h-100 pa1-00 
                            bg-black-20 
                            white-90 tc"
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                            </p>
                            <h2 className="mb2-00">Upper Primary</h2>
                            <Link to="learning/upper-primary"
                                className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center">
                        <img src={image} alt="" className="gc1s1 gr1s1 h-100 cover"/>
                        <figcaption className="gc1s1 gr1s1
                            flex flex-column items-center justify-center
                            h-100 pa1-00
                            bg-black-10 
                            white-90 tc"
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab.
                            </p>
                            <h2 className="mb2-00">Junior High</h2>
                            <Link to="learning/junior-high"
                                className="white-90 bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>
                </div>

            </div>
            <footer className="tc pv4-00"> 
                <h3>
                    Enrol your child / ward today. <br /> <br /> 
                </h3>
                <span>
                    For further inquiries, talk to our Admissions Officer on (+233 54 567 3423)
                </span>
            </footer>
        </div>
    )
}

export default SGMLearning

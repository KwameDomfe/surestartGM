import { Link } from "react-router-dom";
import image_01 from '../../../images/placeholders/portrait/portrait_01.jpg';
// import image_02 from '../../../images/placeholders/portrait/portrait_02.png';
// import image_03 from '../../../images/placeholders/portrait/portrait_01.jpg';
// import image_04 from '../../../images/placeholders/portrait/portrait_01.jpg';
import {SGMLearnin} from '../../../data';
function SGMLearning() {
    
    return (
        <div className ="bg-primary-01 white-90 w-100"
        >
            <header className="container container50">
                <hgroup className="tc mv4-00">
                    <h2 className="f3-00 ttu">SureStart Green Montessori Learning</h2>
                    <p className="f1-50 lh-copy">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sunt in modi pariatur reprehenderit a blanditiis eaque dignissimos ad, odio, vero, earum quisquam! Qui facilis praesentium ipsum natus repudiandae sequi?
                    </p>
                </hgroup>
            </header>

            <div className="bg-secondary pv4-00"
            >
                <div className ="flex ggap0-50 
                     container container90 
                    f1-25"
                >
                    <figure 
                        className="grid gtc1 items-center justify-center"
                    >
                        <img src={image_01} 
                            alt="" 
                            className="gc1s1 gr1s1 
                                h-100
                                cover"
                            />
                        <figcaption className="gc1s1 gr1s1 
                            flex flex-column items-center justify-between
                            h-100 
                            pa1-00 
                            bg-black-30 
                            white-90 tc"
                        >
                            <h2 className="mb2-00">{SGMLearnin[0].name}</h2>
                            <p>
                                {SGMLearnin[0].desc}
                            </p>
                            
                            <Link to={SGMLearnin[0].link}
                                className="gold  bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center"
                    >
                        <img src={image_01} 
                            alt="" 
                            className="gc1s1 gr1s1 
                                h-100
                                cover"
                            />
                        <figcaption className="gc1s1 gr1s1 
                            flex flex-column items-center justify-between
                            h-100 
                            pa1-00 
                            bg-black-30 
                            white-90 tc"
                        >
                            <h2 className="mb2-00">{SGMLearnin[1].name}</h2>
                            <p>
                                {SGMLearnin[1].desc}
                            </p>
                            
                            <Link to={SGMLearnin[1].link}
                                className="gold  bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center">
                        <img src={image_01} alt="" className="gc1s1 gr1s1 h-100 cover"/>
                        <figcaption className="gc1s1 gr1s1 
                            flex flex-column items-center justify-between
                            pa1-00 h-100
                            bg-black-20 
                            white-90 tc"
                        >
                             <h2 className="mb2-00">{SGMLearnin[2].name}</h2>
                             <p>
                                {SGMLearnin[2].desc}
                            </p>
                           
                            <Link to={SGMLearnin[2].link}
                                className="gold  bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>

                    <figure className="grid gtc1 items-center justify-center"
                    >
                        <img src={image_01} 
                            alt="" 
                            className="gc1s1 gr1s1 h-100 cover"
                        />
                        <figcaption className="gc1s1 gr1s1
                            flex flex-column items-center justify-between 
                            h-100
                            pa1-00
                            bg-black-10 
                            white-90 tc"
                        >
                            <h2 className="mb2-00">{SGMLearnin[3].name}</h2>
                            <p>
                                {SGMLearnin[3].desc}
                            </p>
                           
                            <Link to={SGMLearnin[3].link}
                                className="gold bg-secondary pv0-50 ph1-00 br0-25 f1-00 ba"
                            >
                                Learn More
                            </Link>
                        </figcaption>
                    </figure>
                </div>

            </div>
            <footer className="tc pv4-00"> 
                <h3 className="f2-00">
                    Enrol your child / ward today. <br /> <br /> 
                </h3>
                <span>
                    For further inquiries, <Link to="surestart/contacts-and-directions"
                className="gold bg-secondary pv0-50 ph1-00 br0-25"
            >
                Talk To
            </Link> our Admissions Officer.
                </span>
            </footer>
        </div>
    )
}

export default SGMLearning

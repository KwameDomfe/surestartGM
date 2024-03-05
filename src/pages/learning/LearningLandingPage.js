// import Preschool from '../../components/organisms/learningBanners/Preschool'
// import LowerPrimary from '../../components/organisms/learningBanners/LowerPrimary'
// import UpperPrimary from '../../components/organisms/learningBanners/UpperPrimary'
// import JuniorHigh from '../../components/organisms/learningBanners/JuniorHigh'
// import BgImage01 from '../../images/placeholders/regular_images/regular_03.jpg'
// import BgImage02 from '../../images/_partials/backgrounds/wallpeel.jpg'
import BgImage03 from '../../images/_partials/backgrounds/regular-03.jpg'
import BgImage04 from '../../images/index/20210528_000212.jpg'
import SectionBanner from '../../components/molecules/SectionBanner'
import { Link } from 'react-router-dom'

function LearningLandingPage() {
    
    return (
        <div className="grid gtc12 ggap2-00 
            flex item-center justify-center 
            ml1-00 pv1-00 
            white-90 
            bg-blue"
        >
            <header id="LearningOverview"
                className="gc1s12 gr1s1 
                    black-50 bg-black-40 tc"
            >
                <hgroup className='w-100 pa1-00'>
                    <h1 className="mv1-50
                        f3-00 ttu"
                    >
                        Learning
                    </h1>
                    <p className="f1-75 lh-copy tj">At (<abbr title="Surestart Green Montessori">SGM</abbr>) we dolor sit amet consectetur adipisicing elit. Tempora rem nihil <span className="b gold">PreScool</span> vero dolore cum maxime id optio excepturi minima?  Officiis sequi vitae, nihil laborum voluptatum saepe, quia ducimus consequatur <span className="b gold">Lower Primary</span> laboriosam iure ipsam maxime tempora numquam optio amet, atque qui <span className="b gold">Upper Primary</span>. Voluptates quis molestiae <span className="b gold">Junior High School</span> pariatur similique saepe rem voluptate at laborum neque?</p>
                </hgroup>
            </header>

            <section id="LearningPreSchool"
                className="gc1s12 gr3s1 
                    grid gtc12 ggap0-50
                    "
            >
                <div id="" 
                    className="gc1s8 gr1s3 
                        pa1-00
                        bg-secondary
                        "
                >
                    <div className='f1-25'
                    >
                        <h1 className='mv0-00'>
                            Preschool
                        </h1>

                        <p className="lh-copy">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident at ipsum beatae adipisci enim reprehenderit voluptate incidunt laboriosam quas, eos ex maiores, cumque nemo repudiandae.
                        </p>
                    
                        <ol className="ml2-00 mv2-00">
                            <li>Creche</li>
                            <li>KG-1</li>
                            <li>KG-2</li>
                        </ol>
                    
                        <blockquote className="mv2-00 pa1-00
                            bg-white-20 
                            br0-25
                            tc i 
                            "
                        >
                            <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident at ipsum beatae adipisci enim reprehenderit quibusdam omnis culpa eum ipsum ".
                            </p> 
                            <span className="f1-00">-- Sorates --</span>
                        </blockquote>

                        <p className="lh-copy">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident at ipsum beatae adipisci enim reprehenderit perferendis eaque laudantium sed, error 
                        </p>

                        <table className='w-100 mb4-00'>
                            <thead>
                                <tr className='flex justify-between mb1-00'>
                                    <td>Class</td>
                                    <td>Number of Students</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='flex justify-between mb1-00'>
                                    <td>Creche</td>
                                    <td className='mr6-00'>120</td>
                                </tr>
                                <tr className='flex justify-between mb1-00'>
                                    <td>KG-1</td>
                                    <td className='mr6-00'>126</td>
                                </tr>
                                <tr className='flex justify-between mb1-00'>
                                    <td>KG-2</td>
                                    <td className='mr6-00'>94</td>
                                </tr>
                            </tbody>
                            <tfoot className="tc">
                                <tr>
                                    <td> 
                                    table footer
                                    </td>
                                </tr> 
                            </tfoot>
                            
                        </table>
                    
                        <div className="pt2-00 ">
                            <Link to= "preschool"
                                className="pv0-50 mr2-00 ph1-00 bg-white-90 ba br0-25"
                            >
                                Explore More
                            </Link>
                            <Link to= "preschool"
                                className="pv0-50 ph1-00 white-90 ba br0-25"
                            >
                                Watch video
                            </Link>
                        </div>

                    </div>
                </div>
                
                <div id="" 
                    className="gc9s4 gr1s1 
                    grid gtc1 items-center justify-center
                        bg-secondary 
                        ba"
                >
                    <img src = {BgImage03}
                        alt=""
                        className="gc1s1 gr1s1 w-100 h-100 cover" 
                    />
                    <SectionBanner 
                        sectionName='Creche'
                        sectionURL=''
                    />
                </div>

                <div id="" 
                    className="gc9s4 gr2s1 
                        grid gtc1 items-center justify-center
                        bg-secondary 
                        ba"
                >
                    <img src = {BgImage03}
                        alt=""
                        className="gc1s1 gr1s1 w-100 h-100 cover" 
                    />
                    <SectionBanner 
                        sectionName='KG-1'
                        sectionURL=''  
                    />
                    
                </div>

                <div id="" 
                    className="gc9s4 gr3s1 
                        grid gtc1 items-center justify-center
                        bg-secondary 
                        ba"
                >
                    <img src = {BgImage04}
                        alt=""
                        className="gc1s1 gr1s1 cover" 
                    />
                    <SectionBanner sectionName='KG-2'
                        sectionURL=''  
                    />
                </div>
                <div className="black 60 gc1s12 tc">
                    Enrol your child banner with a CTA
                </div>
            </section>
            
            <section id="LearningLowerPrimary"
                className="gc1s12 gr4s1 grid gtc12 ggap0-50"
            >
                <div id="" 
                    className="gc5s8 gr1s3 flex items-center justify-center
                        min-vh-80
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='Lower Primary'
                        sectionURL='lower-primary'  
                    />
                </div>
                <div id="" 
                    className="gc1s4 gr1s1 flex items-center justify-center
                        
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='Basic 1'
                        sectionURL=''  
                    />
                    {/* <Preschool /> */}
                </div>
                <div id="" 
                    className="gc1s4 gr2s1 flex items-center justify-center
                        
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='Basic 2'
                        sectionURL=''  
                    />
                    {/* <Preschool /> */}
                </div>
                <div id="" 
                    className="gc1s4 gr3s1 flex items-center justify-center
                        
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='Basic 3'
                        sectionURL=''  
                    />
                    {/* <Preschool /> */}
                </div>
                
                <div className="black 60 gc1s12 tc">
                    Visit Us banner with a CTA
                </div>
            </section>

            <section id="LearningUpperPrimary"
                className="gc1s12 gr5s1 grid gtc12 ggap0-50"
            >
                <div id="" 
                    className="gc1s8 gr1s3 flex items-center justify-center
                        min-vh-80
                        bg-secondary
                        ba"
                >
                    <SectionBanner sectionName='Upper Primary'
                        sectionURL='upper-primary'  
                    />
                </div>

                <div id="" 
                    className="gc9s4 gr1s1 flex items-center justify-center
                        
                        bg-secondary
                        ba"
                >
                    <SectionBanner sectionName='Basic 4'
                        sectionURL=''  
                    />
                    
                </div>

                <div id="" 
                    className="gc9s4 gr2s1 flex items-center justify-center
                        
                        bg-secondary
                        ba"
                >
                    <SectionBanner sectionName='Basic 5'
                        sectionURL=''  
                    />
                    
                </div>

                <div id="" 
                    className="gc9s4 gr3s1 
                        flex items-center justify-center
                        bg-secondary
                        ba"
                >
                    <SectionBanner sectionName='Basic 6'
                        sectionURL=''  
                    />
                </div>

                <div className="black 60 gc1s12 tc">
                    Visit Us banner with a CTA.
                </div>
            </section>

            <section id="LearningJuniorHigh"
                className="gc1s12 gr6s1 grid gtc12 ggap0-50"
            >
                <div id="" 
                    className="gc5s8 gr1s3 flex items-center justify-center
                        min-vh-80
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='Junior High School'
                        sectionURL=''  
                    />
                </div>
                <div id="" 
                    className="gc1s4 gr1s1 flex 
                        items-center justify-center
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='JHS 1'
                        sectionURL=''  
                    />
                </div>
                <div id="" 
                    className="gc1s4 gr2s1 flex 
                        items-center justify-center
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='JHS 2'
                        sectionURL=''  
                    />
                </div>
                <div id="" 
                    className="gc1s4 gr3s1 flex 
                        items-center justify-center
                        bg-gold 
                        ba"
                >
                    <SectionBanner sectionName='JHS 3'
                        sectionURL=''  
                    />
                </div>
            </section>

            <div id="" 
                className="gc6s1 gr2s6 flex 
                    items-center justify-center
                    w1-50
                    bg-black-50 z5"
            >
            </div>
            <div id="" 
                className="gc7s1 gr2s6 
                    flex items-center justify-center
                    w1-00
                    bg-black-50 z5"
            >
            </div>
            <div id="" 
                className="gc8s1 gr2s6 
                    flex items-center justify-center
                    w0-50
                    bg-black-50 z5"
            >
            </div>
            <div id="" 
                className="gc9s1 gr2s6 
                    flex items-center justify-center
                    w0-25
                    bg-black-50 z5"
            >
            </div>
        
        </div>
    )
}

export default LearningLandingPage

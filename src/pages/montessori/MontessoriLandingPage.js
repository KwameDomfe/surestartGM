
import CoreConcepts from "../../components/organisms/montessoriBanners/CoreConcepts"
import MontessorVersusConventionalMethods from "../../components/organisms/montessoriBanners/MontessorVersusConventionalMethods"
import BeyondSureStart from "../../components/organisms/montessoriBanners/BeyondSureStart"
import GraduateProfiles from '../../components/organisms/montessoriBanners/GraduateProfiles'
import Reseach from "../../components/organisms/montessoriBanners/Reseach"
import MontessoriInTheNews from "./MontessoriInTheNews"

function MontessoriLandingPage() {
    
    return (
        <div className="grid gtc12 ggap1-00 flex item-center justify-center ml1-00"
        >
            
            <header id="LearningOverview"
                className="gc1s12 gr1s1 
                    black-50 tc"
            >
                <hgroup className='w-100'>
                    <h1 className="mv2-00
                        f3-00 ttu"
                    >
                        Montessory
                    </h1>
                    <p className="f1-75 pa1-00 mb0-00 bg-black-40 lh-copy tj">At (<abbr title="Surestart Green Montessori">SGM</abbr>) we dolor sit amet consectetur adipisicing elit. Tempora rem nihil <span className="b gold">PreScool</span> vero dolore cum maxime id optio excepturi minima?  Officiis sequi vitae, nihil laborum voluptatum saepe, quia ducimus consequatur <span className="b gold">Lower Primary</span> laboriosam iure ipsam maxime tempora numquam optio amet, atque qui <span className="b gold">Upper Primary</span>. Voluptates quis molestiae <span className="b gold">Junior High School</span> pariatur similique saepe rem voluptate at laborum neque?</p>
                </hgroup>
            </header>
                <section id="MontessoriCoreConcepts" 
                    className="gc1s12 gr2s2 flex items-center justify-center
                    min-vh-50 ba"
                >
                    <CoreConcepts />
                </section>

                <section id="MontessorVersusConventionalMethods" 
                    className="gr5s1 gc1s12 flex items-center justify-center 
                    min-vh-50 
                    bg-black-50"
                >
                   <MontessorVersusConventionalMethods />
                </section>

                <section id="BeyondSureStart" 
                    className="gc7s6 gr6s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                   <BeyondSureStart />
                </section>

                <section id="GraduateProfiles" 
                    className=" gc1s6 flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                   <GraduateProfiles />
                </section>

                <section id="Reseach" 
                    className="gc1s6 gr4s1 flex items-center justify-center
                    min-vh-50 ba"
                >
                   <Reseach />
                </section>

                <section id="MontessoriInTheNews" 
                    className="gc7s6 gr4s1 flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                   <MontessoriInTheNews />
                </section>
        </div>
    )
}

export default MontessoriLandingPage

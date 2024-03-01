
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
            
                <hgroup className="gc1s12 gr1s1 w-100 blue0 tc"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f3-00 ttu"
                    >
                        Montessori
                    </h1>
                </hgroup>

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

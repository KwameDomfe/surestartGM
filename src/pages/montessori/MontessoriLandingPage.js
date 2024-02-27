
import CoreConcepts from "../../components/organisms/montessoriBanners/CoreConcepts"
import MontessorVersusConventionalMethods from "../../components/organisms/montessoriBanners/MontessorVersusConventionalMethods"
import BeyondSureStart from "../../components/organisms/montessoriBanners/BeyondSureStart"
import GraduateProfiles from '../../components/organisms/montessoriBanners/GraduateProfiles'
import Reseach from "../../components/organisms/montessoriBanners/Reseach"
import MontessoriInTheNews from "./MontessoriInTheNews"

function MontessoriLandingPage() {
    
    return (
        <div className="grid gtc12 flex item-center justify-center"
        >
            <div className="gc1s12 h-100 mb4-00"
            >
                <hgroup className="gc1s12 w-100 blue0 tc"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f3-00 ttu"
                    >
                        Montessori
                    </h1>
                </hgroup>

                <section id="MontessoriCoreConcepts" 
                    className="flex items-center justify-center
                    min-vh-50 "
                >
                    <CoreConcepts />
                </section>

                <section id="MontessorVersusConventionalMethods" 
                    className="flex items-center justify-center 
                    min-vh-50 
                    bg-black-50"
                >
                   <MontessorVersusConventionalMethods />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 "
                >
                   <BeyondSureStart />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                   <GraduateProfiles />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50"
                >
                   <Reseach />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 bg-black-50"
                >
                   <MontessoriInTheNews />
                </section>
            </div>
        </div>
    )
}

export default MontessoriLandingPage

import Preschool from '../../components/organisms/learningBanners/Preschool'
import LowerPrimary from '../../components/organisms/learningBanners/LowerPrimary'
import UpperPrimary from '../../components/organisms/learningBanners/UpperPrimary'
import JuniorHigh from '../../components/organisms/learningBanners/JuniorHigh'

function LearningLandingPage() {
    
    return (
        <div className="grid gtc12 
            flex item-center justify-center"
        >
            <div className="gc1s12 
                h-100"
            >
                <hgroup className="gc1s12 
                    w-100 
                    blue0 
                    tc"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f3-00 ttu"
                    >
                        Learning
                    </h1>
                </hgroup>

                <section id="" 
                    className="flex items-center justify-center
                        min-vh-50 "
                >
                    <Preschool />
                </section>
                <section id="" 
                    className="flex items-center justify-center 
                        min-vh-50 
                        bg-black-50"
                >
                    <LowerPrimary />
                </section>
                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 "
                >
                    <UpperPrimary />
                </section>

                <section id="" 
                    className="flex items-center justify-center
                    min-vh-50 
                    bg-black-50"
                >
                    <JuniorHigh />
                </section>
            </div>
        </div>
    )
}

export default LearningLandingPage
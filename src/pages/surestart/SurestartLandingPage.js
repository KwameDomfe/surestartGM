import BoardOfTrustees from '../../components/organisms/surestartBanners/BoardOfTrustees' 
import SGMAtAGlance from "../../components/organisms/surestartBanners/SGMAtAGlance"
import FacultyAndStaff from "../../components/organisms/surestartBanners/FacultyAndStaff"
import MissionVisionAndValues from '../../components/organisms/surestartBanners/MissionVisionAndValues'
import History from '../../components/organisms/surestartBanners/History'
import ContactsAndDirections from '../../components/organisms/surestartBanners/ContactsAndDirections'
import AcademicCalender from '../../components/organisms/surestartBanners/AcademicCalender'


function SurestartLandingPage() {
    
    return (
        
        <div className="grid gtc12 ggap1-00 pl1-00 mb1-00"
        >
            <header id="LearningOverview"
                className="gc1s12 gr1s1 
                    black-50 tc"
            >
                <hgroup className='w-100'>
                    <h1 className="mv2-00
                        f3-00 ttu"
                    >
                        Sure Start Green Montessory
                    </h1>
                    <p className="ph1-00 f1-75 lh-copy bg-black-40 mb0-00 tj">At (<abbr title="Surestart Green Montessori">SGM</abbr>) we dolor sit amet consectetur adipisicing elit. Tempora rem nihil <span className="b gold">PreScool</span> vero dolore cum maxime id optio excepturi minima?  Officiis sequi vitae, nihil laborum voluptatum saepe, quia ducimus consequatur <span className="b gold">Lower Primary</span> laboriosam iure ipsam maxime tempora numquam optio amet, atque qui <span className="b gold">Upper Primary</span>. Voluptates quis molestiae <span className="b gold">Junior High School</span> pariatur similique saepe rem voluptate at laborum neque?</p>
                </hgroup>
            </header>

            <section id="" 
                className="gc1s6 gr2s1 flex items-center justify-center
                min-vh-50 ba"
            >
                <SGMAtAGlance />
            </section>

            <section id="" 
                className="gc7s6 gr2s2 flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <FacultyAndStaff />
            </section>


            <section id="" 
                className="gc1s6 gr3s1
                    flex items-center justify-center
                    min-vh-50 bg-gold"
            >
                <BoardOfTrustees />
            </section>

            <section id="" 
                className="gc1s12
                    flex items-center justify-center
                    min-vh-50 bg-black-50"
            >
                < MissionVisionAndValues />
            </section>

            <section id="" 
                className="gc1s6 gr5s2
                    flex items-center justify-center
                min-vh-50 bg-black-30"
            >
                < History />
            </section>

            <section id="" 
                className="gc7s6 gr5s1
                    flex items-center justify-center
                min-vh-50 bg-black-50"
            >
                < ContactsAndDirections />
            </section>

            <section id="" 
                className="gc7s6 gr6s1
                    flex items-center justify-center
                min-vh-50 ba"
            >
                < AcademicCalender />
            </section>
        </div>
            
        
    )
}

export default SurestartLandingPage

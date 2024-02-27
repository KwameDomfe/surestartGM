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
            <hgroup className="gc1s12 w-100 blue0 tc"
            >
                <h1 className="ph1-00 pt0-00 mv1-50
                    f3-00 ttu"
                >
                    Sure Start Green Montessory
                </h1>
            </hgroup>

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

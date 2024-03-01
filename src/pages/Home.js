import HeroSection from '../components/organisms/homepageBanners/HeroSection'
import SGMLearning from '../components/organisms/homepageBanners/SGMLearning'
import VisitSGM from '../components/organisms/homepageBanners/VisitSGM'
import SGMAcademicCalender from '../components/organisms/homepageBanners/SGMAcademicCalender'

export default function Home(){
  return (
    <div id="home" 
        className="h-100"
    >
        <section id="HomePage__Hero"
            className="flex items-center justify-center
            "
        >
            <HeroSection />
        </section>
        <section id="HomePage__Ministries"
            className="min-vh-50 flex items-center justify-center
                "
        > 
           <SGMLearning />
        </section>

        <section id="HomePage__ChurchServices"
            className="min-vh-50 flex items-center justify-center"
        >
           <VisitSGM />
        </section>

        <section id="HomePage__Programmes"
            className="min-vh-50 flex items-center justify-center
            bg-black-40"
        >
           <SGMAcademicCalender />
        </section>

    </div>
  )
}

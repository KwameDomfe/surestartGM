/* IMPORTS */

// React Router Imports
import {
createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider,
} from 'react-router-dom';

// Cascading Style Sheets Imports
import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';


// Layouts Imports
import RootLayout from './layouts/RootLayout';
import LandingPageLayout01 from './layouts/SurestartPageLayout';
import LearningPageLayout from './layouts/LearningPageLayout';
import MontessoriPageLayout from './layouts/MontessoriPageLayout';

import SurestartLandingPage from './pages/surestart/SurestartLandingPage';

// Home Page
import Home 
from './pages/Home'

// Page Not Found Page
import PageNotFound from './pages/PageNotFound';
import BoardOfTrustees from './pages/surestart/BoardOfTrustees';
import MissionVisionAndValues from './pages/surestart/MissionVisionAndValues';
import History from './pages/surestart/History';
import ContactsAndDirection from './pages/surestart/ContactsAndDirections';
import AcademicCalender from './pages/surestart/AcademicCalender'
import SGMAtAGlance from './pages/surestart/SGMAtAGlance';
import FacultyAndStaff from './pages/surestart/FacultyAndStaff';

import MontessoriLandingPage from './pages/montessori/MontessoriLandingPage';
import LearningLandingPage from './pages/learning/LearningLandingPage';
import Preschool from './pages/learning/Preschool';
import UpperPrimary from './pages/learning/UpperPrimary';
import JuniorHigh from './pages/learning/JuniorHigh';
import LearningLowerPrimary from './pages/learning/LowerPrimary';
import CoreConcepts from './pages/montessori/CoreConcepts';
import MontessoriVersusConventionalMethods from './pages/montessori/MontessoriVersusConventionalMethods';
import BeyondSureStart from './pages/montessori/BeyondSureStart';
import GraduateProfiles from './pages/montessori/GraduateProfiles'
import Research from './pages/montessori/Research';
import MontessoriInTheNews from './pages/montessori/MontessoriInTheNews'
import AdmissionsPageLayout from './layouts/AdmissionsPageLayout';
import AdmissionsLandingPage from './pages/admissions/AdmissionsLandingPage'
import AdmissionProcess from './pages/admissions/AdmissionProcess';
import ConnectWithUs from './pages/admissions/ConnectWithUs';
import TuitionAndFees from './pages/admissions/TutionAndFees';
import FinancialAid from './pages/admissions/FinancialAid';
import Welcome from './pages/admissions/Welcome';
import FrequentlyAskedQuestions from './pages/admissions/FrequentlyAskedQuestions';
import FamiliesPageLayout from './layouts/FamiliesPageLayout';
import FamiliesLandingPage from './pages/families/FamiliesLandingPage';
import ParentsHandbook from './pages/families/ParentsHandbook';
import ParentTeacherAssociation from './pages/families/ParentTeacherAssociation';

    /* FUNCTIONS */

    // Router Function
    const router = createBrowserRouter(
    createRoutesFromElements(

    <Route path=""
        element={<RootLayout />}
    >
        <Route index
            exact
            element={<Home />}
        />

        <Route path="surestart/"
            element={<LandingPageLayout01 />}
        >
            <Route path=""
            element={<SurestartLandingPage />}
        />
        </Route>
        <Route path="surestart/"
            element={<LandingPageLayout01 />}
        >
            <Route path="sgm-at-a-glance"
                element={<SGMAtAGlance />}
            />
            <Route path="faculty-and-staff"
                element={<FacultyAndStaff />}
            />
            <Route path="board-of-trustees"
                element={<BoardOfTrustees />}
            />
            <Route path="mission-vision-and-values"
                element={<MissionVisionAndValues />}
            />
            <Route path="history"
                element={<History />}
            />
            <Route path="contacts-and-directions"
                element={<ContactsAndDirection />}
            />
            <Route path="academic-calender"
                element={<AcademicCalender />}
            />
        </Route>

        <Route path="montessori/"
            element={<MontessoriPageLayout />}
        >
            <Route path=""
            element={<MontessoriLandingPage />}
        />
        </Route>
        <Route path="montessori/"
        element={<MontessoriPageLayout />}
        >
            <Route path="core-concepts"
                element={<CoreConcepts />}
            />
            <Route path="montessori-versus-conventional-methods"
                element={<MontessoriVersusConventionalMethods />}
            />
            <Route path="beyond-surestart/"
                element={<BeyondSureStart />} 
            />
            <Route path="graduate-profiles/"
                element={<GraduateProfiles />} 
            />
            <Route path="research/"
                element={<Research />} 
            />
            <Route path="montessori-in-the-news/"
                element={<MontessoriInTheNews />} 
            />
        </Route>

        <Route path="learning/"
            element={<LearningPageLayout />}
        >
            <Route path=""
            element={<LearningLandingPage />}
        />
        </Route>
        <Route path="learning/"
        element={<LearningPageLayout />}
        >
            <Route path="preschool"
                element={<Preschool />}
            />
            <Route path="lower-primary"
                element={<LearningLowerPrimary />}
            />
            <Route path="upper-primary"
                element={<UpperPrimary />}
            />
            <Route path="junior-high"
                element={<JuniorHigh />}
            />
        </Route>

        <Route path="admissions/"
            element={<AdmissionsPageLayout />}
        >
            <Route path=""
            element={<AdmissionsLandingPage />}
        />
        </Route>
        <Route path="admissions/"
            element={<AdmissionsPageLayout />}
        >
            <Route path='admission-welcome'
                element={<Welcome />}
            
            />
            <Route path="admission-Process"
                element={<AdmissionProcess />}
            />
            <Route path="connect-with-us"
                element={<ConnectWithUs />}
            />
            <Route path="tution-and-fees"
                element={<TuitionAndFees />}
            />
            <Route path="financial-aid"
                element={<FinancialAid />}
            />
            <Route path="faqs"
                element={<FrequentlyAskedQuestions />}
            />
        </Route>

         <Route path="families/"
            element={<FamiliesPageLayout />}
        >
            <Route path=""
                element={<FamiliesLandingPage />}
            />
        </Route>

        <Route path="families/"
        element={<FamiliesPageLayout />}
        >
            <Route path="parent-teacher-association"
                element={<ParentTeacherAssociation />}
            />
            <Route path="parent-handbook"
                element={<ParentsHandbook />}
            />
            
        </Route>

        {/*<Route path="support/"
        element={<ProjectsLayout />}
        // errorElement = { <CareersError /> }
        >
        <Route path='project-category-one'
            element={<ProjectCategoryOne />}
        // loader = {careersLoader}
        />
        <Route path="project-category-two"
            element={<ProjectCategoryTwo />}
        // loader = {careerDetailsLoader}
        />
        <Route path="project-category-three"
            element={<ProjectCategoryThree />}
        // loader = {careerDetailsLoader}
        />
        </Route>

        <Route path="alumni/"
        element={<TrainingArmsLayout />}
        // errorElement = { <CareersError /> }
        >
        <Route path='training-arm-one'
            element={<TrainingArmOne />}
        // loader = {careersLoader}
        />
        <Route path="training-arm-two"
            element={<TrainingArmTwo />}
        // loader = {careerDetailsLoader}
        />
        <Route path="training-arm-three"
            element={<TrainingArmThree />}
        // loader = {careerDetailsLoader}
        />
        </Route> */}

        <Route path="*"
        element={<PageNotFound />}
        >
        </Route>

    </Route>

    )
    )

    // Main App
    function App() {
    return (
    <RouterProvider
        router={router}
    />
    );
    }

    export default App;

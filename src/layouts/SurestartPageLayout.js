import { NavLink, Outlet } from "react-router-dom"
import regular_image from '../images/placeholders/regular_images/regular_01.png'

export default function SurestartPageLayout() {


    return (
        <div id="LandingPageLayout"
            className="w-100"
        >
            <header id="" 
                className="grid gtc12"
            >
                <figure className="gc1s12 gr1s1 grid gtc4 ggap0-50 vh-60"
                >
                    <img src={regular_image} 
                        alt="" 
                        className="vh-60 cover"
                    />
                    <img src={regular_image} 
                        alt="" 
                        className="vh-60 cover"
                    />
                    <img src={regular_image} 
                        alt="" 
                        className="vh-60 cover"
                    />
                    <img src={regular_image} 
                        alt="" 
                        className="vh-60 cover"
                    />
                </figure>
            </header>

            <div id=""
                className="grid gtc12 container container90 "
            >
                 <aside id="projectCategories--nav1"
                    className="
                        gc1s3 sticky top-0
                        bg-blue1 vh-100
                       "
                >
                     <ul id="PageNavigation"
                        className="pa1-00 w20-00 "
                    >
                        <li>
                            <NavLink to = ""
                                className="dib mb1-00 white-90 f1-50 ttu b"
                            >
                                Surestart Green Montessori
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "sgm-at-a-glance"
                                className="dib white-90 mb1-00"
                            >
                               SGM At a Glance
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "faculty-and-staff" 
                                className="dib white-90 mb1-00"
                            >
                                Faculty and Staff
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "board-of-trustees"
                                className="dib white-90 mb1-00"
                            >
                                Board of Trustees
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "mission-vision-and-values"
                                className="dib white-90 mb1-00"
                            >
                                Mission Vision and Values
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "history"
                                className="dib white-90 mb1-00"
                            >
                                History
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "contacts-and-directions"
                                className="dib white-90 mb1-00"
                            >
                                Contacts and Directions
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "academic-calender"
                                className="dib white-90 mb1-00"
                            >
                                Academic Calender
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <main id="" 
                    className="gc4s9 w-100"
                >
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

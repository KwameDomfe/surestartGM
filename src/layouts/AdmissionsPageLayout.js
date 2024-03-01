import { NavLink, Outlet } from "react-router-dom"
import regular_image from '../images/placeholders/regular_images/regular_01.png'

export default function AdmissionsPageLayout() {


    return (
        <div id="AdmissionsPageLayout"
            className="w-100"
        >
            <header id="" 
                className="grid gtc12"
            >
                <figure className="gc1s12 gr1s1 flex ggap0-50"
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
                className="grid gtc12 container container90 relative"
            >
                 <aside id="projectCategories--nav1"
                    className="
                        gc1s3
                        bg-blue1 vh-100 pb-100
                        "
                >
                     <ul id="PageNavigation"
                        className="pa0-50 w20-00"
                    >
                        <li>
                            <NavLink to = ""
                                className="dib mb1-00 white-90 f1-50 ttu b sticky top-0"
                            >
                                Admissions
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "admission-welcome"
                                className="dib white-90 mb1-00"
                            >
                               Welcome
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "admission-Process" 
                                className="dib white-90 mb1-00"
                            >
                               Admission Process
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "connect-with-us"
                                className="dib white-90 mb1-00"
                            >
                                Connect With Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "tution-and-fees"
                                className="dib white-90 mb1-00"
                            >
                                Tuition And Fees
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to= "financial-aid"
                                className="dib white-90 mb1-00"
                            >
                                Financial Aid
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to= "faqs"
                                className="dib white-90 mb1-00"
                            >
                               Frequently Asked Questions
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

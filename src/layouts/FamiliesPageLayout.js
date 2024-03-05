import { NavLink, Outlet } from "react-router-dom"
import regular_image from '../images/placeholders/regular_images/regular_01.png'

export default function FamiliesPageLayout() {

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
                className="grid gtc12 container container90 relative"
            >
                 <aside id="projectCategories--nav1"
                    className="
                        gc1s3
                        bg-blue1 vh-100 pb-100"
                >
                     <ul id="PageNavigation"
                        className="pa0-50 w20-00"
                    >
                        <li>
                            <NavLink to = ""
                                className="dib mb1-00 white-90 f1-50 ttu b sticky top-0"
                            >
                                Families
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "parent-teacher-association"
                                className="dib white-90 mb1-00"
                            >
                               Parent Teacher Association
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "parent-handbook" 
                                className="dib white-90 mb1-00"
                            >
                               Parent Handbook
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

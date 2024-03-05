import { NavLink, Outlet } from "react-router-dom"
import regular_image from '../images/placeholders/regular_images/regular_01.png'

export default function MontessoriPageLayout() {


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
                                Montessori
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "core-concepts"
                                className="dib white-90 mb1-00"
                            >
                               Core Concepts
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to = "montessori-versus-conventional-methods" 
                                className="dib white-90 mb1-00"
                            >
                               Montessori versus Conventional Methods
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "beyond-surestart"
                                className="dib white-90 mb1-00"
                            >
                                Beyond Sure Start
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "graduate-profiles"
                                className="dib white-90 mb1-00"
                            >
                                Graduate Profiles
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "research"
                                className="dib white-90 mb1-00"
                            >
                                Research
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to= "montessori-in-the-news"
                                className="dib white-90 mb1-00"
                            >
                                Montessori In the News
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

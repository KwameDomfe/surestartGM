import regularimage from "../../images/placeholders/regular_images/regular_03.jpg"
import { NavLink } from "react-router-dom"
function RecentLinks() {

    return (
        <div id="m_RecentLinks" 
            className="grid gtc2 ggap1-00
                fw5" 
            aria-hidden="False"
        >
            <div id="m_RecentLinks--1" 
                className="gr1s1 gc2s1 
                    br1-00" 
                data-use-new="true"
            >
                <figure id="recentMinistry" 
                    className="grid items-end justify-center"
                >
                    
                    <img src={regularimage} 
                        alt="" 
                        className="br0-50 gc1s1 gr1s1"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 
                        tc bg-gradient1TB gold br0-50"
                    >
                        <NavLink to="/"
                            className="white-90"
                        >
                            Recent Ministry
                        </NavLink>
                    </figcaption>
                </figure> 
            </div>
            
            <div id="m_RecentLinks--2" 
                className=" br1-00 gr2s1 gc1s1" 
                data-use-new="true"
            >
                <figure id="RecentChurchService" 
                    className="grid items-end justify-center"
                >
                    <img src={regularimage} 
                        alt="" 
                        className="gc1s1 gr1s1
                            w-100 br0-50"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 
                        tc bg-gradient1TB white-90 br0-50">
                        <NavLink to="/" className="white-90">Recent Church Service</NavLink>
                    </figcaption>
                </figure> 
            </div>

            <div id="m_RecentLinks--3" 
                className=" br1-00 gr1s1 gc1s1" 
                data-use-new="true"
            >
                <figure id="RecentOutreach" 
                    className="grid items-end justify-center"
                >
                    <img src={regularimage} 
                        alt="" 
                        className="gc1s1 gr1s1
                            w-100 
                            br0-50"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 
                        tc 
                        bg-gradient1TB gold br0-50"
                    >
                        <NavLink className="white-90">
                            Recent Outreach
                        </NavLink>
                    </figcaption>
                </figure> 
            </div>

            <div id="m_RecentLinks--4" 
                className=" br1-00 gr2s1 gc2s1" 
                data-use-new="true"
            >
                <figure id="recentProgramme" 
                    className="grid items-end justify-center"
                >
                    <img src={regularimage} 
                        alt="" 
                        className="w-100 br0-50 gc1s1 gr1s1"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 tc bg-gradient1TB gold br0-50"
                    >
                        <NavLink to="" 
                            className="white-90"
                        >
                            Recent Programme
                        </NavLink>
                    </figcaption>
                </figure> 
            </div>
        </div>
    )
}

export default RecentLinks

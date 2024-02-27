import { NavLink } from 'react-router-dom'

function MainFooterNavigation() {
    return (
        <div 
            className="grid
            items-start justify-between ggap0-50 
            w-100"
        >
            <div id="FooterMinistries" 
                className="gr1s1 gc1s12 gc1s6-s gc1s3-m" 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="ministries" 
                section-index="1"
            >
                <h2 className=""
                >
                    <NavLink to="/ministries/" 
                        className="gold"
                        role="button" 
                        aria-expanded="false"
                    >
                        MINISTRIES
                    </NavLink>
                </h2>
                <ul className="flex flex-column items-center justify-center"
                >
                    <li className="w-100 
                        mb1-00"
                    >
                        <NavLink to="ministries-to-god" 
                            className="gold dib"
                        >
                            Ministry to God 
                        </NavLink>
                    </li>
                
                    <li className="w-100 
                        mb1-00"
                    >
                        <NavLink to="ministries-to-believers"  
                            className="gold dib "
                        >
                            Ministry to Believers 
                        </NavLink>
                    </li>
                
                    <li className="w-100 
                        mb1-00"
                    >
                        <NavLink to="ministries-to-unbelievers"
                            className="gold dib "
                        >
                            Ministry to Unbelievers 
                        </NavLink>
                    </li>
                </ul> 
                <header>
                    <h2 className=""
                    >
                        <NavLink to="church-services" 
                            role="button" 
                            aria-expanded="false" 
                            className="gold"
                        >
                            CHURCH SERVICES
                        </NavLink>
                    </h2>
                </header>

                <nav aria-label="">
                    <ul className=""
                    >
                        <li className="mb1-00 "
                        >
                            <NavLink to="sunday-service" 
                                className="gold"
                            >
                                Sunday-  Word-Miracle service
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        >
                            <NavLink to="wednesday-service" 
                                className="gold" 
                            >
                                Wednesday-  Word Baptism
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        >
                            <NavLink to="friday-service" 
                                className="gold" 
                            >
                                Friday-  Prayer/ Supernatural Service
                            </NavLink>
                        </li>
                    </ul>
                </nav> 
            </div>

            <div id="FooterChurchServices" 
                className="gr3s1 gr2s1-s gr1s1-m gc1s12 gc1s6-s gc4s3-m" 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="church services" 
                section-index="3">
                <header>
                    <h2 className="ttu">
                        <NavLink to="#principles" 
                            role="button" 
                            aria-expanded="false" 
                            className="gold">
                            outreach
                        </NavLink>
                    </h2>
                </header>

                <nav aria-label="">
                    <ul className="">
                        <li className="mb1-00 ">
                            <NavLink to="" 
                                className="gold" >
                                Books
                            </NavLink>
                        </li>
                        <li className="mb1-00 ">
                            <NavLink to="" 
                                className="gold" >
                                Audios
                            </NavLink>
                        </li>
                        <li className="mb1-00 ">
                            <NavLink to="" 
                                className="gold" >
                                Videos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <header>
                    <h2 className=""
                    >
                        <NavLink to="#principles" 
                            className="gold"
                            role="button" 
                            aria-expanded="false" 
                        >
                            PUBLICATIONS
                        </NavLink>
                    </h2>
                </header>

                <nav aria-label=""
                >
                    <ul className=""
                    >
                        <li className="mb1-00 "
                        >
                            <NavLink  to="" 
                                className="gold" 
          
                                 
                            >
                                Publications One
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        >
               
                                <NavLink to=""  
                                className="gold" 
                            >
                                Publications Two
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        >
                                <NavLink to="" 
                                className="gold" 
                            >
                                Publications Three
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div id="FooterGRMTheChurch" 
                aria-label="practice" 
                className="gr2s1 gr1s1-s gc1s12 gc7s6-s gc10s3-m" 
                data-use-new="true" 
                role="tabpanel" 
                section-index="2"
            >
                <h2 className=""
                >
                    <NavLink role="button" aria-expanded="false" to="#practice" className="gold">
                        GRM - The Church
                    </NavLink>
                </h2>
                <ul className=""
                >
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/history"
                            className="gold" >
                            History
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/mandate"
                            className="gold" 
                        >
                            Mandate
                        </NavLink>
                    </li>
                    <li className="mb0-50">
                        <NavLink to="/grm/functions"
                            className="gold" 
                        >
                            Functions
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/mission-vision-values"
                            className="gold" 
                        >
                            Mission, Vision &amp; Values
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/church-governance/"
                            className="gold" 
                        >
                            Church Governance
                        </NavLink>
                    </li>
                    <li className="mb0-50">
                        <NavLink to="/grm/administration/"
                            className="gold" 
                        >
                            Church Administration
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/testimonials"
                            className="gold" 
                        >
                            Testimonials
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/alliances/"
                            className="gold" 
                        >
                            Alliances
                        </NavLink>
                    </li>
                    <li className="mb0-50"
                    >
                        <NavLink to="/grm/church-responsibilities"
                            className="gold" 
                        >
                            Community Engagement
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div id="FooterPeople" 
                className="gc1s12 gr4s1 gc7s6-s gr2s1-s gr1s1-m gc7s3-m" 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index="4"
            >
                <header
                >
                    <h2 className=""
                    >
            
                            <NavLink to="" 
                            role="button" 
                            aria-expanded="false" 
                            className="gold"
                        >
                            PROGRAMMES
                        </NavLink>
                    </h2>
                </header>

                <nav aria-label=""
                >
                    <ul className=""
                    >
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Annual Repentance Conference
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Mid-Year Thanksgiving Convocation</NavLink>
                        </li>
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Quarterly Covenant Thanksgiving Service
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Monthly Covenant Celebration Gathering <br/> (Communion service)
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Ministries’ Celebration Days
                            </NavLink>
                        </li>
                        <li className="mb1-00 "> 
                            <NavLink to="" 
                                className="gold" >Monthly All-Night Vigils
                            </NavLink>
                        </li>
                        <li className="mb1-00 "
                        > 
                            <NavLink to="" 
                                className="gold" >Monthly Street Evangelism</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MainFooterNavigation

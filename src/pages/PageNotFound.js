import { NavLink } from 'react-router-dom'

import hero_image from '../images/placeholders/landscape_Images/landscape_01.png'

export default function PageNotFound() {
  return (
    
    <div id="PageNotFound"
        className=""
    >
        <header className="grid gtc12"
        >
            <figure className="gc1s12 gr1s3"
            >
                <img src={hero_image} alt="" className="w-100 vh-50 cover"
                />
            </figure>


            <hgroup className="w-100 blue0 gc1s12">
                <h1 className="
                ph1-00 pt0-00 mb0-50 mt0-00
                f4-00 ttu
                ">
                    Page Not Found
                </h1>
            </hgroup>

            <div id="projects_page_Nav"
                className="grid gtc12 gc1s12 ggap1-00
            ph1-00 pb2-00
            white-90
            f1-25  tracked-tight"
            >
                <div id="projectCategories--nav1"
                    className="gr1s1 gc10s3
                    h0-00 pb-100
                    bg-blue1
                    br0-50 ba shadow-yellow"
                >
                    <ul id="projectCategories_list_1"
                        className="pa0-50"
                    >
                        <li>
                            <NavLink to = "/"
                                className='dib white-90 mb0-50'
                                >Homepage
                            </NavLink>.
                        </li>

                        <li>
                            <NavLink
                                className="dib white-90 mb0-50"
                                to="learning"
                            >
                                Learning
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className="dib white-90 mb0-50"
                                to="montessori/"
                            >
                                Montessori
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                className="dib white-90 mb0-50"
                                to="admissions/"
                            >
                                Admissions
                            </NavLink>
                        </li>
                    </ul>
                </div> 

                <div id="projectCategories--nav1"
                    className="gr1s1 gc7s3
                    h0-00 pb-100
                    bg-blue1
                    br0-50 ba">
                </div>

                <div id="project_info" className="gr1s1 gc1s6 black-90
                    w-100 ba
                    ">
                    <hgroup id="Project_Overview_1" className="f1-25">
                        <p className="mb0-00 pr1-00 lh-copy tracked tj">
                            Could not find the page you are looking for?
                        </p>
                        <p className="mb0-00 pr1-00 lh-copy tracked tj">
                            Try out on the links provided to conitune exploring GRM websi
                        </p>
                    </hgroup>
                </div>

            </div>

        </header>
    </div>

    )
}
  


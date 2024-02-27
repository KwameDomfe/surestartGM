import { Link } from 'react-router-dom'

function MiscLinks() {
  return (
        <ul id="m__horizontal-list" 
            className="flex items-center justify-center 
                pv0-50 mb1-50
                bb bg-blue4 w-100 h-100
                f0-75 blue0"
        >
            <li className="">
                <Link className="blue0" 
                    to=""
                >
                    Legal
                </Link>
            </li>
            <li className="ml0-50"
            >
                <Link className="blue0" 
                    to=""
                >
                    Policies
                </Link>
            </li>
            <li className="ml0-50">
                <Link className="blue0" 
                    to=""
                >
                    Privacy
                </Link>
            </li>
            <li className="ml0-50">
                <Link className="blue0" 
                    to=""
                >
                    Guidelines
                </Link>
            </li>
        </ul>
    )
}

export default MiscLinks

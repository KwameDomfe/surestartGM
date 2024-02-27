import { Link } from "react-router-dom"

function SGMAtAGlance() {
    return (
        <div className = "tc"
        >
            <h1 className="mb2-00"
            >
                SGM at a Glance
            </h1>

            <Link to="sgm-at-a-glance"
                className="pv0-50 ph1-00 
                    black-90 
                    ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default SGMAtAGlance

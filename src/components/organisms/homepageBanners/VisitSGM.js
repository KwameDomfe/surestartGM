import { Link } from "react-router-dom"

function VisitSGM() {
  
    return (
        <div className = "tc"
        >
            {/* <h1 className="mb4-00">Visit Surestart Green Montessori</h1> */}

            <h2 className="f2-00">
                Is Surestart Green Montessori School the right fit for your family?
            </h2>
            <p className="f1-25 mb4-00">Visit Surestart Green Montessori School and learn more about our community, our children, and the Montessori Approach.</p> 
            <Link to="surestart/contacts-and-directions"
                className="white-90 bg-secondary pv0-50 ph1-00 br0-25"
            >
                Visit Us
            </Link>
        </div>
    )
}

export default VisitSGM

import { Link } from "react-router-dom";


export default function AdmissionProcess() {
  return (
    <div className = "tc"
    >
        <h1 className="mb4-00"
        >
            Admission Process
        </h1>

        <Link to="admission-process"
            className="black-90 pv0-50 ph1-00 ba br0-25"
        >
            Explore More
        </Link>
    </div>
  )
}

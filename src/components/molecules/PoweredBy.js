import { Link } from 'react-router-dom';
function PoweredBy() {

    const kdaAddress = "https://www.kdadesign.tech"

    return (
        <div id="m__poweredby" 
            className="flex items-center justify-center flex-column 
            blue0 f0-75"
        >
            <small className="mb0-50"
            >
                powered by:
            </small>
            <Link to = {kdaAddress}
                className="blue0"
            >
                <div className="flex"
                >
                    <small className=""
                    >
                        kda design technologies
                    </small>
                    <small className="ml0-50"
                    >
                        © 2024
                    </small>
                </div>
            </Link>
        </div> 
    )
}

export default PoweredBy

import SGMlogo from '../../images/_partials/logos/surestart_logo.png';

function SGMLogo() {

    const name = 'Surestart Green Motessori'
    const slogan = 'DUCENS DOCTRINA MODIES GRAS'
    const established ='since 2014'

    return (
        <figure id="m_GRM__logo" 
            className="flex items-center justify-center 
                tc blue0 h-100"
        >
            <img src={ SGMlogo } 
                alt="GRM Logo" 
                className="w4-00
                    mr0-00-l"
            /> 
            <figcaption 
                className="dn flex-m flex-column justify-start items-center 
                    ttu tl ph0-75"
            >
                <h3 className="f1-00 mb0-50">
                    {name}
                </h3> 
                <h4 className="f0-75 mb0-50">
                    {slogan}
                </h4> 
                <div className="flex justify-center items-center 
                     w-100
                    f0-75">
                    <div className="w-10 h0-25 bb bt"></div> 
                        <div className="mh1-00">{established}</div>
                    <div className="w-10 h0-25 bb bt"></div>
                </div> 
            </figcaption>
        </figure>
    )
}

export default SGMLogo

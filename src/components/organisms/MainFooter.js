// import RecentLinks from '../molecules/RecentLinks'
// import MainFooterNavigation from '../molecules/MainFooterNavigation'
// import SubscriptionForm from '../molecules/SubscriptionForm'
// import GRMAddress from '../molecules/GRMAddress'
import Poweredby from '../molecules/PoweredBy'
const MainFooter = () => {
  return (
    
    <div id="" 
        className="gc1s12 
            flex items-center justify-center 
        "
    >
        <div id="container" 
            className="grid gtc12
                w-100  tc
                " 
            tabIndex="0" 
            title="" 
            aria-label=""
        >
            <h3 className="gc1s12 mb0-00 pv2-00">
                main footer section
            </h3>
           
            {/* <section id="o_navigation" 
                className="gr1s1 gc1s12 " 
                sections=""
            >
                <h1>Main Navigation</h1>
               <MainFooterNavigation /> 
            </section> */}

            {/*<section id="description_and_address" 
                className="gr2s1 gc1s12 gc5s5-m ggap1-00
                    flex flex-column flex-row-s flex-start ggap2-00 
                    
                    f1-00 tj"
            >
                <h1>Address</h1>
                <GRMAddress /> 
            </section>*/}

             {/* <section id="o_subscription" 
                className="gr3s1 gr2s1-m gc1s12 gc1s4-m
                "
            >
               <h1>Subscriptions</h1> 
                <SubscriptionForm /> 
            </section>*/} 

            {/* <section id="RecentLinks" 
                className="gr4s1 gc1s12 gr2s1-m gc10s3-m
                flex flex-column 
                w-100 " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index=""
            >
                {/* <h1>Recents</h1>  
                {/* <RecentLinks /> 
            </section> */}

            <div className='gc1s12 pa1-00 bg-gray'
            >
                <Poweredby />
            </div>
        </div>
    </div>
  )
}

export default MainFooter

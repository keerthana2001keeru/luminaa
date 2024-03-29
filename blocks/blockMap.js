import React from "react";

//home pages
import Banner3 from "./bannner/Banner3";
import Partner3 from "./partner/Partner3";
import Solution3 from "./solutions/Solution3";
import About3 from "./about/About3";
import SuccessStory3 from "./successStorys/SuccessStory3";
import Testimonial3 from "./testimonial/Testimonial3";
import PricingPlan3 from "./pricingplan/PricingPlan3";
import Home3Contact from "./contact/Home3Contact";
import Home3Team from "./Team/Home3Team";
import Home3Blog from "./blog/Home3Blog";
import Breadcrumb from "./common/Breadcrumb";
import ServiceCard from "./services/servicecard";
import ServiceAbout from "./services/about-services";
import HowWeWork from "./services/how-we-work";
import ServiceSortDiscription from "./services/service-sort-discription";
import ServiceFaq from "./services/service-faq";
import TeamPage3 from "./Team/team1";
import ContactPage1 from "./contact/contactPage1";
import FaqPage1 from "./faq/faqPage1";
import ErrorPage404 from "./404/errorPage404";
import CsdUnlockingPage1 from "./caseStudyDetails/csdUnlockingPage1";
import CsdOverviewPage2 from "./caseStudyDetails/csdOverviewPage2";
import CsdSolutionPage3 from "./caseStudyDetails/csdSolutionPage3";
import CsdProcessPage4 from "./caseStudyDetails/csdProcessPage4";
import CsdCardStepPage5 from "./caseStudyDetails/CsdCardStepPage5";
import CsdProcessImgPage6 from "./caseStudyDetails/CsdProcessImgPage6";
import ServiceContact from "./services/service-contact";
import Service2Card from "./services/service2card";
import Service3Card from "./services/service3card";
import Service4Card from "./services/service4card";
import TeamSection1 from "./Team/teamsection1";
import TeamSection2 from "./Team/teamsection2";
import Pricing4 from "./pricingplan/Pricing4";
import ProjectSuccessStories from "./project/projectsuccessstories";
import Banner4 from "./bannner/Banner4";
import About4 from "./about/About4";
import Service4 from "./services/Service4";
import WorkSection4 from "./wordSection/WorkSection4";
import Feature4 from "./features/Feature4";
import Partnar4 from "./partner/Partnar4";
import Testimonial4 from "./testimonial/Testimonial4";
import Experts4 from "./expertes/Experts4";
import Insight4 from "./insight/Insight4";
import Home4Contact from "./contact/Home4Contact";
import Bannder5 from "./bannner/Bannder5";
import About5 from "./about/About5";
import Service5 from "./services/Service5";
import WhatWeDo5 from "./choose/WhatWeDo5";
import Partner5 from "./partner/Partner5";
import CaseStudy5 from "./caseStudy/CaseStudy5";
import Testimonial5 from "./testimonial/Testimonial5";
import Award5 from "./award/Award5";
import Home5Team from "./Team/Home5Team";
import Home5Blog from "./blog/Home5Blog";
import Choose6 from "./choose/Choose6";
import Banner6 from "./bannner/Banner6";
import Review6 from "./review/Review6";
import Solution6 from "./solutions/Solution6";
import CaseStudy6 from "./caseStudy/CaseStudy6";
import Partnar6 from "./partner/Partnar6";
import RibbonBlock from "./ribbonblock/ribbonblock";
import CaseStudy from "./casestudypage1/caseStudy page1";
import ContactPage2 from "./contact/contactPage2";
import CaseStudy2 from "./casestudypage2/casestudypage2";
import CaseStudyStandard from "./casestudy-standard/casestudy-standard";
import Testimonial6 from "./testimonial/Testimonial6";
import WhatWeDo6 from "./choose/WhatWeDo6";
import Home6Contact from "./contact/Home6Contact";
import ServiceCategory from "./solutions/serviceCategory";
import ServiceCate2 from "./servicecate2";
import HowWeWork2 from "./services/how-we-work2";
import ServiceTabSec from "./services/ServiceTabSec/serviceTabSec";
import ExpertiseBlock1 from "./expertes/expertiseBlock1";
import ExpertiseBlock2 from "./expertes/expertiseBlock2";
import ExpertiseBlock3 from "./expertes/expertiseBlock3";
import ExpertiseBlock4 from "./expertes/expertiseBlock4";
import SubNavigation from "./Sub-Navbar/sub-navigation";
import Portfolio from "./portfolio/portfolio";
import ProjectDetail from "./project/projectdetail";
import WhatWeDonNew from "./choose/WhatWeDoNew";
import HeadingSec from "../components/HeadingSec/headingSec";
import BlogBanner from "./blog/BlogBanner";
import Service2Mo from "./services/service2modified";


const ComponentItems = {
  
    //home-01

  "TH00150B01": Banner3,
  "TH00150B02": Partner3,
  "TH00150B03": Solution3,
  "TH00150B04": About3,
  "TH00150B05": SuccessStory3,
  "TH00150B06": Testimonial3,
  "TH00150B07": PricingPlan3,
  "TH00150B08": Home3Contact,
  "TH00150B09": Home3Team,
  "TH00150B10": Home3Blog,
  "TH00150B15":ContactPage2,
  // "TH00150B16":ServiceCategory,
  // "TH00150B17":ServiceTabSec,
  // "TH00150B18":ServiceCate2,
  
  //home-02
"TH00150B100": Banner4,
"TH00150B101": About4,
"TH00150B102": Service4,
"TH00150B103": WorkSection4,
"TH00150B104": Feature4,
"TH00150B105": Partnar4,
"TH00150B106": Testimonial4,
"TH00150B107": Pricing4,
"TH00150B108": Experts4,
"TH00150B109": Insight4,
"TH00150B110": Home4Contact,

//home-03
"TH00150B120": Bannder5,
"TH00150B121": About5,
"TH00150B122": Service5,
"TH00150B123": WhatWeDo5,
"TH00150B124": Partner5,
"TH00150B125": CaseStudy5,
"TH00150B126": Testimonial5,
"TH00150B127": Award5,
"TH00150B128": Home5Team,
"TH00150B129": Home5Blog,


//home-04
"TH00150B140": Banner6,
"TH00150B141": Review6,
"TH00150B111": Choose6,
"TH00150B142": Solution6,
"TH00150B143": CaseStudy6,
"TH00150B144": Partnar6,
"TH00150B145": Testimonial6,
"TH00150B146": WhatWeDo6,
"TH00150B147": Home6Contact,
// "TH00150B148": WhatWeDonNew,
// "TH00150B149": HeadingSec,


//About
"TH00150B112": Breadcrumb,
"TH00150B04": About3,
"TH00150B111": Choose6,
"TH00150B104": Feature4,
"TH00150B105": Partnar4,
"TH00150B06": Testimonial3,
"TH00150B09": Home3Team,
"TH00150B08": Home3Contact,
"TH00150B10": Home3Blog,

  //service 1
"TH00150B031": Breadcrumb,
 "TH00150B032": ServiceCard,
 "TH00150B001": RibbonBlock,

 
//  "TH00150B002": HowWeWork2,
// service 2
"TH00150B041":Breadcrumb,
"TH00150B042":Service2Card,

// service 3
"TH00150B043":Breadcrumb,
"TH00150B044":Service3Card,
// service 4
"TH00150B045":Breadcrumb,
"TH00150B046":Service4Card,

  //service-detail

  "TH00150B033": Breadcrumb,
  "TH00150B034": ServiceAbout,
  "TH00150B035": HowWeWork,
  "TH00150B036": ServiceSortDiscription,
  "TH00150B037": ServiceFaq,
  "TH00150B38" : ServiceContact,

  //Team 1
  "TH00150B051": Breadcrumb,
  "TH00150B052": TeamSection1,
//Team 2
"TH00150B053": Breadcrumb,
"TH00150B054": TeamSection2,
  //Team 3
  "TH00150B40": Breadcrumb,
  "TH00150B41": TeamPage3,
  //pricing 1
  "TH00150B047": Breadcrumb,
  "TH00150B07": PricingPlan3,
  //pricing 2
  "TH00150B049": Breadcrumb,
  "TH00150B107": Pricing4,
 //project 
 "TH00150B055": Breadcrumb,
 "TH00150B056":ProjectSuccessStories,

 //project details
 
  //Contact
  "TH00150B50": Breadcrumb,
  "TH00150B51": ContactPage1,

  //FAQs
  "TH00150B60": Breadcrumb,
  "TH00150B61": FaqPage1,

  //Error404
  "TH00150B70": ErrorPage404,

  //Case Study Details
  "TH00150B90": Breadcrumb,
  "TH00150B91": CsdUnlockingPage1,
  "TH00150B92": CsdOverviewPage2,
  "TH00150B93": CsdSolutionPage3,
  "TH00150B94": CsdProcessPage4,
  "TH00150B95": CsdCardStepPage5,
  "TH00150B96": CsdProcessImgPage6,

//case study 1

"TH00150B160": Breadcrumb,
"TH00150B162": CaseStudy,

//case study 2
"TH00150B163": Breadcrumb,
"TH00150B164": CaseStudy2 ,
//case study standard
"TH00150B165": Breadcrumb,
"TH00150B166": CaseStudyStandard ,
 
// career
"TH00150B331":Breadcrumb,

//expertise2 page 
// "TH00150B231": SubNavigation,
"TH00150B232": ExpertiseBlock1,
"TH00150B233": ExpertiseBlock2,
"TH00150B234": ExpertiseBlock3,
"TH00150B235": ExpertiseBlock4,
"TH00150B236": ExpertiseBlock4,


//project masonary

"TH00150B240": Breadcrumb,
"TH00150B241": Portfolio,

//project detail page
 
"TH00150B242": Breadcrumb,
"TH00150B243": ProjectDetail,

// //blog
// "TH00150B244": Breadcrumb,
// "TH00150B245": BlogBanner,



};


function MapBlock(blockId, data) {

  if (typeof ComponentItems[blockId] !== "undefined") {
   
    return React.createElement(ComponentItems[blockId], {
      key: data.blockRef,
      uiLayout: data,
    });
  }
}

export {MapBlock };

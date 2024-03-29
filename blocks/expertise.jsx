import Link from 'next/link'
import React from 'react'
import ExpertiseComp1 from '../components/ExpertiseComp/expertiseComp1/expertiseComp1';
import ExpertiseTab from '../components/ExpertiseComp/expertiseComp3/expertiseTab';
import { expertiseData } from '../data/expertiseComp1Data';
import styles from "./expertise.module.scss"
import ExpertiseComp2 from '../components/ExpertiseComp/expertiseComp2/expertiseComp2';

import ExpertiseComp4 from '../components/ExpertiseComp/expertiseComp4/expertiseComp4';
import ExpertiseComp5 from '../components/ExpertiseComp/expertiseComp5/expertiseComp5';
import ExpertiseComp6 from '../components/ExpertiseComp/expertiseComp6/expertiseComp6';

function ExpertiseBlock(props) {

  var userValue = props?.userSettings;
 // console.log("jhjjkkk",userValue);

  var tab1comp1=userValue[0]?.elements;
  var tab1comp2=userValue[1]?.elements;
  var tab1comp3=userValue[2]?.elements;
  var tab1comp4=userValue[3]?.elements;
  var tab1comp5=userValue[4]?.elements;

  var tab2comp1=userValue[5]?.elements;
  var tab2comp2=userValue[6]?.elements;
  var tab2comp3=userValue[7]?.elements;
  var tab2comp4=userValue[8]?.elements;
  var tab2comp5=userValue[9]?.elements;

  var tab3comp1=userValue[10]?.elements;
  var tab3comp2=userValue[11]?.elements;
  var tab3comp3=userValue[12]?.elements;
  var tab3comp4=userValue[13]?.elements;
  var tab3comp5=userValue[14]?.elements;


  var tab4comp1=userValue[15]?.elements;
  var tab4comp2=userValue[16]?.elements;
  var tab4comp3=userValue[17]?.elements;
  var tab4comp4=userValue[18]?.elements;
  var tab4comp5=userValue[19]?.elements;

  var tab5comp1=userValue[20]?.elements;
  var tab5comp2=userValue[21]?.elements;
  var tab5comp3=userValue[22]?.elements;
  var tab5comp4=userValue[23]?.elements;
  var tab5comp5=userValue[24]?.elements;


  var tab6comp1=userValue[25]?.elements;
  var tab6comp2=userValue[26]?.elements;
  var tab6comp3=userValue[27]?.elements;
  var tab6comp4=userValue[28]?.elements;
  var tab6comp5=userValue[29]?.elements;
  var tabs=userValue[30]?.elements;
  // console.log("tabs",tabs)
  return (
    <div className="mt-5 pt-5">
    <div className={styles.skickyclass + 'container-fluid'}>
   <div className={styles.skickyclass}>
    <ul className={styles.stickTab + " nav nav-pills mb-3 " }id="pills-tab" role="tablist" >
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link active" }id="pills-ias-tab" data-bs-toggle="pill" data-bs-target="#pills-ias" type="button" role="tab" aria-controls="pills-ias" aria-selected="true">{tabs?.listingmainTabs?.headingTab1?.value}</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link" } id="pills-infra-tab" data-bs-toggle="pill" data-bs-target="#pills-infra" type="button" role="tab" aria-controls="pills-infra" aria-selected="false">{tabs?.listingmainTabs?.headingTab2?.value}</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link" } id="pills-ms-tab" data-bs-toggle="pill" data-bs-target="#pills-ms" type="button" role="tab" aria-controls="pills-ms" aria-selected="false">{tabs?.listingmainTabs?.headingTab3?.value}</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link" } id="pills-erpcrm-tab" data-bs-toggle="pill" data-bs-target="#pills-erpcrm" type="button" role="tab" aria-controls="pills-erpcrm" aria-selected="false">{tabs?.listingmainTabs?.headingTab4?.value}</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link" } id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="false">{tabs?.listingmainTabs?.headingTab5?.value}</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className={styles["button-tabs"] + " nav-link" } id="pills-dai-tab" data-bs-toggle="pill" data-bs-target="#pills-dai" type="button" role="tab" aria-controls="pills-dai" aria-selected="false">{tabs?.listingmainTabs?.headingTab6?.value}</button>
      </li>
    </ul>
    
<div className={styles.tabSticky + " tab-content" } id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-ias" role="tabpanel" aria-labelledby="pills-ias-tab"> 
   <ExpertiseComp1 comp1={tab1comp1}/>
   {/* <ExpertiseComp6 comp1={tab1comp1}/> */}
    {/* <ExpertiseComp5 comp2={tab1comp2}/>  */}
   {/* <ExpertiseComp3/>  */}
   <ExpertiseComp2 comp2={tab1comp2}/>
   <ExpertiseTab comp3={tab1comp3}/>

   <ExpertiseComp4 comp4={tab1comp4}/> 
   <ExpertiseComp4 comp4={tab1comp5}/> 
  </div>
  <div className="tab-pane fade" id="pills-infra" role="tabpanel" aria-labelledby="pills-profile-tab"> 
  <ExpertiseComp1 comp1={tab2comp1}/>
  <ExpertiseComp2 comp2={tab2comp2}/>
   <ExpertiseTab comp3={tab2comp3}/>
   <ExpertiseComp4 comp4={tab2comp4}/> 
   <ExpertiseComp4 comp4={tab2comp5}/> 

  
  </div>
  <div className="tab-pane fade" id="pills-ms" role="tabpanel" aria-labelledby="pills-contact-tab"> 
  <ExpertiseComp1 comp1={tab3comp1}/>

  <ExpertiseComp2 comp2={tab3comp2}/>
   <ExpertiseTab comp3={tab3comp3}/>
   <ExpertiseComp4 comp4={tab3comp4}/> 
   <ExpertiseComp4 comp4={tab3comp5}/> 

  
  
  </div>
  <div className="tab-pane fade" id="pills-erpcrm" role="tabpanel" aria-labelledby="pills-profile-tab">
     <ExpertiseComp1 comp1={tab4comp1}/>
     
  <ExpertiseComp2 comp2={tab4comp2}/>
   <ExpertiseTab comp3={tab4comp3}/>

   <ExpertiseComp4 comp4={tab4comp4}/> 
   <ExpertiseComp4 comp4={tab4comp5}/> 

  
     </div>
  <div className="tab-pane fade" id="pills-security" role="tabpanel" aria-labelledby="pills-contact-tab">
     <ExpertiseComp1 comp1={tab5comp1}/>
     <ExpertiseComp2 comp2={tab5comp2}/>
   <ExpertiseTab comp3={tab5comp3}/>

   <ExpertiseComp4 comp4={tab5comp4}/> 
   <ExpertiseComp4 comp4={tab5comp5}/> 
  
     </div>
  <div className="tab-pane fade" id="pills-dai" role="tabpanel" aria-labelledby="pills-contact-tab">
    <ExpertiseComp1 comp1={tab6comp1}/>
    <ExpertiseComp2 comp2={tab6comp2}/>
   <ExpertiseTab comp3={tab6comp3}/>

   <ExpertiseComp4 comp4={tab6comp4}/> 
   <ExpertiseComp4 comp4={tab6comp5}/> 
    </div>
</div>
   </div>
   </div>
   </div>
  )
}

export default ExpertiseBlock;

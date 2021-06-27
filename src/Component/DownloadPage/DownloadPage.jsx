import React from 'react'
import style from './DownloadPage.module.css'
import Step from '../PagesTest/Step/Step'
import { connect } from 'react-redux'
import { getActiveStep } from '../../Redux/page-reducer'
import SimpleSlider from './SimpleSlider'


const DownloadPage = (props) => {

   return <div className={style.downloadPage}>
      <div className={style.pageContainer}>
         <div className={style.pageInfo}>
            <Step listInterview={props.listInterview} activeStep={props.activeStep} />
            <div className={style.info}>
               <h2>Let’s make the planet green again!</h2>
               <ul className={style.items} >
                  <li>Identify 99% of the world's plants & trees</li>
                  <li>Diagnose your plant’s health</li>
                  <li>Daily tasks to take care of the plant</li>
                  <li>Grow tips</li>
               </ul>
            </div>
         </div>
         <SimpleSlider items={props.items} />
      <button className={style.button} >Continue to the App</button>
      <div className={style.link}>
      <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a>
      </div>
      </div>
   </div>
}

const mapStateToProps = (state) => ({
   listInterview: state.page.listInterview,
   activeStep: state.page.activeStep,
   items: state.page.items
})

export default connect(mapStateToProps, { getActiveStep })(DownloadPage)
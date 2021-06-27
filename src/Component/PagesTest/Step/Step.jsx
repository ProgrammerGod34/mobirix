import React from 'react'
import style from '../PagesTest.module.css'

const Step = (props) => {
   const steps = props.listInterview.map(item => {

      return <div key={item.id} className={style.progressItem}>
         <div className={`${style.circle} ${props.activeStep === item.id
            ? style.activeStep
            : ''} ${props.activeStep > item.id
               ? style.toActiveStep
               : ''}`}>{!(props.activeStep > item.id) ? item.id : ''}</div>
         <div className={`${style.progress} ${props.activeStep === item.id
            ? style.activeProgress
            : ''} ${props.activeStep > item.id
               ? style.toActive
               : ''}`}></div>
      </div>
   })

   return <div className={style.progressbar}>
      <div className={style.progressItem} >
         <div className={`${style.circle} ${style.toActiveStepProgress}`}></div>
         <div className={style.progress}></div>
      </div>
      {steps}
      <div className={style.progressItem} >
         <div className={`${style.circle} ${props.activeStep === props.listInterview.length + 1
            ? style.activeStep
            : ''}`}>{props.listInterview.length + 1}</div>
         <div className={`${style.progress} ${props.activeStep === props.listInterview.length + 1
            ? style.activeProgress
            : ''}`}></div>
      </div>
   </div>

}

export default Step;
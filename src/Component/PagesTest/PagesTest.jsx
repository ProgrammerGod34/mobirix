import React from 'react'
import style from './PagesTest.module.css'
import Step from './Step/Step'
import data from '../../data.json'
import {connect} from 'react-redux'
import {getInterview, getActiveStep} from '../../Redux/page-reducer'
import { useHistory } from "react-router-dom";



let  PagesTest = (props) => {

  const history = useHistory();

  React.useEffect(() => {
    props.getInterview(data)
    console.log(data)
  }, [data])

  const [activeStep, setActiveStep] = React.useState(1);
  const [activeVariant, setActiveVariant] = React.useState(null)

  

  const handleRememberResult = (number) => {
    setActiveVariant(number)
  };

  const content = props.listInterview.map(item => <div className={style.content} key={item.id}>
    <h2>{item.question}</h2>
    {item.variants.map(variant => <button
      onClick={() => handleRememberResult(item.variants.indexOf(variant))}
      className={`${style.variant}
     ${item.variants.indexOf(variant) === activeVariant ? style.activeVariant : ''}`}
      key={item.variants.indexOf(variant)}>{variant}</button>)}
  </div>)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveVariant(null)
    if(activeStep === props.listInterview.length) {
      history.push("/downloadpage");
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveVariant(null);
  };


  return (
    <div className={style.page}>

      <div className={style.pageContainer}>
        <div>
          <Step listInterview={props.listInterview} activeStep={activeStep} />
          {content[activeStep - 1]}
        </div>

        <div className={style.buttongroup}>
          <button onClick={handleBack} disabled={activeStep === props.listInterview.length - props.listInterview.length + 1}>Back</button>
          <button onClick={handleNext} disabled={activeStep === props.listInterview.length + 1 || activeVariant == null}>Next</button>
        </div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => ({
    listInterview: state.page.listInterview
})

export default connect(mapStateToProps, {getInterview, getActiveStep})(PagesTest)

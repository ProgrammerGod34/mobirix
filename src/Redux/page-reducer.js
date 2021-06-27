import data from '../data.json'
import man1 from '../assets/img/man1.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.png'

const GET_INTERVIEW = 'GET_INTERVIEW';
const GET_ACTIVESTEP = 'GET_ACTIVESTEP';

export const getInterview = (interview) => ({type: GET_INTERVIEW, interview})
export const getActiveStep = (activeStep) => ({type: GET_ACTIVESTEP, activeStep})

let initialState = {
   listInterview: data,
   activeStep: data.length + 1,
   items: [
       {
           id: 1,
           img: man1, 
       text: 'A really efficient way to make identify your plants. Recently Moz bed house and needed to identifying fy what was growing',
       name: 'Michael Strickland'
        },
       {
           id: 2,
           img: man2, 
       text: 'This app is amazing! You can easily take pictures of any plant or tree, and it will give you the closest plants to it. I think it gets it correct 95% of the time!',
       name: 'Jess Glynne'
        },
       {
           id: 3,
           img: man3, 
       text: 'PLNT is fantastic and does exactly as advertised better than anyone else on the market. I would like to see a map feature added ASAP.',
       name: 'Melisse Ricards'
        },
       {
           id: 1,
           img: man1, 
       text: 'A really efficient way to make identify your plants. Recently Moz bed house and needed to identifying fy what was growing',
       name: 'Michael Strickland'
        },
       {
           id: 2,
           img: man2, 
       text: 'This app is amazing! You can easily take pictures of any plant or tree, and it will give you the closest plants to it. I think it gets it correct 95% of the time!',
       name: 'Jess Glynne'
        },
       {
           id: 3,
           img: man3, 
       text: 'PLNT is fantastic and does exactly as advertised better than anyone else on the market. I would like to see a map feature added ASAP.',
       name: 'Melisse Ricards'
        }
   ]
}

const pageReducer = (state = initialState, action) => {
   switch (action.type) {

      case GET_INTERVIEW: {
          return {
              ...state,
              listInterview: action.interview
          }
      }

      case GET_ACTIVESTEP: {
          return {
              ...state,
              activeStep: action.activeStep
          }
      }
      default: return state;
  }
}

export default pageReducer
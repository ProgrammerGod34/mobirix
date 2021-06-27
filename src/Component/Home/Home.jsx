import React from 'react'
import style from './Home.module.css'
import { useHistory } from "react-router-dom";

const Home = () => {

   const history = useHistory();

return <div className={style.homePage} >
   <div className={style.container}>
<div className={style.content} >
   <h1 className={style.title}>
   We love helping you to safe the plants
   </h1>
<p className={style.description}>
We help realize you dreams in making a garden, lets start with small things that can change the world, so you can enjoy the frsh air forever
</p>
<button onClick={() => history.push("/question")} >Continue</button>
   
</div>
</div>
</div>
}

export default Home
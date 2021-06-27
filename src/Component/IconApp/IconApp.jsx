import React from 'react'
import style from './IconApp.module.css'

const IconApp = () => {
   return (
      <div className={style.app}>
         <div className={style.icon}></div>
         <div className={style.text}><h4>PLNT:</h4><span> Plant & Tree Idenifier </span></div>
      </div>
   )
}

export default IconApp
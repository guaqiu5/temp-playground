import classNames from "classnames"
import * as React from 'react'
import './index.css'
import icon1 from '../../assets/cardIcon1.png'
interface ICard{
    children ?: React.ReactNode;
    className ?: any;
    programName ?: string;
    dayCount ?: number;
    progress ?: string;
    iconType ?: 0;
}

function XyCard(props:ICard){
    const classes = classNames('xy-card',props.className)
    return <div className={classes}>
        <div className="xy-card-programName">Writing Program 21</div>
        <div className="xy-card-dayCount">21 Days</div>
        <div className="xy-card-progress">Well done!!!</div>   
        <div className="xy-card-icon">{
          
              
            }
        </div>
        <div className="xy-card-extra">{props.children}</div>
    </div>
}

export default XyCard
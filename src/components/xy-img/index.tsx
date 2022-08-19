import classNames from "classnames"
import * as React from 'react'
import './index.css'
interface IImg{
    className ?: any;
    src : any;
    children ?: React.ReactNode
}

function XyImg(props:IImg){
    const classes = classNames(props.className,'xy-img')
    return <div className={classes}>
    <img src={props.src}  className={classes} />
    {props.children}
    </div>
}

export default XyImg
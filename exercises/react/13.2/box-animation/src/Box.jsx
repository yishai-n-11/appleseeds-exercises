import { useEffect, useRef, useState } from 'react';
import './Box.css'

export default function Box({size}) {
    const box = useRef(null)
    useEffect(()=>{
        setTimeout(()=>{
            box.current.classList.add('inPlace')
        },4000)
    },[])
    return <div className={`box box-${size}`} ref={box}>this box is size {size}</div>
}
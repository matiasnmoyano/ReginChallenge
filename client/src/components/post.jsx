import React, {useEffect} from 'react'
import Axios from 'axios'
import '../App.css'
export default function Post ({title, atuhor, date}) {
    return (
      <a href='#' className='posts'>
      <div className='post'>
      <p className='post-title'>WordPress 43 will be rewritten in Node.js<span className='post-creator'>creador</span></p>
      <p className='post-date'>created_at</p>
      </div>
      </a>
    )
}
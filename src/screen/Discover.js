import React,{useEffect} from 'react'


function Discover() {
    useEffect(() => {
        document.title='discover'
    })
    return (
        <div className='discover'>
           <h1 className='fontb aic s25 orange title'>disc<span className='black'>over</span> </h1>
        </div>
    )
}

export default Discover

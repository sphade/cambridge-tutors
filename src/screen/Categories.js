import React,{useEffect} from 'react'


function Categories() {
    useEffect(() => {
        document.title='categories'
    })
    return (
        <div className='categories'>
           <h1 className='fontb aic s25 orange title'>catego<span className='black'>ries</span> </h1>
        </div>
    )
}

export default Categories

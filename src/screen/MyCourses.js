import React, {useEffect} from 'react'


function MyCourses() {
    useEffect(() => {
        document.title='my courses'
    })
    return (
        <div className='my-courses'>
           <h1 className='fontb aic s25 orange title'>my<span className='black'>courses</span> </h1>
        </div>
    )
}

export default MyCourses

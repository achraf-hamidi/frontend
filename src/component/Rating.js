import React from 'react'

function Rating({va,text,color}) {
    console.log(text)

    return (
        <div calssName= "rating" >

            
            
             <span>
                <i style = {{color}} className={
                    
                    va >=1 ? "fas fa-star" : va == 0.5 ?"fas fa-star-helf-alt" :'fas fa-star'
                }></i>
            </span> 
           
              <span>
                <i style = {{color}} className={
                    va >=2 ? 'fas fa-star': va ==1.5
                        ? 'fas fa-star-half-alt'
                        :'far fa-star'
                }>

                </i>
                </span> 
          
            <span>
                <i style = {{color}} className={
                    va >=3
                    ? 'fas fa-star'
                    : va >=2.5
                        ? 'fas fa-star-half-alt'
                        :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style={{color}} className={
                    va >=4
                    ? 'fas fa-star -helf-alt'
                    : va >=3.5
                        ? 'fas fa-star-half-alt'
                        :'far fa-star'
                }>

                </i>
            </span>
            <span>
                <i style = {{color}} className={
                    va >=5
                    ? 'fas fa-star'
                    : va >=4.5
                        ? 'fas fa-star-half-alt'
                        :'far fa-star'
                }>

                </i>
            </span> 
              <span>{text && text}</span>  
        </div>
    )
}

export default Rating
 
import React, { useState } from 'react';

const Rating = (props) => {
    const [isHovered , setIsHovered] = useState(false);

    const handleHover =()=>{
        setIsHovered(true);
    }
    const handleHoverOut =()=>{
        setIsHovered(false);
    }

    const getClassName = () =>{
        const { isRated } = props;
        const { isHovered } = props;
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary" : "";
        return className; 

    }

    return ( 
        <i 
        onMouseOver={handleHover}
        className={getClassName()}
        onMouseOut={handleHoverOut}
        onClick={()=> props.handleToggleRating(props.rank)}
        >
    </i>
     );
}
 
export default Rating;

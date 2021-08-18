import React from 'react'
import './ExpandImage.css'
// images
// import tempOne from '../../../../images/resumeTemp/tempOne.png'
// import tempTwo from '../../../../images/resumeTemp/tempTwo.png'
// import tempThree from '../../../../images/resumeTemp/tempThree.png'

const  ExpandImage = (props) => {
    const { data } = props;
    
    return (
        <div>
                <div className = "image-expand">
                </div>
                <div className = "image-background">
                    <img 
                        alt = "imageExpand"
                        src = {data.imageNum}
                        className = "image-center"
                        >
                    </img>
                </div>
        </div>
    )
}

export default ExpandImage
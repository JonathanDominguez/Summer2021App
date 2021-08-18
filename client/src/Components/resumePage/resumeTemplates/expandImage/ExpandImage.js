import React from 'react'
import './ExpandImage.css'

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
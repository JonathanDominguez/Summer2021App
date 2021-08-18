import React, { useState } from 'react'
import './Feed.css'
// Fake resume image
import ImageResume from '../../../images/resumeTemp/tempOne.png'

const Feed = () => {
    // FAKE DATA FOR NOW
    const data = [
        { name: "John Doe", job: "web developer", tags: ["React", "JavaScript"] },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
        { name: "Victor Wayne", job: "web developer" },
    ];

    return (
        <div className="main-feed-block">
            {data.map((user) => (
                <div className="user-block">
                    {/* Header */}
                    <div className = "feed-header">
                        {/* Circle image */}
                        <div className="profiler-header">
                            {/* <img className="facebook" alt=""></img> */}
                        </div>
                        <div className = "info-header">
                            <p>{user.name}</p>
                            <p>{user.job}</p>
                        </div>
                    </div>
                    <hr/>
                    {/* Resume Image */}
                    <div className = "resume-header">
                        <div className = "image-contain">
                            <img src = {ImageResume} alt="" className = "resume-img-container"/>
                        </div>
                    </div>
                    {/* Tags */}
                    <hr/>
                    <div className = "tags-headers">
                        <p>{user.tags + " "}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Feed;
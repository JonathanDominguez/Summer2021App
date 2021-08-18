import React from 'react'
import './Feed.css'

const Feed = () => {

    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "Jane Doe" },
        { id: 5, name: "Jane Doe" },
        { id: 6, name: "Jane Doe" },
        { id: 7, name: "Jane Doe" },
        { id: 8, name: "Jane Doe" },
        { id: 9, name: "Jane Doe" },
        { id: 10, name: "Jane Doe" },
        { id: 11, name: "Jane Doe" },
        { id: 12, name: "Jane Doe" },
        { id: 13, name: "Jane Doe" },

    ];
    
    return (
        <div>
            <p>FEED</p>
            <div className="main-feed-block">
                {data.map((user) => (
                    <div className="user">
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed
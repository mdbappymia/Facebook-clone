import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import Post from './Post'
import MessageSender from './MessageSender'
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            username="Bappy Mia"
            profilePic=" https://avatars.githubusercontent.com/u/61800469?s=60&v=4"
            message='hello'
            timestamp='Time'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEBidXJ5mN9Op3tnMMrrSzZw7uszRZl__Vw&usqp=CAU'
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed

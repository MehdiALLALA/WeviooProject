import React from 'react'
import PostCard from './PostCard'


function Post() {

  return (
    <>
    <h1>
        List Of Posts
    </h1>
    <div class="grid">
        <div class="md:col-6 lg:col-4">
            <PostCard/>
        </div>
        <div class="md:col-6 lg:col-4">
            <PostCard/>
        </div>
        <div class="md:col-6 lg:col-4">
            <PostCard/>
        </div>
    </div>

    </>
  )
}

export default Post
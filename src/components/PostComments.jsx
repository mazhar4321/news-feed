import React, { useState } from 'react'
import Avatar from './Avatar'

import EmojiPicker from './EmojiPicker';

function PostComments({post, setPost }) {
    
  return (
    <div className='flex gap-2'>
             <div>
              <Avatar/>
             </div>
             <div className='grow  rounded-full relative'>
             <textarea value={post} onChange={(e)=>setPost(e.target.value)} className='p-3 w-full relative rounded-full border px-4 h-12 overflow-hidden' placeholder='Enter Something here'>
             </textarea>
             <div className='absolute right-2 top-3 z-50'>
             <EmojiPicker setPost={setPost}/>
            </div>
           
            </div>
            </div>
  )
}

export default PostComments
import React, { useEffect, useState } from 'react'
import Post from '../services/Post';
import Avatar from './Avatar'
import Card from './Card'
import EmojiPicker from './EmojiPicker';
import PostComments from './PostComments';
import UpdateComment from './UpdateComment';


function PostFormData({comments,replies, deleteComment,parentId = null, activeComments, setActiveComments,addComments,UpdateComments}) {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const [likes , setLikes] = useState(0)
 
    const [post, setPost] = useState('')
    console.log(replies)
    const handleSubmit = (e)=>{
        e.preventDefault()
           addComments(post, replyId)
           setPost('')
           console.log(post)
          
    }
   

   
    // const isReplying = activeComments && activeComments.type === "replying" && activeComments.id === comments.id;
    const isEditing = activeComments && activeComments.type === "editing" && activeComments.id === comments.id;
    const replyId = parentId ? parentId : comments.id
  return (
    <>
    <Card>
        <div className='flex gap-3'>
          <div>
          <Avatar/>
          </div>
          <div className='grow'>
            <p className='font-semibold'>{comments.username}</p>
            <p className='text-gray-500 text-sm'>{comments.createdAt}</p>
          </div>
          <div className=''>
            <button onClick={()=>setDisplayDropdown(!displayDropdown)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

            </button>
            <div className='relative flex gap-2'>
                {displayDropdown && (
                    <div className='absolute right-0 border border-gray-100 w-52 bh-white shadow-md shadow-gray-300 p-3 rounded-sm'>
                        <button className='flex gap-2 text-gray-500' onClick={()=> setActiveComments({id:comments.id, type:"editing"})}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

                            Edit Post</button>
                        <button onClick={()=> deleteComment(comments.id)} className='flex gap-2 text-gray-500' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                            Delete Post</button>
                        </div>
                )}
            </div>
          </div>
        </div>
        
        <div>
            {!isEditing && (
                <p className='my-3 text-sm text-gray500'>
         {comments.body}
          </p>
            )}
            {isEditing && (
                <UpdateComment handleSubmit={text => UpdateComments(text,comments.id) } initialState={comments.body}/>
            )}
          
        </div>
        <div className='flex gap-6 mt-5'> 
               <button onClick={()=> setLikes(comments.noOfLikes = comments.noOfLikes + 1)} className='flex gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
{comments.noOfLikes}
               </button>
               <button className='flex gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
{replies.length}
               </button>
               <button className='flex gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
0
               </button>
        </div>
          {replies.length > 0 && (
              <div className=''>
              { replies.map((reply)=>(
                 <div className='flex gap-3  items-center'>
              <div>
                 <Avatar/>
              </div>
              <div className='grow border rounded-full my-3 items-center'>
                 <div className=''>
                <div className='relative items-center block w-full rounded-full p-4 px-8 bg-gray-200 overflow-hidden' key={comments.id}>{reply.body}
                <button onClick={()=> deleteComment(reply.id)} className=' absolute right-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </button>
                </div> 
                </div>
                
              </div>
              
              </div>
             ))}
             </div>
          )}
        


        <form onSubmit={handleSubmit}>
         
             <div className='flex gap-3 mt-4 items-center'>
               
            <div>
                <Avatar/>
            </div>
           
            <div className='grow border rounded-full relative'>
                <textarea value={post} onChange={(e)=> setPost(e.target.value)} className='h-12 block w-full rounded-full p-3 px-4 overflow-hidden' placeholder='Enter Comments'></textarea>
            <button onSubmit={handleSubmit} className='absolute top-3 right-3 text-gray-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>


            </button>
            <div className='absolute top-3 right-12'>
                <EmojiPicker setPost={setPost}/>
            </div>
            </div>
            
        </div> 
        </form>
    
        
      </Card>
        
      </>
  )
}

export default PostFormData
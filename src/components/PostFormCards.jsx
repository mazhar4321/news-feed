import React, { useEffect, useState } from 'react'
import { createComment, getComments } from '../services/Post'
import Avatar from './Avatar'
import Card from './Card'
import PostFormData from './PostFormData'

import PostComments from './PostComments'
import SocialActivities from './SocialActivities'

function PostFormCards() {
    const [post, setPost] = useState('')
    const [backendComments , setBackendComments] = useState([])
    const [activeComments, setActiveComments] = useState(null)


   
    
    const rootComments = backendComments.filter((backendComment)=> backendComment.parentId === null)
    const getReplies = commentId =>{
        return backendComments.filter((backendComment)=> backendComment.parentId === commentId)
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
           addComments(post)
           setPost('')
          
    }
    const addComments = (text,parentId)=>{
        createComment(text,parentId).then(comment =>{
            setBackendComments([comment, ...backendComments])
        })
    }
    const deleteComments = (commentId)=>{
         console.log(commentId)
         const updatedComment = backendComments.filter((backendComment) => backendComment.id !== commentId)
         setBackendComments(updatedComment)
    }
    const UpdateComment = (text ,commentId)=>{
        console.log(text)
        const updatedComments = backendComments.map((backendComment)=>{
            if(backendComment.id === commentId){
                return { ...backendComment, body:text}
            }
            return backendComment
        })
        setBackendComments(updatedComments)
        setActiveComments(null)
      }
    useEffect(()=>{
        getComments().then((data)=>{
            setBackendComments(data)
        })
    },[])
  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit}>
            <PostComments post={post} setPost={setPost}/>
            <SocialActivities handleSubmit={handleSubmit}/>
            </form>
        </Card>
        {rootComments.map((rootcomment)=>(
            <PostFormData UpdateComments={UpdateComment} deleteComments={deleteComments} handleSubmit={handleSubmit} addComments={addComments} activeComments={activeComments} setActiveComments={setActiveComments}  deleteComment={deleteComments} key={rootcomment.id} comments={rootcomment} replies={getReplies(rootcomment.id)}/>
        ))}
    </div>
  )
}

export default PostFormCards
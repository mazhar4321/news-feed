export const getComments =async ()=>{
    return [
        {
            id:"1",
            body:"First Comments",
            username:"mazhar",
            userId:"1",
            noOfLikes: 0,
            parentId: null,
            createdAt:"2021-08-"
        },
        {
            id:"2",
            body:"second Comments",
            username:"mazhar",
            userId:"1",
            noOfLikes:0,
            parentId: null,
            createdAt:"2021-08-"
        },
        {
            id:"3",
            body:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            username:"mazhar",
            userId:"1",
            parentId: "1",
            createdAt:"2021-08"
        },
        {
            id:"4",
            body:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            username:"mazhar",
            userId:"1",
            parentId: "2",
            createdAt:"2021-08"
        }
    ]
}

export const createComment = async(text,parentId = null)=>{
    return{
        id: Math.random().toString(36).substring(2,9),
        body:text,
        parentId,
        userId:"1",
        noOfLikes:0,
        username:"mazhar",
        createdAt: new Date().toISOString()
    }
}
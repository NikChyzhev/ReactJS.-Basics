import React from "react";

const Post = ({data}) => {
    const {PostAuthor, content, image, date} = data;    
    const stylePost = {
        backgroundColor: 'gray',
        border: '3px solid orange',
        margin: '15px auto',
        height: '300px',
        width: '400px'                
    };
    const styleHead = {
        border: '1px solid gray',
        margin: '5px auto',
        height: '80px',
        width: '400px',      
        display: 'flex',        
    };
    const styleImgIcon = {
        maxWidth:"40px", 
        height:"auto", 
        position: "absolute"
    };
    const styleHeadText = {
        maxWidth:"300px", 
        height:"auto", 
        padding: "0 0 0 50px"
    };
    const styleImgPost = {
        display: 'block',
        height: '70%',                 
        backgroundImage: `url(${image})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundPositionX: 'center',
        objectFit: 'contain'
        }

    return (
        <div style={stylePost}>  
            <div style={styleHead}>                
                <div>
                    <img src= {PostAuthor.photo} style = {styleImgIcon}/>
                </div>
                <div style={styleHeadText}>
                    {`${PostAuthor.name}  ${PostAuthor.nickname}  ${date}`}
                    <p style={{fontSize: '13px'}}>
                        {content}
                    </p>
                </div>
            </div>
            <div style = {styleImgPost}/>
        </div>
    )
}

export default Post;
import React from "react";

const MakePost = ({data}) => {
    const {PostAuthor, content, image, date} = data;
    console.log(PostAuthor);
    const stylePost = {
        backgroundColor: 'gray',
        border: '3px solid orange',
        margin: '15px',
        height: '300px',
        width: '400px',
        margin: 'auto'        
    }
    const styleHead = {
        border: '1px solid gray',
        margin: '5px',
        height: '80px',
        width: '400px',
        margin: 'auto',
        display: 'flex',
        // flexDirection: 'column'
    }

    return (
        <div style={stylePost}>  
            <div style={styleHead}>                
                <div>
                    <img src= {PostAuthor.photo} style = {{maxWidth:"40px", height:"auto", position: "absolute"}}/>
                </div>
                <div style={{maxWidth:"300px", height:"auto", padding: "0 0 0 50px"}}>
                    {`${PostAuthor.name}  ${PostAuthor.nickname}  ${date}`}
                    <p style={{fontSize: '13px'}}>
                        {content}
                    </p>
                </div>
            </div>
            <div style = {{
                display: 'block',
                height: '70%',                 
                backgroundImage: `url(${image})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPositionX: 'center',
                objectFit: 'contain'
                }}/>
        </div>
    )
}

export default MakePost;
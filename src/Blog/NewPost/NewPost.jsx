import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewPost() {
    const [state, setState] = useState({
        title: '',
        blog: ''
    });

    async function createPost(e) {
        e.preventDefault();
        const id = localStorage.getItem('UserId');
        const token = localStorage.getItem('token');
        
        try {
            const response = await axios.post(
                'http://localhost:4000/posts',
                state, // Pass state directly as the data object
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => createPost(e)}  style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'20px',background:'teal',width:'30%',margin:'50px auto'}}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={state.title}
                        onChange={(e) =>
                            setState({ ...state, title: e.target.value })
                        }
                    />
                    <label htmlFor="paragraph" style={{color:'white'}}>Enter your paragraph:</label>
                    <textarea id="paragraph" name="paragraph" rows="4" cols="50" placeholder="Blog"value={state.blog} onChange={(e) =>setState({ ...state, blog: e.target.value })}></textarea>
                  
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

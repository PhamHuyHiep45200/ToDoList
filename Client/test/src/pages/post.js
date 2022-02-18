import React,{useState,useEffect,useRef} from 'react'
import './post.scss'
import {getPost,postPost} from '../api/post'
import {deletePost} from '../api/delete'
import {ToolOutlined,DeleteOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

function Post() {
    const ipName=useRef()
    const [posts,setPosts]=useState([])
    const [img,setImg]=useState()
    const [valueInput,setValueInput]=useState({
        name:'',
        age: 0,
        userName:'',
    })

    useEffect(() => {
        const getPosts = async ()=>{
            const {success,data}= await getPost()
            if(success) {
                setPosts(data.data)
            }
        }
        
        return getPosts()
            // img&&URL.revokeObjectURL(img)
        
        
    }, [img])

    
    const handleOnChange=(e)=>{
        setValueInput({...valueInput,[e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const {success}= await postPost(valueInput.name,valueInput.age,valueInput.userName)
        if(success) {
            setPosts([...posts,valueInput])
            alert("them thanh cong")
            setValueInput({
                name:'',
                age:0,
                userName:''
            })
            ipName.current.focus()
        }
    }
    const handleDelete= async (id)=>{
        const {success}=await deletePost(id)
        if(success) {
            alert("Xóa thanh cong")
        }
    }
    const handleOnChangeImg=(e)=>{
        setImg(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="containerIp">
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="name" 
                        placeholder="Họ tên"
                        onChange={handleOnChange}
                        value={valueInput.name}
                        ref={ipName}
                    />
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="age" 
                        placeholder="tuổi"
                        onChange={handleOnChange}
                        value={valueInput.age}
                    />
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="userName" 
                        placeholder="Tài khoản"
                        onChange={handleOnChange}
                        value={valueInput.userName}
                    />
                    <input 
                        type="file"
                        name="img"
                        onChange={(e)=>{handleOnChangeImg(e)}}
                    />
                    {img && <img src={img} alt="" style={{ width:100,height:100 }}/>}
                </div>
                <button type="submit" className="btn">Thêm</button>
            </form>
            <ul className="list">
                {posts.map((post,index)=>{
                    return (
                        <li key={index} className="list_item">
                            <p className="list_item_text">
                                {post.name}-{post.age}-{post.userName} | 
                                <Link to={`/update/${post._id}`}><ToolOutlined/></Link>
                                <DeleteOutlined onClick={()=>{handleDelete(post._id)}}/>
                            </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Post

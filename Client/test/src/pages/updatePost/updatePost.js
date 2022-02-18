import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {getIdUpdate,updatePost} from '../../api/updatePost'


function UpdatePost(props) {
    const id= useParams()
    const [dataId,setDataId]=useState({})
    const [valueInput,setValueInput]=useState({
        name:dataId.name,
        age: dataId.age,
        userName:dataId.userName,
    })
    const naviGrate=useNavigate()

    useEffect(() => {
        const updateId= async (id)=>{
            const {success,data}= await getIdUpdate(id) 
            if(success) {
                setDataId(data.data)
            }
        }
        return updateId(id.id)
    }, [id])

    const handleOnChangeUpDate=(e)=>{
        setValueInput({...valueInput,[e.target.name]:e.target.value})
    }
    const handleUpdate = async (e)=>{
        e.preventDefault()
        const {success}= await updatePost(dataId._id,valueInput.name,valueInput.age,valueInput.userName)
        if(success) {
            alert('update success')
            naviGrate('/')
        }
    }

    return (
        <form onSubmit={handleUpdate}>
                <div className="containerIp">
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="name" 
                        placeholder="Họ tên"
                        onChange={handleOnChangeUpDate}
                        defaultValue={dataId.name}
                    />
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="age" 
                        placeholder="tuổi"
                        onChange={handleOnChangeUpDate}
                        defaultValue={dataId.age}
                    />
                    <input 
                        className="containerIp_inputName" 
                        type="text"
                        name="userName" 
                        placeholder="Tài khoản"
                        onChange={handleOnChangeUpDate}
                        defaultValue={dataId.userName}
                    />
                </div>
                <button type="submit" className="btn">Update</button>
            </form>
    )
}

export default UpdatePost

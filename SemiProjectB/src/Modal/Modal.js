import React,{useState} from "react";
import axios from 'axios';
const Modal = ({closeModal,Props,setnodeState}) => {

    const [newState, setnewState] = useState(Props)
    const handleChangeState  = (e) => {
        
        setnewState({
            ...newState,
            [e.target.name]: e.target.value
        });
        
        
    }
    const [Edit,setEdit] = useState(false);
    const startEdit = () =>{
        setEdit(!Edit);
    }

    const startSumbit = (e) => {
        
        console.log(e)
        
        axios.post('http://localhost:8000/api/modal/qwercc',newState)
        console.log(newState)
        
        startEdit();
    }
    const EditMode = () =>{
        if(Edit===false){
            return (
            <div>
            <ul>

                <li>in_channel : {newState.in_channel}</li>
                <li>out_channel : {newState.out_channel}</li>
                <li>kernel_size : {newState.kernel_size}</li>
                <li>stride : {newState.stride}</li>
                <li>padding : {newState.padding}</li>

            </ul>
            <button className="CloseButton" onClick={closeModal}>Close</button>
            <button className="EditButton" onClick={startEdit}>Edit</button>
            </div>
            );
        }
        else{
            return (
            
            <div>
            <ul>
                <li>in_channel : <input name="in_channel" type="text" onChange={handleChangeState} placeholder={newState.in_channel}/></li>
                <li>out_channel : <input name="out_channel" onChange={handleChangeState} placeholder={newState.out_channel}/></li>
                <li>kernel_size : <input name="kernel_size" onChange={handleChangeState} placeholder={newState.kernel_size}/></li>
                <li>stride : <input name="stride" onChange={handleChangeState} placeholder={newState.stride}/></li>
                <li>padding : <input name="padding" onChange={handleChangeState} placeholder={newState.padding}/></li>
            </ul>
            <button  type="button" className="CloseButton" onClick={closeModal}>Close</button>
            <button type="submit" className="EditButton" onClick={startSumbit}>Save</button>
            </div>
            
            
            )
        }
    }

    return (
        <div className="Modal">
            <h4>{Props.layerName}</h4>
            
            
            <EditMode/>
            
            
            
        </div>
    )
}

export default Modal;
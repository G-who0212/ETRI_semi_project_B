import React,{useState,useCallback} from "react";
import axios from 'axios';
import NoEditModal from './noEditModal';
import YesEditModal from "./yesEditModal";


const Modal = ({closeModal,Props}) => {
    console.log('new loading');
    
    const [newState,setnewState] = useState(Props)

    const handleChangeState  = (e) => {
        
        setnewState({
            ...newState,
            [e.target.name]: e.target.value
        })
    
    };

   
    const [Edit,setEdit] = useState(false);
    const startEdit = () =>{
        setEdit(!Edit);
    }

    const startSumbit = (e) => {
        
        console.log(e)
        
        axios.post('http://localhost:8000/api/modal/qweree',newState)
        console.log(newState)
        
        startEdit();
    }

    return (
        <div className="Modal">
            <h4>{newState.layerName}</h4>
            
            <div>
            {Edit?<YesEditModal newState={newState} handleChangeState={handleChangeState} closeModal={closeModal} startSumbit={startSumbit} />:<NoEditModal newState={newState} closeModal={closeModal} startEdit={startEdit}/>}
            </div>
            
            
        </div>
    )
}

export default Modal;
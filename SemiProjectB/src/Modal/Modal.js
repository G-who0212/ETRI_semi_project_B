import React,{useState} from "react";

const Modal = ({closeModal,Props}) => {

    const [Edit,setEdit] = useState(false);
    const startEdit = () =>{
        setEdit(!Edit);
    }    
    const EditMode = () =>{
        if(Edit===false){
            return (
            <div>
            <ul>
                <li>in_channel : {Props.in_channel}</li>
                <li>out_channel : {Props.out_channel}</li>
                <li>kernel_size : {Props.kernel_size}</li>
                <li>stride : {Props.stride}</li>
                <li>padding : {Props.padding}</li>
                
            </ul>
            <button className="CloseButton" onClick={closeModal}>Close</button>
            <button className="EditButton" onClick={startEdit}>Edit</button>
            </div>
            );
        }
        else{
            return (
            <form>
            <ul>
                <li>in_channel : <input type="text" value={Props.in_channel}/></li>
                <li>out_channel : <input value={Props.out_channel}/></li>
                <li>kernel_size : <input value={Props.kernel_size}/></li>
                <li>stride : <input value={Props.stride}/></li>
                <li>padding : <input value={Props.padding}/></li>
            </ul>
            <button className="CloseButton" onClick={closeModal}>Close</button>
            <button type="submit" className="EditButton" onClick={startEdit}>Save</button>
            </form>
            
            
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
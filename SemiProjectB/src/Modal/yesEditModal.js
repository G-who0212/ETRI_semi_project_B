
const YesEditModal =({newState,closeModal,handleChangeState,startSumbit}) => {

    return (
        <div>
            <ul>
                <li>in_channel : <input name="in_channel" type="text" onChange={handleChangeState} placeholder={newState.in_channel}/></li>
                <li>out_channel : <input name="out_channel" type="text" onChange={handleChangeState} value={newState.out_channel}/></li>
                <li>kernel_size : <input name="kernel_size" type="text" onChange={handleChangeState} value={newState.kernel_size}/></li>
                <li>stride : <input name="stride" type="text" onChange={handleChangeState} value={newState.stride}/></li>
                <li>padding : <input name="padding" type="text" onChange={handleChangeState} value={newState.padding}/></li>
            </ul>
            <button  type="button" className="CloseButton" onClick={closeModal}>Close</button>
            <button type="submit" className="EditButton" onClick={startSumbit}>Save</button>
        </div>
    )

}


export default YesEditModal
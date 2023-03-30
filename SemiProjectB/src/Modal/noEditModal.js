

const NoEditModal =({newState,closeModal,startEdit}) => {

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
    )

}


export default NoEditModal
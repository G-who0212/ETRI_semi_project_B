

const Modal = ({closeModal,Props}) => {

    

    return (
        <div className="Modal">
            <h4>{Props.layerName}</h4>
            <ul>
                <li>in_channel : {Props.in_channel}</li>
                <li>out_channel : {Props.out_channel}</li>
                <li>kernel_size : {Props.kernel_size}</li>
                <li>stride : {Props.stride}</li>
                <li>padding : {Props.padding}</li>
            </ul>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default Modal;
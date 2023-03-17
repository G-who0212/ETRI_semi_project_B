

const Modal = ({closeModal}) => {

    

    return (
        <div className="Modal">
            <h4>modal</h4>
            <ul>
                <li>in_channel : </li>
                <li>out_channel : </li>
                <li>kernel_size : </li>
                <li>stride : </li>
                <li>padding : </li>
            </ul>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default Modal;
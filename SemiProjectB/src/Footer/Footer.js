import Modal from '../Modal/Modal';

const Footer = ({modalState,closeModal,Props,setnodeState}) => {

    return (
        <footer>
            <h3>Layer Information</h3>
            {modalState && <Modal closeModal={closeModal} Props={Props} setnodeState={setnodeState}/>}
        </footer>
    )
}
export default Footer;
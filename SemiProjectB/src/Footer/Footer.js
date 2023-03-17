import Modal from '../Modal/Modal';

const Footer = ({modalState,closeModal}) => {

    return (
        <footer>
            <h3>Layer Information</h3>
            {modalState && <Modal closeModal={closeModal}/>}
        </footer>
    )
}
export default Footer;
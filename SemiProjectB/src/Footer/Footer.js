import Modal from '../Modal/Modal';

const Footer = ({modalState,closeModal,Props}) => {

    return (
        <footer>
            <h3>Layer Information</h3>
            {modalState && <Modal closeModal={closeModal} Props={Props}/>}
        </footer>
    )
}
export default Footer;
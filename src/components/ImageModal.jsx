import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
function CenterModal(props, { children }) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Image src={props.img} />

      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className=" bg-slate-500 border-none"
          variant="danger"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CenterModal;

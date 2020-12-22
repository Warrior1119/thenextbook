import Modal from "react-modal";
import classNames from "classnames";
import IconClose from "../../public/assets/icons/close_icon.svg";
import styles from "./Modal.module.scss";

Modal.setAppElement("#__next");

interface ModalProps extends ReactModal.Props {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  className?: string;
  onClose();
  styles?: Record<string, unknown>;
}

const CustomModal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  children,
  title,
  styles: customStyles,
  className,
  onClose,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={classNames(styles.Overlay, customStyles?.Overlay)}
      bodyOpenClassName={classNames(
        styles.Overlay,
        customStyles?.ModalBodyOpen
      )}
      className={classNames(styles.Modal, className)}
      onRequestClose={onClose}
      closeTimeoutMS={300}
      {...props}
    >
      {title && (
        <div className={classNames(styles.Title, className)}>{title}</div>
      )}
      <div
        className={classNames(styles.Close, customStyles?.Content)}
        onClick={onClose}
      >
        <IconClose />
      </div>
      <div className={classNames(styles.Content, customStyles?.Content)}>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;

import React from "react";
import Modal from "react-modal";
import classNames from "classnames";

import styles from "./SlideModal.module.scss";

Modal.setAppElement("#__next");

interface SlideModal extends ReactModal.Props {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  className?: string;
  onClose();
  styles?: Record<string, unknown>;
}

const SlideModal: React.FunctionComponent<SlideModal> = ({
  isOpen,
  onClose,
  className,
  styles: customStyles,
  children,
  ...props
}) => {
  return (
    <Modal
      {...props}
      isOpen={isOpen}
      overlayClassName={classNames(styles.Overlay, customStyles?.Overlay)}
      bodyOpenClassName={classNames(
        styles.Overlay,
        customStyles?.ModalBodyOpen
      )}
      className={classNames(styles.Modal, className)}
      closeTimeoutMS={500}
      onRequestClose={onClose}
    >
      <div className={classNames(styles.Content, customStyles?.Content)}>
        {children}
      </div>
    </Modal>
  );
};

export default SlideModal;

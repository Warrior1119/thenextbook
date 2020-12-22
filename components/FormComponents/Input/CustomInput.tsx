import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

import styles from "./CustomInput.module.scss";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  formRef: any;
  name: string;
  label?: string;
  error: FieldError;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  id,
  name,
  label,
  formRef,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className={styles.Field}>
      {label && (
        <label htmlFor={id || name} className={styles.Label}>
          {label}
        </label>
      )}
      <div className={styles.InputContainer}>
        <input
          placeholder={placeholder}
          className={styles.Input}
          id={id}
          name={name}
          ref={formRef}
          {...props}
        />
      </div>
      {error?.message && <span className={styles.Error}>{error.message}</span>}
    </div>
  );
};

export default CustomInput;

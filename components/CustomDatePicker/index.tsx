import React from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import classNames from "classnames";

import styles from "./CustomDatePicker.module.scss";

interface DatePicker extends Omit<ReactDatePickerProps, "onChange"> {
  className?: string;
}
const CustomDatePicker: React.FunctionComponent<DatePicker> = ({
  className,
  minDate = null,
  maxDate = null,
  ...props
}) => {
  const classes = classNames(styles.Input, className);
  registerLocale("ko");
  return (
    <div className={styles.Container}>
      <DatePicker
        classNames={classes}
        placeholderText="날짜를 선택해 주세요."
        minDate={minDate}
        maxDate={maxDate}
        {...props}
      />
    </div>
  );
};
export default CustomDatePicker;

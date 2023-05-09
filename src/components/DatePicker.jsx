// import * as React from "react";
// import PropTypes from "prop-types";

// import { useSlotProps } from "@mui/base/utils";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { unstable_useDateField as useDateField } from "@mui/x-date-pickers/DateField";
// import { styles } from "../styles";

// const BrowserField = React.forwardRef((props, inputRef) => {
//   const {
//     disabled,
//     id,
//     label,
//     InputProps: { ref: containerRef, startAdornment, endAdornment } = {},
//     // extracting `error`, 'focused', and `ownerState` as `input` does not support those props
//     error,
//     focused,
//     ownerState,
//     ...other
//   } = props;

//   return (
//     <Box
//       id={id}
//       ref={containerRef}
//       className={`${styles.inputPadrao} flex items-center overflow-hidden`}
//     >
//       {startAdornment}
//       <input disabled={disabled} ref={inputRef} {...other} className={`appearance-none outline-none`} />
//       {endAdornment}
//     </Box>
//   );
// });

// const BrowserMultiInputDateRangeField = React.forwardRef((props, ref) => {
//   const {
//     slotProps,
//     value,
//     defaultValue,
//     format,
//     onChange,
//     readOnly,
//     disabled,
//     onError,
//     shouldDisableDate,
//     minDate,
//     maxDate,
//     disableFuture,
//     disablePast,
//     selectedSections,
//     onSelectedSectionsChange,
//     className,
//   } = props;

//   const { inputRef: startInputRef, ...startTextFieldProps } = useSlotProps({
//     elementType: null,
//     externalSlotProps: slotProps?.textField,
//     ownerState: { ...props, position: "start" },
//   });

//   const { inputRef: endInputRef, ...endTextFieldProps } = useSlotProps({
//     elementType: null,
//     externalSlotProps: slotProps?.textField,
//     ownerState: { ...props, position: "end" },
//   });

//   const { startDate, endDate } = useMultiInputDateRangeField({
//     sharedProps: {
//       value,
//       defaultValue,
//       format,
//       onChange,
//       readOnly,
//       disabled,
//       onError,
//       shouldDisableDate,
//       minDate,
//       maxDate,
//       disableFuture,
//       disablePast,
//       selectedSections,
//       onSelectedSectionsChange,
//     },
//     startTextFieldProps,
//     endTextFieldProps,
//     startInputRef,
//     endInputRef,
//   });

//   return (
//     <Stack ref={ref} spacing={2} direction="row" className={className}>
//       <BrowserField {...startDate} />
//       <span> — </span>
//       <BrowserField {...endDate} />
//     </Stack>
//   );
// });

// function BrowserDateField(props) {
//   const {
//     inputRef: externalInputRef,
//     slots,
//     slotProps,
//     ...textFieldProps
//   } = props;

//   const response = useDateField({
//     props: textFieldProps,
//     inputRef: externalInputRef,
//   });

//   return <BrowserField {...response} />;
// }

// BrowserDateField.propTypes = {
//   inputRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object])
//         .isRequired,
//     }),
//   ]),
//   slotProps: PropTypes.object,
//   slots: PropTypes.object,
// };

// function BrowserDatePicker(props) {
//   return (
//     <DatePicker
//       slots={{ field: BrowserDateField, ...props.slots }}
//       {...props}
//     />
//   );
// }

// BrowserDatePicker.propTypes = {
//   /**
//    * Overridable component slots.
//    * @default {}
//    */
//   slots: PropTypes.any,
// };

// export default function PickerWithBrowserField() {
//   return (
//     // <div className={`${styles.inputPadrao} overflow-hidden`}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer components={["DatePicker"]}>
//           <BrowserDatePicker/>
//         </DemoContainer>
//       </LocalizationProvider>
//     // </div>
//   );
// }

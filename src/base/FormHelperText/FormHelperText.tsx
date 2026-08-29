import MuiFormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps
} from '@mui/material/FormHelperText';
import React from 'react';

export type SistentFormHelperTextProps = MuiFormHelperTextProps;

export const FormHelperText = React.forwardRef<HTMLParagraphElement, SistentFormHelperTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiFormHelperText ref={ref} {...props}>
        {children}
      </MuiFormHelperText>
    );
  }
);
FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;

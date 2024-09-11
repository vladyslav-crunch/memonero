import { InputHTMLAttributes, FC } from "react";
import {
  FormInputStyled,
  FormInputContainer,
  ForgotPassword,
} from "./form-input.styles";

type FormInputProps = {
  icon?: string;
  withForgot?: boolean;
  adornment?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  icon,
  withForgot,
  adornment,
  ...otherProps
}) => {
  return (
    <FormInputContainer
      className="form-input-container"
      {...otherProps}
      icon={icon}
    >
      <FormInputStyled {...otherProps} />
      {withForgot && (
        <ForgotPassword onClick={adornment}>Forgot?</ForgotPassword>
      )}
    </FormInputContainer>
  );
};
export default FormInput;

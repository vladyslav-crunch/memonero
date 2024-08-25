import { InputHTMLAttributes, FC } from "react";
import {
  FormInputStyled,
  FormInputContainer,
  ForgotPassword,
} from "./form-input.styles";
type FormInputProps = {
  icon: string;
  withForgot?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ icon, withForgot, ...otherProps }) => {
  return (
    <FormInputContainer
      className="form-input-container"
      {...otherProps}
      icon={icon}
    >
      <FormInputStyled {...otherProps} />
      {withForgot && <ForgotPassword>Forgot?</ForgotPassword>}
    </FormInputContainer>
  );
};
export default FormInput;

import { CheckBoxContainer } from "./checkbox.styles";
import { FC } from "react";
type CheckboxProps = {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
};

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <CheckBoxContainer>
      {label && <span className="checkbox-label">{label}</span>}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </CheckBoxContainer>
  );
};

export default Checkbox;

import {ChangeEvent, InputHTMLAttributes, useId} from "react";
import styled from '@emotion/styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onToggle?: (e: ChangeEvent) => void;
    content?: string | null;
    isChecked?: boolean;
    label?: string;
}

const Checkbox = ({onToggle, isChecked, label, content}: Props) => {
    const id = useId();
    return (
        <CheckboxLabel htmlFor={label}>
            <StyledCheckbox
                type="checkbox"
                id={id}
                name={label}
                onChange={(e) => {
                    onToggle?.(e);
                }}
                checked={isChecked}
            />
            <StyledText>{content}</StyledText>
        </CheckboxLabel>
    );
};

export default Checkbox;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;


const StyledCheckbox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
`;

const StyledText = styled.p`
  margin-left: 0.25rem;
  ${({theme}) => ({...theme.typographies.caption2})};
  color: ${({theme}) => theme.colors.gray5};
`;

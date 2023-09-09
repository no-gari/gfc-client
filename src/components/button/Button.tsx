import { SmallButton, ExtendedButton, PrimaryButton, SecondaryButton, TertiaryButton} from "./Button.styles";
import { css } from "@emotion/react";

interface ButtonProps {
  color: 'Primary' | 'Secondary' | 'Tertiary';
  extended?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  extended = true,
  color = 'Primary',
  label = '',
  onClick,
  ...props
}: ButtonProps) => {
  const ButtonType = color == 'Primary' ? PrimaryButton : color == 'Secondary' ? SecondaryButton : TertiaryButton;
  const isExtended = extended ? ExtendedButton : SmallButton;

  return (
    <ButtonType
      type='button'
      onClick={onClick}
      css={isExtended}
      {...props}
    >
      {label}
    </ButtonType>
  );
};

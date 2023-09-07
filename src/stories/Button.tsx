import './button.css';
import StyledButton from "./Styledbutton";

interface ButtonProps {
  contained?: boolean;
  size?: 'small' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  contained = false,
  size = 'small',
  label,
  onClick,
  ...rest
}: ButtonProps) => {
  const mode = contained ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <StyledButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}

      {...rest}
    >
      {label}
    </StyledButton>
  );
};

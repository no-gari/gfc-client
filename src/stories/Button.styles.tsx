import styled from "@emotion/styled";
import mainTheme from "@/styles/theme";

const Button  = styled.button`
  all: unset;
  cursor: pointer;
  background-color: rgb(mainTheme.colors.white);
  color: rgb(mainTheme.colors.primary);
  border-radius: 8px;
  border-color: rgb(mainTheme.colors.primary);
  padding: 12px;
  font-size: 1rem;
  text-align: center;
  transition: background-color 0.2s;

  &:active {
    background-color: ${({ theme }) => mainTheme.colors.gray5};
  }

  &:disabled {
    background-color: ${({ theme }) => mainTheme.colors.gray3};
  }
`;

export default Button;
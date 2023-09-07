import styled from "@emotion/styled";
import mainTheme from "@/styles/theme";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme }) => mainTheme.colors.black};
  color: ${({ theme }) => mainTheme.colors.white};
  border-radius: 8px;
  padding: 12px;
  text-align: center;

  &:active {
    background-color: ${({ theme }) => mainTheme.colors.gray5};
  }

  &:disabled {
    background-color: ${({ theme }) => mainTheme.colors.gray3};
  }
`;

export default StyledButton;
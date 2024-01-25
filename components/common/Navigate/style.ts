import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  z-index: 2;
  display: flex;
  max-width: 500px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(236, 236, 233);
  color: ${(props) => props.theme.colors.primary};
  height: 100px;
  font-family: ${(props) => props.theme.font.bold};

  font-size: 20px;
`;

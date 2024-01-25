'use client';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 0px auto;
  max-width: 500px;
  width: 100%;
  min-height: 100vh;
  transition: margin-top 0.5s ease 0s;
  font-size: 20px;
  font-family: ${(props) => props.theme.font.regular};
`;
export { Container };

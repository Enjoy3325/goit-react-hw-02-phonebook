import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
`;

export const ButtonCad = styled.button`
  margin-left: 20px;
  width: 220px;
  height: 30px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  background-color: #ae000d;
  color: white;
  border-radius: 40px;
  border-color: none;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);

  cursor: pointer;
  :hover,
  :focus {
    background-color: #191616;
  }
`;

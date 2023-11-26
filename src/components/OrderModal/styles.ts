import styled from 'styled-components';

export const OverLay  = styled.div`
  top :0px;
  left: 0px;
  background: rgba(0,0,0,0.8);
  backdrop-filter :blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody  = styled.div`
background: #FFF;
width: 480px;
border-radius: 8px;
padding: 32px;
header{
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
   line-height: 0;
    border: 0;
    background: transparent;
  }
  strong{
    font-size: 24px;
  }
};

`;

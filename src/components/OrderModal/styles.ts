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
.status-container{
  margin-top:  32px;
  small{
    font-size: 14px;
    opacity: 0.8;
  }
  div{
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap :8px;
  }
}

`;
export const OrderDetails  = styled.div`
  margin-top:  32px;
  > strong{
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }
  .orders-items{
    margin-top: 16px;
    .item{
      display: flex;
      & + .item{
        margin-top: 16px;
      }
      img{
        border-radius: 6px;
      }
      .quantity{
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }
      .product-details{
        margin-left: 4px;
        strong{
          display: block;
          margin: 4px 0px 0px 4px;
        }
        span{
          font-size: 14px;
          color: #666;
        }
      }
    }

  }
  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
   span{
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
   }
  }
`;
export const Actions  = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .primary{
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

  }

  .secondary{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;

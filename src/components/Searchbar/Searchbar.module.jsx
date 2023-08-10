import styled from '@emotion/styled';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;

  width: 100vw;
  background: linear-gradient(138.13deg, #22343cae 25.87%, #1f2e35b1 100%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  
`;
export const Form = styled.form`
  width: 100%;
  max-width: 900px;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;

  line-height: 100%;
  text-align: center;
  color: #111111;

  border-radius: 10px;

  background: #969da5;
  box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #4587ec;
  }
`;
export const Input = styled.input`
  margin: 12px;

  width: 400px;
  height: 35px;

  border-radius: 10px;

  background: #969da5;
`;
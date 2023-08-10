import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f5f5dc 0%, #969da5 100%);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  border-radius: 20px;
  overflow: hidden;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
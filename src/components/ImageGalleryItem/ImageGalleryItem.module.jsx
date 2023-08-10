import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;

  max-width: 350px;

  padding: 10px;

  border-radius: 10px;

  background: #d6ccbc;
  border: 1px solid #d6ccbc;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 1px 14px #19282f;
    border: 1px solid #f1f1f1;
  }
`;
export const GalleryImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 10px;

  :hover {
    cursor: zoom-in;
  }
`;
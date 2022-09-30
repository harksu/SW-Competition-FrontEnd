import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundWrapper>
      <h1>404 not found</h1>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`;

// const NoneBox = styled.div`
//   width: 100px;
//   height: 100px;
// `;

export default NotFound;

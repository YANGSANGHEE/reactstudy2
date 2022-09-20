import styled from 'styled-components';

const Todotemplates = styled.div`
  width: 512px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
`;
const AppTitle = styled.div`
  background: #363636;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Contents = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <Todotemplates>
      <AppTitle>일정관리 📝</AppTitle>
      <Contents>{children}</Contents>
    </Todotemplates>
  );
};

export default TodoTemplate;

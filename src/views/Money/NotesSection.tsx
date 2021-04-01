import styled from 'styled-components';

const NotesSection = styled.section`
  background: #F5F5F5;
  font-size: 14px;
  padding: 0 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      border: none;
      display: block;
      width: 100%;
      height: 72px;
      background: none;
    }
  }
`;
export {NotesSection}

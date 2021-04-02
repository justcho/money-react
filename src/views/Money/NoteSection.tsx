import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  const x =()=>{
  if(refInput.current !== null){
    setNote(refInput.current.value)
  }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={x}
        />
      </label>
    </Wrapper>
  );
};
export {NoteSection};

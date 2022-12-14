import styled from 'styled-components';
import Button from '../UI/Button';
import { VscArrowRight, VscArrowSwap } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import DateContext from '../../store/date-context';

const TerminalButtons = props => {
  const startTerminal = useSelector(state => state.ticket.terminal.start.name);
  const arrivalTerminal = useSelector(
    state => state.ticket.terminal.arrival.name
  );
  const oneway = useSelector(state => state.ticket.oneway);
  const dateCtx = useContext(DateContext);

  const startHandler = () => {
    if (oneway && dateCtx.date.start === '') {
      alert('가는날을 설정해주세요.');
      return;
    }

    if (!oneway && (dateCtx.date.start === '' || dateCtx.date.arrival === '')) {
      alert('가는날과 오는날을 설정해주세요.');
      return;
    }

    dateCtx.selectedStartTerminal(true);
    props.onShow();
  };

  const arrivalHandler = () => {
    if (startTerminal === '선택') {
      alert('출발지를 먼저 설정해주세요.');
      return;
    }

    dateCtx.selectedStartTerminal(false);
    props.onShow();
  };

  const arrowIcon = oneway ? <VscArrowRight /> : <VscArrowSwap />;

  return (
    <Wrapper>
      <div>
        <SelectButton onClick={startHandler}>
          <p>출발</p>
          <span>{startTerminal}</span>
        </SelectButton>
      </div>
      <span>{arrowIcon}</span>
      <div>
        <SelectButton onClick={arrivalHandler}>
          <p>도착</p>
          <span>{arrivalTerminal}</span>
        </SelectButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 65px 0;

  & > span {
    cursor: pointer;
  }

  div {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 50px;
    cursor: default;
  }
`;

const SelectButton = styled(Button)`
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  p {
    font-size: ${({ theme }) => theme.size.medium2};
    color: ${({ theme }) => theme.color.gray2};
    margin-bottom: 12px;
  }

  span {
    font-size: ${({ theme }) => theme.size.large};
    color: ${({ theme }) => theme.color.primaryFont};
  }
`;

export default TerminalButtons;

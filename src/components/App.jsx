import { useReducer } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Title } from './Statistic/Statistic.styled';
import { Notification } from './Notification/Notification';
import { initial_state, onAddMark } from 'helpers/buttonsReducer';

export const App = () => {
  const [marks, dispatch] = useReducer(onAddMark, initial_state);
  const countTotalFeedback = () => {
    return Object.values(marks).reduce((prev, next) => prev + next, 0);
  };

  const total = countTotalFeedback() || 0;
  const positiveProcent = Math.trunc((marks.good / total) * 100) || 0;

  return (
    <Section>
      <Feedback marks={Object.keys(marks)} addMark={dispatch} />
      <Title>Statistics</Title>
      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Statistic marks={marks} total={total} procent={positiveProcent} />
      )}
    </Section>
  );
};

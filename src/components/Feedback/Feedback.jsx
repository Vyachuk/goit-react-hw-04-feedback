import { Button, List } from './Feedback.styled';
import PropTypes from 'prop-types'; // ES6

export const Feedback = ({ marks, addMark }) => {
  return (
    <List>
      {marks.map((btn, index) => (
        <li key={index}>
          <Button
            onClick={() => addMark({ type: btn, payload: 1 })}
            type="button"
          >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
          </Button>
        </li>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  addMark: PropTypes.func,
};

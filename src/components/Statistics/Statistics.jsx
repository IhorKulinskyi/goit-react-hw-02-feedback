import PropTypes from 'prop-types';
import {
  StatsList,
  StatsListItem,
  IconWrapper,
  TotalStatsList,
} from './Statistics.styled';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiAngry } from 'react-icons/bs';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatsList>
      {options.map(option => {
        let icon;
        if (option[0] === 'good') {
          icon = <BsEmojiSmile />;
        }
        if (option[0] === 'neutral') {
          icon = <BsEmojiNeutral />;
        } else {
          icon = <BsEmojiAngry />;
        }
        return (
          <StatsListItem key={option[0]}>
            <IconWrapper name={option[0]}>{icon}</IconWrapper>
            {option[1]}
          </StatsListItem>
        );
      })}
      <StatsListItem>
        <TotalStatsList>
          <li>
            Total:
            {total()}
          </li>
          <li>Positive feedback: {positivePercentage()}</li>
        </TotalStatsList>
      </StatsListItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

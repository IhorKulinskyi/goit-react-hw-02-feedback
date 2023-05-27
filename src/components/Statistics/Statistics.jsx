import PropTypes from 'prop-types';
import {
  StatsList,
  StatsListItem,
  IconWrapper,
  TotalStatsList,
} from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatsList>
      {options.map(option => (
        <StatsListItem key={option[0]}>
          <IconWrapper name={option[0]}>{option[0]}</IconWrapper>
          {option[1]}
        </StatsListItem>
      ))}
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

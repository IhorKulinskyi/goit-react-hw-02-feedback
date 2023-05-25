import PropTypes from 'prop-types';
import { StatsList, StatsListItem, IconWrapper,TotalStatsList } from './Statistics.styled';
import { FaRegSmileBeam } from 'react-icons/fa';
import { CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <StatsListItem>
        <IconWrapper name="good">
          <FaRegSmileBeam />
        </IconWrapper>
        {good}
      </StatsListItem>
      <StatsListItem>
        <IconWrapper name="neutral">
          <CgSmileNeutral />
        </IconWrapper>
        {neutral}
      </StatsListItem>
      <StatsListItem>
        <IconWrapper name="bad">
          <CgSmileSad />
        </IconWrapper>
        {bad}
      </StatsListItem>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

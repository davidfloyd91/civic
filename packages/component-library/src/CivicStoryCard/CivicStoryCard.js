import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import CivicStoryFooter from './CivicStoryFooter';
import CivicWatermark from '../CivicWatermark/CivicWatermark';

const cardClass = css`
  text-align: center;
  max-width: 1000px;
  margin: 1.5em auto;
  position: relative;
  border: 1px solid #DDD;
  border-radius: 2px;
  box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.2);
  padding:3em;

  p {
    margin: 40px 0;
    line-height: 1.6;
  }
`;

const descriptionClass = css`
  margin: 0 auto;
  text-align: left;
`;

const titleClass = css`
  margin: 0;
  text-align: left;
  font-size: 2.5em;
  line-height:1.2;
  margin-bottom:1em;

  @media (max-width: 640px) {
    font-size: 2em;
  }
`;

const cardLoading = css`
  padding: 50px;
  text-align: center;
  background: #EEE;
`;

const cardError = css`
  padding: 50px;
  text-align: center;
  background: #FDD;
`;

const CivicStoryCard = ({ slug, title, children, error, loading, source }) => {
  let content = children;
  if (loading) {
    content = <div className={cardLoading}>Loading...</div>;
  } else if (error) {
    content = <div className={cardError}>{error}</div>;
  }

  return (
    <div className={cardClass}>
      <CivicWatermark />
      { title ? <h2 className={titleClass}>{title}</h2> : null}
      <div className={descriptionClass}>
        {content}
      </div>
      <CivicStoryFooter slug={slug} source={source} />
    </div>
  );
};

CivicStoryCard.displayName = 'CivicStoryCard';

CivicStoryCard.defaultProps = {
  source: 'https://service.civicpdx.org/',
};

CivicStoryCard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  children: PropTypes.node,
  source: PropTypes.string,
};

export default CivicStoryCard;

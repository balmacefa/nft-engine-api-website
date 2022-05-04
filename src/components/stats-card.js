import React from 'react'

import PropTypes from 'prop-types'

import './stats-card.css'

const StatsCard = (props) => {
  return (
    <div className={`stats-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="stats-card-image"
      />
      <div className="stats-card-container1">
        <h1 className="stats-card-text headline4">{props.number}</h1>
        <span className="stats-card-text1 body1">{props.description}</span>
      </div>
    </div>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: '/playground_assets/05.svg',
  description: 'Description',
  image_alt: 'image',
  rootClassName: '',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default StatsCard

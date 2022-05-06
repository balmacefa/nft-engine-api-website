import React from 'react'

import PropTypes from 'prop-types'

import './testimonials-card.css'

const TestimonialsCard = (props) => {
  return (
    <div className={`testimonials-card-container ${props.rootClassName} `}>
      <div className="testimonials-card-container1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="testimonials-card-image"
        />
        <div className="testimonials-card-container2">
          <span className="testimonials-card-text lead1">{props.text}</span>
          <span className="testimonials-card-text1 subtitle1">
            {props.text1}
          </span>
          <span className="testimonials-card-text2 lead2">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialsCard.defaultProps = {
  image_alt1: 'image',
  rootClassName: '',
  text2: 'Vice President, GoPro',
  text1: 'Floyd Miles',
  text: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  image_src1: process.env.PUBLIC_URL +'/playground_assets/quote-mark.svg',
}

TestimonialsCard.propTypes = {
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
}

export default TestimonialsCard

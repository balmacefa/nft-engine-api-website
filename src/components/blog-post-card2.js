import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src1}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
          <span className="blog-post-card2-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card2-text2">{props.title}</h1>
        <span className="blog-post-card2-text3">{props.description}</span>
        <span className="blog-post-card2-text4">{props.text}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <span className="blog-post-card2-text5">{props.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  author: '@@',
  image_src1:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  when: '@@@@',
  label: '@',
}

BlogPostCard2.propTypes = {
  author: PropTypes.string,
  image_src1: PropTypes.string,
  description1: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  when: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard2

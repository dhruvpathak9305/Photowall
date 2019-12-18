import React from "react";
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
function Photo(props) {

  //To check if the state is available to the present component. 
  const post = props.post;

  // console.log(props.posts)
  return (
    <figure className="figure">
      <img src={post.imageLink} alt={post.description} className="photo"></img>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
        
          onClick={() => props.onRemovePhoto(post)}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}
//To directly inject state to our Photo component.

// function mapStateToProps(state){
//   return {
//       posts:state
//   }
//   }
  
Photo.propTypes={
    post:PropTypes.object.isRequired,
   
  }
//To directly inject state to our Photo component.

// export default connect(mapStateToProps)(Photo);

export default Photo;
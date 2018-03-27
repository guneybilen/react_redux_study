import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

  // <Route path="posts/:id" ... in routes.js file
  // notice there is a 1-1 correspondence between above-line id in: "posts/:id"
  // and the id in: this.props.params.id
  // the id in the url comes to this component as: this.props.params.id


  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
     .then(() => { this.context.router.push('/') });
  }

  render() {

    const { post } = this.props; // equivalent to: const post = this.props.post

    if(!post) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>

        <button 
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

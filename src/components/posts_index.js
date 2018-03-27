import _ from 'lodash'; 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from './../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
          return (
            <li className="list-group-item" key={post.id}>
              <Link to={"posts/" + post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
              </Link>
            </li>
          );
        });
      }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                  <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                  </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                  {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
   return { posts: state.posts.all };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);


// You can delete mapDispatchToProps function and delete importing
// bindActionCreators and only do like the following:
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// { fetchPosts: fetchPosts } can be shortened to { fetchPosts } in ES6
// export default connect(null, { fetchPosts })(PostsIndex);
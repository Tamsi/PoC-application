import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import PostDetails from './postDetails';
import SearchBar from './searchbar';

export default class PostList extends Component {
  constructor(props) {
    super(props);
  }
  state = { posts: [] };

  componentWillMount() {
    axios.get(`http://localhost:3000/abe/rest/posts`)
    .then(response => this.setState({ posts: response.data.data }));
  }

  AbeSearch(term) {
    axios.get(`http://localhost:3000/abe/paginate?search%5Bvalue%5D=${term.toLowerCase()}`)
    .then(response => this.setState({ posts: response.data.data }));
  }

  renderPosts() {
    return (this.state.posts.map((post) => {
      post = post.publish;
      return (<PostDetails nav={this.props.nav} post={post} key={post.name} />);
    }));
  }

  render() {
    return (
      <ScrollView style={{marginBottom: 100}}>
        <SearchBar show={this.props.showSearchbar} onChangeTerm={(term) => this.AbeSearch(term)} />
        {this.renderPosts()}
      </ScrollView>
    );
  }
}

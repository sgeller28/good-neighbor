/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      content: '',
      tags: '',
      cover_url: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  onSubmitClick() {
    // eslint-disable-next-line no-unused-vars
    const post = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      cover_url: this.state.cover_url,
    };
  }

  render() {
    return (
      <div id="newPostDiv">
        <h1>Create a New Request</h1>
        <form>
          Title{' '}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />{' '}
          <br />
          Content{' '}
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.onContentChange}
          />{' '}
          <br />
          Tags{' '}
          <input
            type="text"
            name="tags"
            value={this.state.tags}
            onChange={this.onTagsChange}
          />{' '}
          <br />
          Cover URL{' '}
          <input
            type="text"
            name="cover_url"
            value={this.state.cover_url}
            onChange={this.onCoverURLChange}
          />{' '}
          <br />
          <input type="button" onClick={this.onSubmitClick} value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;

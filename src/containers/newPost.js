/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props) {
    super();
    this.state = {
      store: '',
      grocerylist: '',
      anythingelse: '',
    };
    this.onStoreChange = this.onStoreChange.bind(this);
    this.onGrocerylistChange = this.onGrocerylistChange.bind(this);
    this.onAnythingelseChange = this.onAnythingelseChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onStoreChange(event) {
    this.setState({ store: event.target.value });
  }

  onGrocerylistChange(event) {
    this.setState({ grocerylist: event.target.value });
  }

  onAnythingelseChange(event) {
    this.setState({ anythingelse: event.target.value });
  }

  onSubmitClick() {
    // eslint-disable-next-line no-unused-vars
    const post = {
      store: this.state.store,
      grocerylist: this.state.grocerylist,
      anythingelse: this.state.anythingelse,
    };
    // createPost(post, this.props.history);
  }

  render() {
    return (
      <div id="newPostDiv">
        <h1>Create a New Request</h1>
        <form>
          Store{' '}
          <input
            type="text"
            name="store"
            value={this.state.store}
            onChange={this.onStoreChange}
          />{' '}
          <br />
          Grocery List{' '}
          <input
            type="text"
            name="grocerylist"
            value={this.state.grocerylist}
            onChange={this.onGrocerylistChange}
          />{' '}
          <br />
          Anything else your Good Neighbor should know?{' '}
          <input
            type="text"
            name="anythingelse"
            value={this.state.anythingelse}
            onChange={this.onAnythingElseChange}
          />{' '}
          <br />
          <input type="button" onClick={this.onSubmitClick} value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;

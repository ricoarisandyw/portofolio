import React from 'react';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, name:"Rico Arisandy",score:0 };
  }

  add(){
      this.state.score++;
      this.setState({
          name:"Rico Aw"+this.state.score
      });
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return (
      <button onClick={this.add.bind(this)}>
        Like {this.state.name}
      </button>
    );
  }
}
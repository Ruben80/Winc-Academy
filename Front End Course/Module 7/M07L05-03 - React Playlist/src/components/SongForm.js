import React from "react";
import shortid from "shortid";

class SongForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      song: this.state.song,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating,
    });
    this.setState({
      song: "",
      artist: "",
      genre: "",
      rating: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="song"
          value={this.state.song}
          onChange={this.handleChange}
          placeholder="Song"
          maxLength="25"
        />

        <input
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
          placeholder="Artist"
          maxLength="25"
        />

        <input
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
          placeholder="Genre"
          maxLength="25"
        />

        <input
          name="rating"
          value={this.state.rating}
          onChange={this.handleChange}
          placeholder="Rating"
          maxLength="1"
        />

        <button onClick={this.handleSubmit}>add song</button>
      </form>
    );
  }
}

export default SongForm;

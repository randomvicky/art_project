import React, { Component } from "react";
import axios from "axios";
import Albumlist from "./albumList";

const REQ_URL = "http://localhost:3004/artists";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${REQ_URL}/${this.props.match.params.artistid}`)
      .then((response) => {
        this.setState({ artists: response.data });
      });
  }
  render() {
    console.log(this.state.artists);
    const artist = this.state.artists;
    return (
      <>
        <div className="artist_bio">
          <div className="avatar">
            <span
              style={{
                background: `url('/images/covers/${artist.cover}.jpg') no-repeat`,
              }}
            ></span>
          </div>
          <div className="bio">
            <h3>{artist.name}</h3>
            <div className="bio_text">{artist.bio}</div>
          </div>
          <Albumlist albumList={artist.albums} />
        </div>
      </>
    );
  }
}

export default Artist;

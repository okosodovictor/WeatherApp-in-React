import React, { Component } from "react";
import GalleryService from "../services/GalleryService";
import { Link } from "react-router-dom";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  render() {
    return (
      <div className="container">
        <h2>Photo Gallery</h2>
        <hr />
        <div className="row">
          {this.state.photos.map(photo => (
            <Link to={`/gallery/${photo.id}`}>
              <img
                title={`${photo.title} - ${photo.description}`}
                src={photo.thumbnail}
                className="img img-thumbnail photoThumbnail"
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let photos = await GalleryService().getPhotos();
    let response = await photos.json();
    this.setState({ photos: response });
  }
}

export default Gallery;

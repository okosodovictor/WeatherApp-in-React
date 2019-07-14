import React from "react";
import GalleryService from "../services/GalleryService";

class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: {} };
  }

  render() {
    const { title, large, description } = this.state.image;

    return (
      <div className="container">
        <h2>Image Detail - {title}</h2>
        <hr />
        <img
          title={`${large}`}
          src={`..\\${large}`}
          className="img largePhoto"
          alt=""
        />
        <hr />
        <p>{description}</p>
      </div>
    );
  }

  async componentDidMount() {
    let imageId = this.props.match.params.id;
    let image = await GalleryService().getImageById(imageId);
    let response = await image.json();
    this.setState({ image: response });
  }
}

export default ImageDetail;

const express = require("express");

const app = express();

const port = 5001;

const photos = [
  {
    id: 1,
    title: "galaxy",
    description: "Galaxy of stars",
    thumbnail: "images/image-1.jpg",
    large: "images/image-1-large.jpg"
  },
  {
    id: 2,
    title: "amazon",
    description: "Tick amazon forest",
    thumbnail: "images/image-2.jpg",
    large: "images/image-2-large.jpg"
  },
  {
    id: 3,
    title: "Cloud",
    description: "Tick white cloud",
    thumbnail: "images/image-3.jpg",
    large: "images/image-3-large.jpg"
  },
  {
    id: 4,
    title: "",
    description: "Ice",
    thumbnail: "images/image-4.jpg",
    large: "images/image-4-large.jpg"
  },
  {
    id: 5,
    title: "Sky",
    description: "Sunny Cloud",
    thumbnail: "images/image-5.jpg",
    large: "images/image-5-large.jpg"
  },
  {
    id: 6,
    title: "Sky2",
    description: "Nice Cloud Image",
    thumbnail: "images/image-6.jpg",
    large: "images/image-6-large.jpg"
  },
  {
    id: 7,
    title: "Sky3",
    description: "another cloud image",
    thumbnail: "images/image-7.jpg",
    large: "images/image-7-large.jpg"
  },
  {
    id: 8,
    title: "sky4",
    description: "sky image from the river bank",
    thumbnail: "images/image-8.jpg",
    large: "images/image-8-large.jpg"
  },
  {
    id: 9,
    title: "sky 5",
    description: "another sky image",
    thumbnail: "images/image-9.jpg",
    large: "images/image-9-large.jpg"
  },
  {
    id: 10,
    title: "sky 6",
    description: "Raining street image",
    thumbnail: "images/image-10.jpg",
    large: "images/image-10-large.jpg"
  }
];

app.get("/api/photos", (req, res) => {
  res.send(Object.values(photos));
});

app.get("/api/photos/:id", (req, res) => {
  let id = parseInt(req.params.id, 10);
  let image = photos.find(i => i.id === id);
  res.send(image);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});

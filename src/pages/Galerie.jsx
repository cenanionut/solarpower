import React from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { photos } from "./photos";

function Galerie() {
  return <RowsPhotoAlbum photos={photos} />;
}

export default Galerie;

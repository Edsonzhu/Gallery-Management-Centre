import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/";

//Getters
//Return User
export const fetchUsers = () => {
  return (
    axios
    .get(`${url}users`)
    .then(res => { return res })
  )
}

export const fetchUserbyId = (userId) => {
  return (
    axios
    .get(`${url}users/${userId}`)
    .then(res => { return res })
  )
}

//Return Albums
export const fetchAlbums = () => {
  return (
    axios
    .get(`${url}albums`)
    .then(res => { return res })
  )
}

export const fetchAlbumbyId = (albumId) => {
  return (
    axios
    .get(`${url}albums/${albumId}`)
    .then(res => { return res })
  )
}

export const fetchAlbumsbyUserId = (userId) => {
  return (
    axios
    .get(`${url}albums?userId=${userId}`)
    .then(res => { return res })
  )
}

//Return Photos
export const fetchPhotos = () => {
  return (
    axios
    .get(`${url}photos`)
    .then(res => { return res })
  )
}

export const fetchPhotobyId = (photoId) => {
  return (
    axios
    .get(`${url}photos/${photoId}`)
    .then(res => { return res })
  )
}

export const fetchPhotosbyAlbumId = (albumId) => {
  return (
    axios
    .get(`${url}photos?albumId=${albumId}`)
    .then(res => { return res }))
}

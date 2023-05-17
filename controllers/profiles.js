import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

async function index(req, res) {
  try {
    const profiles = await Profile.find({})
    res.json(profiles)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findById(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function jumppage(req, res) {
  try {
    console.log("ping for jumppage")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function outfitIndex(req, res) {
  try {
    console.log("ping for outfitIndex")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function outfitShow(req, res) {
  try {
    console.log("ping for outfitShow")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function swipeIndex(req, res) {
  try {
    console.log("ping for swipeIndex")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function swipeShow(req, res) {
  try {
    console.log("ping for swipeShow")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { 
  index,
  addPhoto,
  jumppage,
  outfitIndex,
  outfitShow,
  swipeIndex,
  swipeShow,
}

"use strict";

const express = require("express");
const router = express.Router();
const playlist = require('./controllers/playlist.js');

const dashboard = require("./controllers/dashboard.js");
//const about = require("./controllers/about.js");

const about = {
  index(request, response){
    const viewData = {
      title: 'About Playlist Maker',
    };
    response.render('about',viewData);
  },
};

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get('/playlist/:id', playlist.index)
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);
router.post('/playlist/:id/addsong', playlist.addSong);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);

module.exports = router;

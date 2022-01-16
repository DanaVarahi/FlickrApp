const express = require("express");
const app = express();
const cors = require('cors')
const parser = require('body-parser');
const fetch = require('node-fetch');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))


app.get("/", (request, response) => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&get_user_info=1&get_gallery_info=1&extras=description,date_taken,tags,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&api_key=236a77c9485c3329e98b0a6af45a315a&gallery_id=72157718418965852&format=json&nojsoncallback=1')
    .then(res => res.json())
    .then(res => response.send(res))
   
});

app.listen(4000, () => {
    console.log("Listen on the port 4000...");
});


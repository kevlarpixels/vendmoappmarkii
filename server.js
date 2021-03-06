const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('./services/passport');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// Connect to the Mongo DB **Kevin added useNewParser and callback
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vendmoshopping", {useNewUrlParser: true}, function () {
   console.log("Mongo is connected!"); 
   // Start the API server
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  })

});

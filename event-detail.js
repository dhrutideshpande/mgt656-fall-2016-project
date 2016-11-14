'use strict';

var validator = require('validator');

function RSVPvalidation(request, response){
  var contextData = {errors: []};
  var email = parseInt(request.body.email, 10)
  
  if (validator.contains(request.body.email, "@yale.edu") === false) {
    contextData.errors.push('Your email address must be a valid Yale email');
  }
/*! SlackPeb by ryanpcmcquen v1.0 */
/*global require*/
/*jslint browser:true, white:true*/
// Declare all variables.
var UI = require('ui');
var ajax = require('ajax');

// Only require statements need to be outside the closure.
(function () {

  'use strict';

  var card = new UI.Card({
    scrollable: true,
    style: 'small'
  });

  /*
  var parser = function (data) {
    var cardUpdate = function () {
      card.title("Slackware");
      card.body(data);
    };
    cardUpdate();
  };

  var wires = {

    url: 'https://mirrors.kernel.org/slackware/slackware-current/ChangeLog.txt',
    //url: 'http://slackware.osuosl.org/slackware-current/ChangeLog.txt'//,
    type: 'text'

    url: 'http://slackware-changelog.oprod.net/atom_feed/',
    type: 'xml'
  };

  var ajaxCaller = function () {
    ajax({
      url: wires.url,
      type: wires.type
    }, parser);
  };

  // This is the actual program.
  ajaxCaller();
  */
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'http://slackware-changelog.oprod.net/atom_feed/');



  xhr.addEventListener('load', function () {
    card.body(xhr.responseText);
    card.show();
  });
  xhr.send();


}());
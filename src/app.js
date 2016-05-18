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

  var parser = function (data) {
    var cardUpdate = function () {
      card.body(data);
      console.log(data);
    };
    cardUpdate();
  };

  var wires = {
    url: 'http://slackware.osuosl.org/slackware-current/ChangeLog.txt',
    type: 'text'
  };

  var ajaxCaller = function () {
    ajax({
      url: wires.url,
      type: wires.type
    }, parser);
  };

  // this is the actual program
  ajaxCaller();

  card.show();

}());
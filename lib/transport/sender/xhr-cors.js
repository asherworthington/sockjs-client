'use strict';

var inherits = require('inherits')
  , XhrDriver = require('../driver/xhr')
  ;

  var debug = function() {};
  if (process.env.NODE_ENV !== 'production') {
    debug = require('debug')('sockjs-client:xhr-cors');
  }

function XHRCorsObject(method, url, payload, opts) {
  debug('options', opts);
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;

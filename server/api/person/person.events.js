/**
 * Person model events
 */

'use strict';

import {EventEmitter} from 'events';
var Person = require('../../sqldb').Person;
var PersonEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PersonEvents.setMaxListeners(0);

// Model events
var events = {
  afterCreate: 'save',
  afterUpdate: 'save',
  afterDestroy: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Person.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    PersonEvents.emit(event + ':' + doc._id, doc);
    PersonEvents.emit(event, doc);
    done(null);
  };
}

export default PersonEvents;

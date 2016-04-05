/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/location              ->  index
 * POST    /api/location              ->  create
 * GET     /api/location/:id          ->  show
 * PUT     /api/location/:id          ->  update
 * DELETE  /api/location/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
//import {Location, User} from '../../sqldb';
import db from '../../sqldb';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Locations
export function index(req, res) {

  return db.Location.findAll({
    where: {
      AccountId: req.user.AccountId
    },
    attributes: [
      '_id',
      'name',
      'address',
      'city',
      'zip',
      'region',
      'country',
      'active'
    ]
  })
  .then(respondWithResult(res))
  .catch(handleError(res));

}

// Gets a single Location from the DB
export function show(req, res) {
  return db.Location.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Location in the DB
export function create(req, res) {
  return db.Location.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Location in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return db.Location.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Location from the DB
export function destroy(req, res) {
  return db.Location.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

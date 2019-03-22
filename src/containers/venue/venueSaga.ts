import React from 'react';
import { take, put, call, fork } from 'redux-saga/effects';
import { GET_RANDOM_NUMBER, FETCH_AMENITIES } from './constants';
import { fetchAmenitiesSuccess, fetchAmenitiesFailiure } from './venueActions';
import venue from '../../services/venue';


function fetchAmenitiesCall() {
  return new Promise(resolve => {
    const venues = venue.list()
    resolve(venues)
  });
}

function* watchFetchAmenitiesRequestIterator() {
  while (true) {
    yield take(FETCH_AMENITIES);
   try {
     const response = yield call(fetchAmenitiesCall);
     yield put(fetchAmenitiesSuccess(response));
     console.log('Fetch Amenities Success: ', response);
   } catch (err) {
     console.log('Fetch Amenities Faliure: ', err);
     yield put(fetchAmenitiesFailiure(err));
   }
 }
}


export default function* root() {
  yield fork(watchFetchAmenitiesRequestIterator);
}
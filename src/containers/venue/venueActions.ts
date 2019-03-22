import {
    FETCH_AMENITIES, FETCH_AMENITIES_SUCCESS, FETCH_AMENITIES_FAILIURE,
  } from './constants';
  

export function fetchAmenities() {
    return {
        type: FETCH_AMENITIES
    }
}

export function fetchAmenitiesSuccess(res: any) {
    return {
        type: FETCH_AMENITIES_SUCCESS,
        res
    }
}

export function fetchAmenitiesFailiure(err: any) {
    return {
        type: FETCH_AMENITIES_FAILIURE,
        err 
    }
}
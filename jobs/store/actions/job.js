import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import * as types from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '802123456789',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    const url = 'https://jsonplaceholder.typicode.com/users';
    let { data } = await axios.get(url);
    dispatch({ type: types.FETCH_JOBS, payload: data });
    callback();
    console.log(data);
  } catch(e) {
    console.error(e);
  }
};
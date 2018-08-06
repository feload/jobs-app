import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";
import config from "../config.json";
import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types.js';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: config.indeed_api_key.main,
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
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (err) {
    console.error(err);
  }
};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};

export const clearLikedJobs = () => {
  return {
    type: CLEAR_LIKED_JOBS,
    payload: null
  }
}
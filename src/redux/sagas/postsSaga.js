import{ call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveApiData } from "../ac";
import { fetchData } from '../../restApi/index.js'

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* getApiData() {
  try {
    const dataSaga = yield call(fetchData);
    console.log(dataSaga)
    yield put(receiveApiData(dataSaga))
  } catch(e) {
    console.log(e);
  }
}
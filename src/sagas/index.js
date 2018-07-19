import { all, put, takeEvery } from 'redux-saga/effects';
import { create } from 'apisauce';

const api = create({ baseURL: 'https://swapi.co/api' });

function* getPlanet(payload) {
  try {
    const { data } = payload;
    const res = yield api.get(`/planets/${data.id}/`);

    if (res.status === 200) {
      yield put({
        type: 'PLANET_GET_SUCCESS',
        data: { ...res.data },
      });
    } else {
      throw res.data;
    }
  } catch (error) {
    yield put({
      type: 'PLANET_GET_FAILED',
      data: { ...error },
    });
  }
}

function* watchGetPlanet() {
  yield takeEvery('PLANET_GET', getPlanet);
}

export default function* rootSaga() {
  yield all([watchGetPlanet()]);
}

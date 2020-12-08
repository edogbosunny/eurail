
/* eslint-disable no-unused-expressions */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchContacts } from '../actions/contacts';

// import mockData from '../../src/__mocks__/mockData';
const mockData = {
  name: 'test'
}

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

describe('Fetch user suit', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => moxios.uninstall());
  describe('Fetch User Action', () => {
    it('it should return user name', () => {
      // const store = mockStore({});
      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          name: 'test'
        });
      });
      const expected = [{ name: 'test' }];
      store.dispatch(fetchContacts(mockData.loginDetails)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
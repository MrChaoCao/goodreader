import {
  postSession,
  deleteSession
} from '../session_api_util'

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => 'ajax promise');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });


  it('postSession makes request and returns an ajax promise', () => {
    const user = {
      username: 'GabrielMarquez',
      password: 'r0drig0!59',
      email: 'ElGabito@unal.edu'
    }
    const returnValue = postSession(user);

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/session');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ user });
    expect(returnValue).toEqual('ajax promise');
  });

  it('deleteSession makes request and returns an ajax promise', () => {
     const returnValue = deleteSession();
     expect($.ajax).toBeCalled();
     const ajaxCallArg = $.ajax.mock.calls[0][0];

     expect(ajaxCallArg.url).toEqual('api/session');
     expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
     expect(returnValue).toEqual('ajax promise');
  });
});

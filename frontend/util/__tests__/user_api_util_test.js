import {
  createUser,
  fetchUser,
} from '../user_api_util'

describe('the api util', () => {
  beforeEach(() =>{
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => 'ajax promise');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchUser makes request and returns an ajax promise', () => {
    const returnValue = fetchUser(4);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/users/4');
    expect(returnValue).toEqual('ajax promise');
  });

  it('createUser makes request and returns an ajax promise', () => {
    const user = { username: 'Murakami', password: 'PeterCat49', email: 'hmurakami@waseda.jp'};
    const returnValue = createUser(user);

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/users');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ user });
    expect(returnValue).toEqual('ajax promise')
  });

})

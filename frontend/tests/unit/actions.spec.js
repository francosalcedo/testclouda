import actions, { resource_url } from '@/store/actions'

let url = ''
let body = {}
let mockError = false
const testUserId = 1;

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) 
        throw Error("Mock error")

      url = _url
      body = _body
      resolve(true)
    })
  },
  put: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) 
        throw Error("Mock error")

      url = _url
      body = _body
      resolve(true)
    })
  },
}))

describe('actions', () => {

  it('check created user', async () => {
    const commit = jest.fn();
    
    const user = {
        firstname: "TEST_UNIT",
        lastname: "TEST_UNIT",
        email: "TEST_UNIT@gmail.com",
        birthDate: "2020-05-22",
        address: {
            street: "TEST_UNIT",
            city: "TEST_UNIT",
            country: "US",
            postalcode: "111"
        }
    };

    await actions.addUser({ commit }, user)

    expect(url).toBe(resource_url)
    expect(body.firstname).toEqual(user.firstname)
  })

  it('check update user', async () => {
    body, url = '';

    const commit = jest.fn();
    const user = {
        id : testUserId,
        firstname: "TEST_UNIT UPDATE",
        lastname: "TEST_UNIT UPDATE",
        email: "TEST_UNIT_UPDATE@gmail.com",
        birthDate: "2020-05-22",
        address: {
            street: "TEST_UNIT UPDATE",
            city: "TEST_UNIT UPDATE",
            country: "US",
            postalcode: "1114"
        }
    };

    await actions.updateUser({ commit }, user)
    expect(body.firstname).toEqual(user.firstname)
  })

})
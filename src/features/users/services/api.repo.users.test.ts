import { ApiRepoUserStructures } from './api.repo.users';
import { LoginUser, UserStructure } from '../models/user';

describe('Given UsersRepo class', () => {
  const repo = new ApiRepoUserStructures();
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getUsers should...', async () => {
      const expected: ApiRepoUserStructures[] = [];
      const result = await repo.getUsers();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method createUser should...', async () => {
      const newUser: Partial<UserStructure> = {};
      const mockUser: Partial<UserStructure> = { id: '1', userName: 'Test Name' };
      const expectedUrl = 'http://localhost:2800/users/register';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser),
      });
      const response = await repo.registerUser(newUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(mockUser);
    });

    test('Then method login should...', async () => {
      const loginUser: LoginUser = {
        email: 'test@test.com',
        passwd: 'passwdtest',
      };
      const expectedUrl = 'http://localhost:2800/users/login';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(loginUser),
      });
      const response = await repo.loginUser(loginUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(loginUser);
    });

    test('Then method update should...', async () => {
    const updateUser: Partial<UserStructure> ={};
    const id = {} as string;
    const token = 'token';
    const expectedUrl = `http://localhost:2800/users/update/${id}`;

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(updateUser),
    });
    const response = await repo.updateUser(id,updateUser,token);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'PATCH',
      body: JSON.stringify(updateUser),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response).toEqual(updateUser);
    })

  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });
    test('Then method getUsers should throw an error', async () => {
      expect(repo.getUsers()).rejects.toThrow();
    });
    test('Then method createUser should throw an error', async () => {
      const newUser: Partial<UserStructure> = {};
      expect(repo.registerUser(newUser)).rejects.toThrow();
    });
    test('Then method login should throw an error', async () => {
      const loginUser: LoginUser = {
        email: 'test@test.com',
        passwd: 'passwdtest',
      };
      expect(repo.loginUser(loginUser)).rejects.toThrow();
    });

    test('Then method updateUser should throw an error', async () => {
      const updateUser: Partial<UserStructure> ={};
      const id = {} as string;
    const token = 'token';
      expect(repo.updateUser(id,updateUser,token)).rejects.toThrow();
    });
});
})

import { serverUrl } from '../../../config';
import { loginPayload } from '../models/login.payload';
import { LoginUser, UserStructure } from '../models/user';

export class ApiRepoUserStructures {
  apiUrl = serverUrl + '/users';

  async getUsers(): Promise<UserStructure[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginUser(loginUser: LoginUser): Promise<loginPayload>{
    const response = await fetch(this.apiUrl + '/login', {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
  return response.json();
  }

  async registerUser(newUserStructure: Partial<UserStructure>): Promise<UserStructure> {
    const response = await fetch(this.apiUrl + '/register', {
      method: 'POST',
      body: JSON.stringify(newUserStructure),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateUser(id: UserStructure['id'], updatedUserStructure: Partial<UserStructure>, token: string): Promise<UserStructure> {
    const finalUrl = `${this.apiUrl}/update/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedUserStructure),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

}

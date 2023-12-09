import { serverUrl } from '../../../config';
import { UserStructure } from '../models/user';

export class ApiRepoUserStructures {
  apiUrl = serverUrl + '/Users';

  async getUsers(): Promise<UserStructure[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createUsers(newUserStructure: Partial<UserStructure>): Promise<UserStructure> {
    const response = await fetch(this.apiUrl, {
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

  async updateUsers(id: UserStructure['id'], updatedUserStructure: Partial<UserStructure>): Promise<UserStructure> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedUserStructure),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

}

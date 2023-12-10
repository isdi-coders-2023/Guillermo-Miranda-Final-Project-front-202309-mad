import { UserStructure } from "./user"

export type loginPayload = {
  user: UserStructure,
  token: string
}

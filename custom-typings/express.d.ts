import { IUser, ISession } from "../src/helpers/typescript-helpers/interfaces";

declare global {
  namespace Express {
    interface Request {
      user: IUser | null;
      session: ISession | null;
    }
  }
}

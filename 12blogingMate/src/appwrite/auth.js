import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  // intilizating client
  client = new Client();
  account;

  // intilizating account
  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL) // Your API Endpoint
      .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID

    this.account = new Account(this.client);
  }

  //   Feat: Sign Up
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount;
        // login user
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //   Feat: Sign In
  async login({ email, password }) {
    try {
      const userAccount = await this.account.createEmailSession(
        email,
        password
      );
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  //   Feat: Sign Out
  async logout() {
    try {
      const userAccount = await this.account.deleteSession("current");
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  //   Feat: Active User
  async getCurrentUser() {
    try {
      const userAccount = await this.account.get();
      return userAccount;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService


/* step to auth appwrite backend services
    1. intilizating the client
    2. intilizating the account -- in constructor because it will be called every time and will define many crospponding helping methods.
    3. create account use [this.account.create]
    4. login use [this.account.createEmailSession]
    5. logout use [this.account.deleteSession]
    6. getCurrentUser use [this.account.get]
*/
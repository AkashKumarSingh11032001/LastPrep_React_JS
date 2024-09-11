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

export default authService;

import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  account;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL) // Your API Endpoint
      .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImages, status, userId }) {
    try {
      const res = await this.databases.createDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        // ID.unique(),
        slug,
        {
          title,
          content,
          featuredImages,
          status,
          userId,
        }
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, {title, content, featuredImages, status}){
    try{
        const res= await this.databases.updateDocument(
            conf.APPWRITE_DATABASE_ID,
            conf.APPWRITE_COLLECTION_ID,
            slug,
            {
                title,
                content,
                featuredImages,
                status,
            }
        )
        return res;

    }catch(error){
      console.log("Appwrite service :: updatePost :: error", error);
    }

  }
}

const service = new Service();
export default service;

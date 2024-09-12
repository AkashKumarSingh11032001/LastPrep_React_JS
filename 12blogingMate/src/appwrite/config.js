import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  account;

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

  async updatePost(slug, { title, content, featuredImages, status }) {
    try {
      const res = await this.databases.updateDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
        }
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      const res = await this.databases.deleteDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
    }
    return false;
  }

  async getPost(slug) {
    try {
      const res = await this.databases.getDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts() {
    try {
      const res = await this.databases.listDocuments(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        [Query.equal("status", "active")]
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: getAllPost :: error", error);
      return false;
    }
  }

  //   file upload
  async uploadFile(file) {
    try {
      const res = await this.bucket.createFile(
        conf.APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  //   delete file
  async deleteFile(fileId) {
    try {
      const res = await this.bucket.deleteFile(conf.APPWRITE_BUCKET_ID, fileId);
      return res;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;

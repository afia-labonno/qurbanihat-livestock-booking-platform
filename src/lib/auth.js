import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);


const client = new MongoClient(process.env.AUTH_DB_URI);
console.log(process.env.AUTH_DB_URI);
try {
  await client.connect();
  console.log("DB Connected");
} catch (error) {
  console.error("Mongo Error : ", error)
}

const db = client.db('qurbaniHat-user-db');

export const auth = betterAuth({
  //...
  emailAndPassword: {
    enabled: true,
  },

    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },

    database: mongodbAdapter(db, {
      // 
      client
    }),
  });
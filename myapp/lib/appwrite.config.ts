import * as sdk from "node-appwrite";

// Destructure environment variables
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

// Check if the critical environment variables are defined
if (!ENDPOINT) {
  throw new Error(
    "NEXT_PUBLIC_ENDPOINT is not defined. Check your .env.local file."
  );
}

if (!PROJECT_ID) {
  throw new Error("PROJECT_ID is not defined. Check your .env.local file.");
}

if (!API_KEY) {
  throw new Error("API_KEY is not defined. Check your .env.local file.");
}

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT) // Use the endpoint from the environment variable
  .setProject(PROJECT_ID) // Use the project ID from the environment variable
  .setKey(API_KEY); // Use the API key from the environment variable

// Export initialized SDK modules
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

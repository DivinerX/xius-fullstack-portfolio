
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "@/env";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";


// Initialize Pinecone client
export const pinecone = new Pinecone({
  apiKey:
    env.PINECONE_API_KEY,
});

export async function getVectorStore() {
  const pineconeIndex = pinecone.Index(env.PINECONE_INDEX_NAME, "https://portfolio-3l1lf4y.svc.aped-4627-b74a.pinecone.io");

  console.log(env.GOOGLE_API_KEY);

  const model = new GoogleGenerativeAIEmbeddings({
    apiKey: env.GOOGLE_API_KEY,
    modelName: "embedding-001",
  });

  return await PineconeStore.fromExistingIndex(
    model,
    { pineconeIndex }
  );
}

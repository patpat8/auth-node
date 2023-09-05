import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://prompts-db:SGuaJ3nNCoIvqkfOA0gifDOgpvCAhDzTW5cpdDrWKvhIPEA0YOwgcUWDNUDPtx1aDPEBS8DOe8nfACDbYM554g%3D%3D@prompts-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@prompts-db@", {
      dbName: "SalkDB",
    })
    .then((c) => {
      console.log(`Connected to ${c.connection.host}`);
    })
    .catch((err) => console.error(err));
};

import * as mongoose from 'mongoose';
import { env } from '../env.config';

(<any>mongoose).Promise = Promise;

interface MyConnection extends mongoose.ConnectionOptions {
  useMongoClient?: boolean;
  poolSize: number;
}

const option: MyConnection = {
  poolSize: 5,
  useMongoClient: env.NODE_ENV === 'production',
};

export const connection: mongoose.Connection = mongoose
  .createConnection(
  env.MONGODB_CONNECTION,
  option,
);

export const connectionAccess: mongoose.Connection = mongoose.
  createConnection(
  env.MONGODB_CONNECTION_ACCESS,
  option,
);

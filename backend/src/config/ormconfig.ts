import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormOptions: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/nestjs-graphql.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'database', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*')],
};

module.exports = ormOptions;

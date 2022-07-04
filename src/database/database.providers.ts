import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProviders = [{
  provide: 'DATA_SOURCE',
  useFactory: async (configService: ConfigService) => {
    const dataSource = new DataSource({
      type: 'postgres',
      host: configService.get<string>('DATABASE_HOST'),
      port: configService.get<number>('DATABASE_PORT'),
      username: configService.get<string>('POSTGRES_USER'),
      password: configService.get<string>('POSTGRES_PASSWORD'),
      database: configService.get<string>('POSTGRES_DB'),
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    })
    return dataSource.initialize();
  },
  inject: [ConfigService],
}];


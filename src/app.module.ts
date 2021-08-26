import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { User } from './entities/user.entity';
import { Automobile } from './entities/automobile.entity';
import { Motorcycle } from './entities/motorcyle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'dbexercise',
      entities: [ User, Automobile, Motorcycle],
      //entities: ["../**/**.entity{.ts,.js}"],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

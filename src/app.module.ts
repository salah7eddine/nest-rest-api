import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import config from './config/keys';
import { ItemsModule } from './Modules/Items.module';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

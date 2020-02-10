import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from 'src/items/schemas/item.schema';
import { ItemsController } from 'src/items/items.controller';
import { ItemsService } from 'src/Services/items/items.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

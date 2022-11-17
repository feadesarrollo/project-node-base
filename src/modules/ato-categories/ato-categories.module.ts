import { Module } from '@nestjs/common';
import { AtoCategoriesController } from './ato-categories.controller';
import { AtoCategoriesService } from './ato-categories.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AtoCategoriesController],
  providers: [AtoCategoriesService]
})
export class AtoCategoriesModule {}

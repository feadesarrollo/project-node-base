import { Module } from '@nestjs/common';
import { RateSurchargesController } from './rate-surcharges.controller';
import { RateSurchargesService } from './rate-surcharges.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RateSurchargesController],
  providers: [RateSurchargesService]
})
export class RateSurchargesModule {}

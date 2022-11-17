import { Module } from '@nestjs/common';
import { RateParkingController } from './rate-parking.controller';
import { RateParkingService } from './rate-parking.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RateParkingController],
  providers: [RateParkingService]
})
export class RateParkingModule {}

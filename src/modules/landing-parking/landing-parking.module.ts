import { Module } from '@nestjs/common';
import { LandingParkingController } from './landing-parking.controller';
import { LandingParkingService } from './landing-parking.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LandingParkingController],
  providers: [LandingParkingService]
})
export class LandingParkingModule {}

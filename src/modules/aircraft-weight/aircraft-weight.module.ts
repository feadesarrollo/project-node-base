import { Module } from '@nestjs/common';
import { AircraftWeightController } from './aircraft-weight.controller';
import { AircraftWeightService } from './aircraft-weight.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AircraftWeightController],
  providers: [AircraftWeightService]
})
export class AircraftWeightModule {}

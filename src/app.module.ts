import { Module } from '@nestjs/common';

import { RateLandingModule } from './modules/rate-landing/rate-landing.module';
import { EntityModule } from './modules/entity/entity.module';
import { AtoCategoriesModule } from './modules/ato-categories/ato-categories.module';
import { AircraftWeightModule } from './modules/aircraft-weight/aircraft-weight.module';
import { RateSurchargesModule } from './modules/rate-surcharges/rate-surcharges.module';
import { RateParkingModule } from './modules/rate-parking/rate-parking.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    EntityModule,
    RateLandingModule,
    AtoCategoriesModule,
    AircraftWeightModule,
    RateSurchargesModule,
    RateParkingModule,
    ConfigModule.forRoot()
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RateLandingController } from './rate-landing.controller';
import { RateLandingService } from './rate-landing.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule],
  controllers: [RateLandingController],
  providers: [RateLandingService]
})
export class RateLandingModule {}

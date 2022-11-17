import { Controller, Get, HttpStatus, Res, Param, Req, Query, Post, Body } from '@nestjs/common';
import { LandingParkingService } from './landing-parking.service';

@Controller('landing-parking')
export class LandingParkingController {

  constructor(private readonly lpService: LandingParkingService) {}

  @Post('getLandingData')
  getLandingData(@Body() filter, @Res() response) {
    this.lpService.getLandingData(filter).subscribe(
        (resp) => {
          response.status(HttpStatus.OK).json(resp);
        },
        (error) =>{
          response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al recuperar datos para Landing Data...' });
        }

    );

  }

  @Post('getLandingFee')
  getLandingFee(@Body() filter, @Res() response) {
    this.lpService.getLandingFee(filter).subscribe(
        (resp) => {
          response.status(HttpStatus.OK).json(resp);
        },
        (error) =>{
          response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al recuperar datos para Landing Fee...' });
        }

    );

  }

  @Post('getParkingData')
  getParkingData(@Body() filter, @Res() response) {
    this.lpService.getParkingData(filter).subscribe(
        (resp) => {
          response.status(HttpStatus.OK).json(resp);
        },
        (error) =>{
          response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al recuperar datos para Parking Data...' });
        }

    );

  }
}

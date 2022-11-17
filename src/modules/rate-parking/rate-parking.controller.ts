import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { RateParkingService } from './rate-parking.service';

@Controller('rate-parking')
export class RateParkingController {

  constructor(private readonly rpService: RateParkingService) {}

  @Get('getAllRateLanding')
  getAllRateLanding(@Res() response) {

    this.rpService.getAllRateLanding().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllCurrencys')
  getAllCurrencys(@Res() response) {

    this.rpService.getAllCurrencys().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllEntities')
  getAllEntities(@Res() response) {

    this.rpService.getAllEntities().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllContries')
  getAllContries(@Res() response) {

    this.rpService.getAllContries().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAtoCategories')
  getAllAtoCategories(@Res() response) {

    this.rpService.getAllAtoCategories().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAirports')
  getAllAirports(@Res() response) {

    this.rpService.getAllAirports().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }


  @Get()
  getRateParking(@Res() response) {
    this.rpService.getRateParking().subscribe((aircraftWeight)=>{
      response.status(HttpStatus.OK).json(aircraftWeight);
    });

  }

  @Post()
  create(@Body() ac: any, @Res() response)
  {

    this.rpService.createRateParking(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Rate Parking...' });
      }

    );

  }

  @Put()
  update(@Body() ac: any, @Res() response)
  {
    this.rpService.updateRateParking(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Rate Parking...' });
      }

    );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id)
  {
    this.rpService.deleteRateParking(id).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Rate Parking...' });
      }

    );
  }
}

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { RateSurchargesService } from './rate-surcharges.service';

@Controller('rate-surcharges')
export class RateSurchargesController {

  constructor(private readonly rsService: RateSurchargesService) {}

  @Get('getAllRateLanding')
  getAllRateLanding(@Res() response) {

    this.rsService.getAllRateLanding().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllCurrencys')
  getAllCurrencys(@Res() response) {

    this.rsService.getAllCurrencys().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllEntities')
  getAllEntities(@Res() response) {

    this.rsService.getAllEntities().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllContries')
  getAllContries(@Res() response) {

    this.rsService.getAllContries().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAtoCategories')
  getAllAtoCategories(@Res() response) {

    this.rsService.getAllAtoCategories().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAirports')
  getAllAirports(@Res() response) {

    this.rsService.getAllAirports().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }


  @Get()
  getRateSurcharges(@Res() response) {
    this.rsService.getRateSurcharges().subscribe((aircraftWeight)=>{
      response.status(HttpStatus.OK).json(aircraftWeight);
    });

  }

  @Post()
  create(@Body() ac: any, @Res() response)
  {

    this.rsService.createRateSurcharges(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Rate Surcharges...' });
      }

    );

  }

  @Put()
  update(@Body() ac: any, @Res() response)
  {
    this.rsService.updateRateSurcharges(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Rate Surcharges...' });
      }

    );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id)
  {
    this.rsService.deleteRateSurcharges(id).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Rate Surcharges...' });
      }

    );
  }
}

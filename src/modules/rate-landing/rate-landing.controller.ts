import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { RateLandingService } from './rate-landing.service';

@Controller('rate-landing')
export class RateLandingController {

  constructor(private readonly rlService: RateLandingService) {}

  @Get('getAllCurrencys')
  getAllCurrencys(@Res() response) {

    this.rlService.getAllCurrencys().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllEntities')
  getAllEntities(@Res() response) {

    this.rlService.getAllEntities().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllContries')
  getAllContries(@Res() response) {

    this.rlService.getAllContries().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAtoCategories')
  getAllAtoCategories(@Res() response) {

    this.rlService.getAllAtoCategories().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get('getAllAirports')
  getAllAirports(@Res() response) {

    this.rlService.getAllAirports().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }


  @Get()
  getRateLanding(@Res() response) {
    this.rlService.getRateLanding().subscribe((aircraftWeight)=>{
      response.status(HttpStatus.OK).json(aircraftWeight);
    });

  }

  @Post()
  create(@Body() ac: any, @Res() response)
  {

    this.rlService.createRateLanding(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Rate Landing...' });
      }

    );

  }

  @Put()
  update(@Body() ac: any, @Res() response)
  {
    this.rlService.updateRateLanding(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Rate Landing...' });
      }

    );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id)
  {
    this.rlService.deleteRateLanding(id).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Rate Landing...' });
      }

    );
  }
}

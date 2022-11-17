import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AircraftWeightService } from '../aircraft-weight/aircraft-weight.service';

@Controller('aircraft-weight')
export class AircraftWeightController {
  constructor(private readonly awService: AircraftWeightService) {}

  @Get('getAllAircraft')
  getAllAircraft(@Res() response) {

    this.awService.getAllAircraft().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }

  @Get()
  getAircraftWeight(@Res() response) {
    this.awService.getAircraftWeight().subscribe((aircraftWeight)=>{
      response.status(HttpStatus.OK).json(aircraftWeight);
    });

  }

  @Post()
  create(@Body() aw: any, @Res() response)
  {

    this.awService.createAircraftWeight(aw).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Aircraft Weight...' });
      }

    );

  }

  @Put()
  update(@Body() aw: any, @Res() response)
  {
    this.awService.updateAircraftWeight(aw).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Aircraft Weight...' });
      }

    );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id)
  {
    this.awService.deleteAircraftWeight(id).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Aircraft Weight...' });
      }

    );
  }

}

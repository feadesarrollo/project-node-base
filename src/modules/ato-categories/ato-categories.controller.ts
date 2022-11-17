import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AtoCategoriesService } from './ato-categories.service';

@Controller('ato-categories')
export class AtoCategoriesController {

  constructor(private readonly acService: AtoCategoriesService) {}

  @Get('getAllAirports')
  getAllAirports(@Res() response) {

    this.acService.getAllAirports().subscribe((aircraft)=>{
      response.status(HttpStatus.OK).json(aircraft);
    });

  }


  @Get()
  getAtoCategory(@Res() response) {
    this.acService.getAtoCategory().subscribe((aircraftWeight)=>{
      response.status(HttpStatus.OK).json(aircraftWeight);
    });

  }

  @Post()
  create(@Body() ac: any, @Res() response)
  {

    this.acService.createAtoCategory(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Ato Category...' });
      }

    );

  }

  @Put()
  update(@Body() ac: any, @Res() response)
  {
    this.acService.updateAtoCategory(ac).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Ato Category...' });
      }

    );
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') id)
  {
    this.acService.deleteAtoCategory(id).subscribe(
      (resp) => {
        response.status(HttpStatus.CREATED).json(resp);
      },
      (error) =>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Ato Category...' });
      }

    );
  }
}

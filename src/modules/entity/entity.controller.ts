import { Controller, Get, Post, Body, Patch, Put, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { EntityService } from './entity.service';


@Controller('entity')
export class EntityController {

    constructor(private readonly entityService: EntityService) {}

    @Get('getAllContries')
    getAllContries(@Res() response) {

        this.entityService.getAllContries().subscribe((entities)=>{
            response.status(HttpStatus.OK).json(entities);
        });

    }

    @Get()
    getAllEntities(@Res() response) {

        this.entityService.getAllEntities().subscribe((entities)=>{
            response.status(HttpStatus.OK).json(entities);
        });

    }

    @Post()
    create(@Body() entity: any, @Res() response)
    {

        this.entityService.createEntity(entity).subscribe(
            (resp) => {
                response.status(HttpStatus.CREATED).json(resp);
            },
            (error) =>{
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación Entity...' });
            }

        );

    }

    @Put()
    update(@Body() entity: any, @Res() response)
    {
        this.entityService.updateEntity(entity).subscribe(
            (resp) => {
                response.status(HttpStatus.CREATED).json(resp);
            },
            (error) =>{
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización Entity...' });
            }

        );
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id)
    {
        this.entityService.deleteEntity(id).subscribe(
            (resp) => {
                response.status(HttpStatus.CREATED).json(resp);
            },
            (error) =>{
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación Entity...' });
            }

        );
    }

}

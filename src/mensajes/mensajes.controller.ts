import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMsgDto } from './dto/create-msg-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {

  constructor(
    private msgService: MensajesService
  ) {}
  @Post()
  create(@Body() createMsg: CreateMsgDto, @Res() response)
  {
    this.msgService.createMensaje(createMsg).then(
      (msg) => {
        response.status(HttpStatus.CREATED).json(msg);
      }
    ).catch(
      () => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación...' });
      }
    );
  }

  @Get()
  getAll(@Res() response)
  {
    this.msgService.getAll().then(
      (msgLista)=>{
      response.status(HttpStatus.OK).json(msgLista);
    }).catch(
      ()=>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtención de mensajes.' });
      });
  }

  @Put(':id')
  update(@Body() updateMsg: CreateMsgDto, @Res() response, @Param('id') idMsg)
  {
    this.msgService.updateMensaje(idMsg, updateMsg).then(
      (msg)=>{
        response.status(HttpStatus.OK).json(msg);
      }).catch(
        ()=>{
          response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al editar el mensaje.' });
        });
  }
  @Delete(':id')
  delete(@Res() response, @Param('id') idMsg)
  {
    this.msgService.deleteMensaje(idMsg).then(
      (msg)=>{
        response.status(HttpStatus.OK).json(msg);
      }
    ).catch(
      ()=>{
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error al eliminar el mensaje.' });
      }
    )
  }
}

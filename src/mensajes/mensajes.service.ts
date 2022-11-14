import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMsgDto } from './dto/create-msg-dto';
import { promisify } from 'util';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepo: Repository<Mensaje>
  ) {}

  async getAll():Promise<Mensaje[]>
  {
    return await this.mensajeRepo.find()
  }

  async createMensaje(msgNew: CreateMsgDto): Promise<Mensaje>
  {
    const nuevo = new Mensaje();
    nuevo.mensaje = msgNew.mensaje;
    nuevo.nick = msgNew.nick;
    return await this.mensajeRepo.save(nuevo);
  }

  async updateMensaje(idMensaje: number, msgUpdate: CreateMsgDto): Promise<Mensaje>
  {
    //console.error('idMensaje', msgUpdate);
    const update = await this.mensajeRepo.findOne({ where: {id: idMensaje} });
    update.mensaje = msgUpdate.mensaje;
    update.nick = msgUpdate.nick;
    return await this.mensajeRepo.save(update);
  }

  async deleteMensaje(idMensaje:number): Promise<any>
  {
    return await this.mensajeRepo.delete(idMensaje);
  }
}

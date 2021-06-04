import { Body, Controller, Delete, Get, HttpModule,HttpService, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { CrearPost } from '../crear-post';
import { AppI } from '../app.interface';
import { AxiosResponse } from 'axios';
@Controller('consult')
export class ConsultController {
    constructor(private readonly appService: AppService) {}
    @Get()
  findAll():  Observable<AxiosResponse<AppI[]>>{
    return this.appService.findAll()
  } 
}

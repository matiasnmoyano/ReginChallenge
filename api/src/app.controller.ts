import { Body, Controller, Delete, Get, HttpModule,HttpService, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { CrearPost } from './crear-post';
import { AppI } from './app.interface';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  FindBD():Promise<any>{
    return this.appService.FindBD()
  }
  @Post()
  createPost(@Body() post:CrearPost):Promise<AppI>{
    return this.appService.createPost(post)
  }
  @Delete(':id')
  deletePost (@Param('id') idPost: string):Promise<AppI>{
    return this.appService.deletePost(idPost)
  }
}

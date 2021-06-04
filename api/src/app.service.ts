import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppI } from './app.interface';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
@Injectable()

export class AppService {
  constructor(@InjectModel('Post') private readonly postModel: Model<AppI>,private httpService: HttpService ){}
  async createPost( post: AppI):Promise<AppI>{
    const nuevoPost= new this.postModel(post)
    return await nuevoPost.save()
  }
  findAll(): Observable<AxiosResponse<AppI[]>>{
    return  this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
  }
  async FindBD(): Promise<AppI[]>{
    return await this.postModel.find()
  }
 
  async deletePost(id:string):Promise<AppI>{
    return await this.postModel.findByIdAndRemove(id)
  }
}

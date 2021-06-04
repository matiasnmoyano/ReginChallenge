import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import "dotenv/config"
import { PostSchema } from './post.schema';
import { ConsultController } from './consult/consult.controller';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI,
      {
        useNewUrlParser: true
      }), 
    MongooseModule.forFeature([{name:'Post',schema: PostSchema}]),
    HttpModule
  ],
  controllers: [AppController, ConsultController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    CommentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://mokonan:AeCHXlr67BGji8fJ@cluster0.ekut9nr.mongodb.net/threads?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// AeCHXlr67BGji8fJ - codeCloud0
// mokonan - username
// mongodb+srv://<username>:<password>@cluster0.ekut9nr.mongodb.net/?retryWrites=true&w=majority

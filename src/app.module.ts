import { Module } from '@nestjs/common';
import { DbModule } from './db.module';
import { UsersModule } from './users/users/users.module';
import { CategoryModule } from './category/category.module';
import { PropertyModule } from './property/property.module';
import { LandmarksModule } from './landmarks/landmarks.module';
import { PropertyNearByModule } from './property-near-by/property-near-by.module';
import { MoreImgModule } from './more_img/more_img.module';
@Module({
  imports: [
    DbModule,
    UsersModule,
    CategoryModule,
    PropertyModule,
    LandmarksModule,
    PropertyNearByModule,
    MoreImgModule,
  ],
})
export class AppModule {}

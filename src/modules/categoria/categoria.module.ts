import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { DatabaseModule } from 'src/database/database.module';
import { categoriaProvaiders } from './categoria.provider';


@Module({
  imports:[DatabaseModule],
  controllers: [CategoriaController],
  providers: [...categoriaProvaiders,CategoriaService],
})
export class CategoriaModule {}

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    return this.repository.save(product);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.repository.findOneBy({ id });

    if (!product) return null;

    this.repository.merge(product, updateProductDto);
    return this.repository.save(product);
  }

  async remove(id: number) {
    const product = await this.repository.findOneBy({ id });

    if (!product) return null;

    return this.repository.remove(product);
  }
}

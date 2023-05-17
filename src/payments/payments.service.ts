import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { mercadopago } from 'mercadopago';
@Injectable()
export class PaymentsService {
  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  async mercadopagoPayment(createPaymentDto) {
    mercadopago.configurations.setAccessToken(`${process.env.ACCESS_TOKEN_MERCADOPAGO}`);
    
    const response = await mercadopago.payment.save(createPaymentDto);
    console.log(response);
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}

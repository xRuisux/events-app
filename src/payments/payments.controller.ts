import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/mercadopago')
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.mercadopagoPayment(createPaymentDto);
  }
}

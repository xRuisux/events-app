import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags } from '@nestjs/swagger';
import { RefundPaymentMercadoPago } from './dto/refund-payment-mercadopago.dto';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/mercadopago/createPayment')
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.mercadopagoPayment(createPaymentDto);
  }

  @Post('/mercadopago/refundPayment/:id')
  refund(@Param('id') id: string, @Body() refundPaymentMercadoPago: RefundPaymentMercadoPago) {
    return this.paymentsService.mercadopagoRefund(id , refundPaymentMercadoPago);
  }
}

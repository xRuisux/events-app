import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import * as mercadopago from 'mercadopago';
import { TicketsService } from 'src/tickets/tickets.service';
import { RefundPaymentMercadoPago } from './dto/refund-payment-mercadopago.dto';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly ticketService: TicketsService
    ) {}


  async mercadopagoRefund( id , refundPaymentMercadoPago: RefundPaymentMercadoPago) {
    mercadopago.configurations.setAccessToken('TEST-5962852605354841-051713-4c7c8b360b81a30707c536c15aad80a6-398155039');

    const response = await mercadopago.refund.save({payment_id: id, amount: refundPaymentMercadoPago.amount});

    if (response.status === 201) {
      const ticketRemoved = await this.ticketService.remove(id);

      if (ticketRemoved) {
        return response;
      }
    }

    return response;
  }

  async mercadopagoPayment(createPaymentDto: CreatePaymentDto) {
    mercadopago.configurations.setAccessToken('TEST-5962852605354841-051713-4c7c8b360b81a30707c536c15aad80a6-398155039');
    const email = createPaymentDto.payer.email;
    const response = await mercadopago.payment.save(createPaymentDto);
    
    if (response.status === 201) {
      await this.ticketService.create({ userEmail: email, eventId: Number(createPaymentDto.description), paymentId: response.body.id })
    }

    return response;
  }
}


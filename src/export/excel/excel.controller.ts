// excel.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExcelService } from './excel.service';
import { Public } from "../../auth/decorators/public.decorator";
import { OrderService } from "../../order/order.service";
@Public()
@Controller('excel')
export class ExcelController {
  constructor(
    private readonly excelService: ExcelService,
    private readonly orderService: OrderService,
  ) {}

  @Get('generate')
  async generateExcel(@Res() res: Response) {


    const orderData:any[][] = await this.orderService.getAll();
    const excelBuffer = await this.excelService.generateExcelWithData(
      orderData,
      3,
      1);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=generated.xlsx');
    res.send(excelBuffer);
  }
}

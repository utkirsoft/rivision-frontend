import { Module } from "@nestjs/common";
import { ExcelController } from "./excel.controller";
import { ExcelService } from "./excel.service";
import { OrderModule } from "../../order/order.module";


@Module({
  imports: [OrderModule],
  controllers: [ExcelController],
  providers: [ExcelService],
  exports: [ExcelService]
})
export class ExcelModule {
}

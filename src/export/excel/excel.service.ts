// excel.service.ts
import { Injectable } from "@nestjs/common";
import * as ExcelJS from "exceljs";
import * as fs from "fs/promises";
import { Readable } from "stream";
import { existsSync, mkdirSync } from "fs";

@Injectable()
export class ExcelService {
  async generateExcelWithData(items: any[][], start_row_index: number, sheet_number): Promise<Uint8Array> {

    // const worksheet = workbook.addWorksheet('Sheet 1');

    // Load your template and set up the worksheet
    // For example:

    const templateBuffer = await fs.readFile("files/template.xlsx");
    const workbook = new ExcelJS.Workbook();
    const fileWorkbook = await workbook.xlsx.read(
      this.bufferToStream(templateBuffer)
    );

    const worksheet = fileWorkbook.getWorksheet(sheet_number);

    // worksheet.duplicateRow(start_row_index, 1000 - 1, true);

    for (let row = 0; row < items.length; row++) {
      const order = items[row];

      let column = 0;


      // №

      worksheet.getCell(
        `${this.numberToLetters(0)}${start_row_index + row}`
      ).value = row + 1;

      worksheet.getCell(
        `${this.numberToLetters(0)}${start_row_index + row}`
      ).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
      // Ҳудудий бошқармалар
      worksheet.getCell(`${this.numberToLetters(1)}${start_row_index + row}`).value = order["regionId"];

      worksheet.getCell(`${this.numberToLetters(1)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Бўлим номи
      worksheet.getCell(`${this.numberToLetters(2)}${start_row_index + row}`).value = order["districtId"];

      worksheet.getCell(`${this.numberToLetters(2)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Ижрочи ходим лавозими
      worksheet.getCell(`${this.numberToLetters(3)}${start_row_index + row}`).value = order["positionName"];

      worksheet.getCell(`${this.numberToLetters(3)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Ф.И.Ш
      worksheet.getCell(`${this.numberToLetters(4)}${start_row_index + row}`).value = order["fullName"];

      worksheet.getCell(`${this.numberToLetters(4)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Давр (йил)
      worksheet.getCell(`${this.numberToLetters(5)}${start_row_index + row}`).value = order["year"];

      worksheet.getCell(`${this.numberToLetters(5)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Хабарнома юборилган субъект номи
      worksheet.getCell(`${this.numberToLetters(6)}${start_row_index + row}`).value = order["entityName"];

      worksheet.getCell(`${this.numberToLetters(6)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// СТИР
      worksheet.getCell(`${this.numberToLetters(7)}${start_row_index + row}`).value = order["tin"];

      worksheet.getCell(`${this.numberToLetters(7)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Аниқланган ҳолат санаси
      worksheet.getCell(`${this.numberToLetters(8)}${start_row_index + row}`).value = order["identifiedDate"];

      worksheet.getCell(`${this.numberToLetters(8)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Ҳолатнинг қисқача мазмуни
      worksheet.getCell(`${this.numberToLetters(9)}${start_row_index + row}`).value = order["situationShort"];

      worksheet.getCell(`${this.numberToLetters(9)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Аниқланган солиқлар ва йиғимлар суммаси
      worksheet.getCell(`${this.numberToLetters(10)}${start_row_index + row}`).value = order["taxSum"];

      worksheet.getCell(`${this.numberToLetters(10)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Аниқланган банкдан ташқари ноқонуний нақд пул айланмаси суммаси
      worksheet.getCell(`${this.numberToLetters(11)}${start_row_index + row}`).value = order["cashSum"];

      worksheet.getCell(`${this.numberToLetters(11)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Ноқонуний фойдаланилган имтиёз суммаси
      worksheet.getCell(`${this.numberToLetters(12)}${start_row_index + row}`).value = order["benefitSum"];

      worksheet.getCell(`${this.numberToLetters(12)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Бошқа ҳолатлар бўйича сумма
      worksheet.getCell(`${this.numberToLetters(13)}${start_row_index + row}`).value = order["otherSum"];

      worksheet.getCell(`${this.numberToLetters(13)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Рақами
      worksheet.getCell(`${this.numberToLetters(14)}${start_row_index + row}`).value = order["orderNumber"];

      worksheet.getCell(`${this.numberToLetters(14)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Санаси
      worksheet.getCell(`${this.numberToLetters(15)}${start_row_index + row}`).value = order["orderDate"];

      worksheet.getCell(`${this.numberToLetters(15)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Тасдиғини топган сумма
      worksheet.getCell(`${this.numberToLetters(16)}${start_row_index + row}`).value = order["confirmedSum"];

      worksheet.getCell(`${this.numberToLetters(16)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Аниқлаштирилган ҳисоб-китоб топширилиши санаси
      worksheet.getCell(`${this.numberToLetters(17)}${start_row_index + row}`).value = order["sureDate"];

      worksheet.getCell(`${this.numberToLetters(17)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Аниқлаштирилган ҳисоб-китоб суммаси
      worksheet.getCell(`${this.numberToLetters(18)}${start_row_index + row}`).value = order["sureSum"];

      worksheet.getCell(`${this.numberToLetters(18)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// 30 кунлик муддатда ихтиёрий тўлов амалга оширилган сумма
      worksheet.getCell(`${this.numberToLetters(19)}${start_row_index + row}`).value = order["sum30"];

      worksheet.getCell(`${this.numberToLetters(19)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// 30 кунлик муддатда тўланмаган сумма
      worksheet.getCell(`${this.numberToLetters(20)}${start_row_index + row}`).value = order["sumNot30"];

      worksheet.getCell(`${this.numberToLetters(20)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Сана
      worksheet.getCell(`${this.numberToLetters(21)}${start_row_index + row}`).value = order["justifyDate"];

      worksheet.getCell(`${this.numberToLetters(21)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Рақам
      worksheet.getCell(`${this.numberToLetters(22)}${start_row_index + row}`).value = order["justifyNumber"];

      worksheet.getCell(`${this.numberToLetters(22)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Терговга қадар текширув бошланган (1-шакл китобдан рўйхатдан ўтган) сана
      worksheet.getCell(`${this.numberToLetters(23)}${start_row_index + row}`).value = order["formOneDate"];

      worksheet.getCell(`${this.numberToLetters(23)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Рақами
      worksheet.getCell(`${this.numberToLetters(24)}${start_row_index + row}`).value = order["criminalNumber"];

      worksheet.getCell(`${this.numberToLetters(24)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Санаси
      worksheet.getCell(`${this.numberToLetters(25)}${start_row_index + row}`).value = order["criminalDate"];

      worksheet.getCell(`${this.numberToLetters(25)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Рақами
      worksheet.getCell(`${this.numberToLetters(26)}${start_row_index + row}`).value = order["administrativeNumber"];

      worksheet.getCell(`${this.numberToLetters(26)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Санаси
      worksheet.getCell(`${this.numberToLetters(27)}${start_row_index + row}`).value = order["administrativeDate"];

      worksheet.getCell(`${this.numberToLetters(27)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Рақами
      worksheet.getCell(`${this.numberToLetters(28)}${start_row_index + row}`).value = order["refusedNumber"];

      worksheet.getCell(`${this.numberToLetters(28)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Санаси
      worksheet.getCell(`${this.numberToLetters(29)}${start_row_index + row}`).value = order["refusedDate"];

      worksheet.getCell(`${this.numberToLetters(29)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// моддаси
      worksheet.getCell(`${this.numberToLetters(30)}${start_row_index + row}`).value = order["refusedArticle"];

      worksheet.getCell(`${this.numberToLetters(30)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Юборилган сана
      worksheet.getCell(`${this.numberToLetters(31)}${start_row_index + row}`).value = order["criminalToNumber"];

      worksheet.getCell(`${this.numberToLetters(31)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Жиноят иши рақами
      worksheet.getCell(`${this.numberToLetters(32)}${start_row_index + row}`).value = order["criminalToDate"];

      worksheet.getCell(`${this.numberToLetters(32)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// сана
      worksheet.getCell(`${this.numberToLetters(33)}${start_row_index + row}`).value = order["regionToNumber"];

      worksheet.getCell(`${this.numberToLetters(33)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// хат рақами
      worksheet.getCell(`${this.numberToLetters(34)}${start_row_index + row}`).value = order["regionToDate"];

      worksheet.getCell(`${this.numberToLetters(34)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// юборилган ҳудуд Вилоят
      worksheet.getCell(`${this.numberToLetters(35)}${start_row_index + row}`).value = order["regionToId"];

      worksheet.getCell(`${this.numberToLetters(35)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Туман
      worksheet.getCell(`${this.numberToLetters(35)}${start_row_index + row}`).value = order["districtToId"];

      worksheet.getCell(`${this.numberToLetters(35)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// сана
      worksheet.getCell(`${this.numberToLetters(36)}${start_row_index + row}`).value = order["taxToNumber"];

      worksheet.getCell(`${this.numberToLetters(36)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// хат рақами
      worksheet.getCell(`${this.numberToLetters(37)}${start_row_index + row}`).value = order["taxToDate"];

      worksheet.getCell(`${this.numberToLetters(37)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Жиноят иши бўйича текшириш (тафтиш) якунланган сана
      worksheet.getCell(`${this.numberToLetters(38)}${start_row_index + row}`).value = order["checkDate"];

      worksheet.getCell(`${this.numberToLetters(38)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Қўшимча ҳисобланган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси
      worksheet.getCell(`${this.numberToLetters(39)}${start_row_index + row}`).value = order["sum40"];

      worksheet.getCell(`${this.numberToLetters(39)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Шундан ундирилгани
      worksheet.getCell(`${this.numberToLetters(40)}${start_row_index + row}`).value = order["manufacturedSum40"];

      worksheet.getCell(`${this.numberToLetters(40)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Ҳукумат ва бошқа орган қарорларига асосан ҳисобдан чиқарилган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси
      worksheet.getCell(`${this.numberToLetters(41)}${start_row_index + row}`).value = order["sum42"];

      worksheet.getCell(`${this.numberToLetters(41)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Солиқ қарздорлиги суммаси
      worksheet.getCell(`${this.numberToLetters(42)}${start_row_index + row}`).value = order["debtorSum"];

      worksheet.getCell(`${this.numberToLetters(42)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
// Изоҳ
      worksheet.getCell(`${this.numberToLetters(43)}${start_row_index + row}`).value = order["commentary"];

      worksheet.getCell(`${this.numberToLetters(43)}${start_row_index + row}`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };


    }


    // Insert data into the worksheet
    // You'll need to iterate over your data array and populate the cells accordingly
    // const data = [
    //   {name:'qqqqqqqqqq0', age:'111'},
    //   {name:'qqqqqqqqqq1', age:'211'},
    //   {name:'qqqqqqqqqq2', age:'311'},
    //   {name:'qqqqqqqqqq3', age:'411'},
    //   {name:'qqqqqqqqqq4', age:'511'},
    //   {name:'qqqqqqqqqq5', age:'611'},
    // ]

    // For example:
    // data.forEach((item, index) => {
    //
    // worksheet.getCell(`A${index + 3}`).value = item.name;
    //
    // worksheet.getCell(`B${index + 3}`).value = item.age;
    //   // ...
    // });

    // Save the Excel file to a buffer
    const buffer: any = await workbook.xlsx.writeBuffer();
    await this.writeFile(buffer, "files/", "a");
    return buffer;
  }

  async writeFile(buffer: any, file_path: string, extra) {
    // const { tin, company } = extra;
    const file_name = `./excels/${extra}-${extra}/`;
    existsSync(file_name) || mkdirSync(file_name, { recursive: true });

    const file_ext = file_path.slice(-5);
    const path = file_name + "1111" + file_ext;
    try {
      await fs.unlink(path);
    } catch (e) {
      // console.log(e);
    }
    try {
      await fs.writeFile(path, buffer);
    } catch (e) {
      console.log("e", e);
    }
  }

  bufferToStream = (binary) => {
    return new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });
  };

  numberToLetters(num: number) {
    let letters = "";
    while (num >= 0) {
      letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[num % 26] + letters;
      num = Math.floor(num / 26) - 1;
    }
    return letters;
  }
}

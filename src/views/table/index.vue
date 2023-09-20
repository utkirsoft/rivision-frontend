
<template>

  <div class="app-container">
    <el-card shadow="never" style="margin-top: 2px;" class="box-card">
      <template #header>
        <div class="card-header">
          <span style="color: #005cc5"> <b>Хабарномалар жадвали</b></span>
        </div>
      </template>
      <el-button type="primary" size="mini" icon="el-icon-plus" style="margin-bottom: 20px" @click="handleRowClick()">Янги хабарнома яратиш</el-button>
      <el-button class="button" size="mini" type="primary"><i class="el-icon-download" style="padding-right: 8px;" />Ms excel</el-button>
      <el-table
        :data="orderData"
        class="padded-table"
        border
        stripe
        height="650"
        style="width: 100%"
        row-key="id"
      >
        <el-table-column v-if="true" prop="id" label="id" />
        <el-table-column prop="userId" width="160">
          <template slot="header">
            <p class="table-header-text">
              <span>Ходим</span>
            </p>
          </template>
          <el-table-column width="150">
            <template slot="header">
              <p class="table-header-input">
                <el-input
                  clearable
                  class="table-header-input"
                  size="mini"
                  placeholder="ss"
                />
              </p>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="orderDate" label="Санаси" align="center" width="160">
          <template slot-scope="scope">
            {{ formatDate(scope.row.orderDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="regionId" label="Ҳудудий бошқарма" align="center" width="160" />
        <el-table-column prop="districtId" label="Бўлим номи" align="center" width="160" />
        <el-table-column prop="year" label="Давр (йил)" align="center" width="160" />
        <el-table-column prop="tin" label="СТИР" align="center" width="160" />
        <el-table-column prop="entityName" label="Хабарнома юборилган субъект номи" align="center" width="160" />
        <el-table-column prop="orderNumber" label="Рақами" align="center" width="160" />
        <el-table-column prop="identifiedDate" label="Аниқланган ҳолат санаси" align="center" width="160" />
        <el-table-column prop="situationShort" label="Ҳолатнинг қисқача мазмуни" width="160" />
        <el-table-column prop="taxSum" label="Аниқланган солиқлар ва йиғимлар суммаси" align="center" width="260" />
        <el-table-column prop="cashSum" label="Аниқланган банкдан ташқари ноқонуний нақд пул айланмаси суммаси" align="center" width="260" />
        <el-table-column prop="benefitSum" label="Ноқонуний фойдаланилган имтиёз суммаси" align="center" width="260" />
        <el-table-column prop="otherSum" label="Бошқа ҳолатлар бўйича сумма" align="center" width="160" />
        <el-table-column prop="confirmedSum" label="Тасдиғини топган сумма" align="center" width="160" />
        <el-table-column prop="sureDate" label="Аниқлаштирилган ҳисоб-китоб топширилиши санаси" align="center" width="160" />
        <el-table-column prop="sureSum" label="Аниқлаштирилган ҳисоб-китоб суммаси" align="center" width="160" />
        <el-table-column prop="sum30" label="30 кунлик муддатда ихтиёрий тўлов амалга оширилган сумма" align="center" width="160" />
        <el-table-column prop="sumNot30" label="30 кунлик муддатда тўланмаган сумма" align="center" width="160" />
        <el-table-column prop="justifyDate" label="Асослантирувчи ҳужжат тақдим этилган хабарнома санаси" align="center" width="160" />
        <el-table-column prop="justifyNumber" label="Асослантирувчи ҳужжат тақдим этилган хабарнома рақами" align="center" width="160" />
        <el-table-column prop="formOneDate" label="Терговга қадар текширув бошланган (1-шакл китобдан рўйхатдан ўтган) сана" align="center" width="160" />
        <el-table-column prop="criminalNumber" label="Қўзғатилган жиноят иши рақами" align="center" width="160" />
        <el-table-column prop="criminalDate" label="Қўзғатилган жиноят иши санаси" align="center" width="160" />
        <el-table-column prop="administrativeNumber" label="Юритилган маъмурий иш рақами" align="center" width="160" />
        <el-table-column prop="administrativeDate" label="Юритилган маъмурий иш санаси" align="center" width="160" />
        <el-table-column prop="refusedNumber" label="Жиноят ишини қўзғатишни рад қилинган рақами" align="center" width="160" />
        <el-table-column prop="refusedDate" label="Жиноят ишини қўзғатишни рад қилинган санаси" align="center" width="160" />
        <el-table-column prop="refusedArticle" label="Жиноят ишини қўзғатишни рад қилинган моддаси" align="center" width="160" />
        <el-table-column prop="criminalToNumber" label="Мавжуд жиноят ишига қўшиш учун юборилган хабарнома рақами" align="center" width="160" />
        <el-table-column prop="criminalToDate" label="Мавжуд жиноят ишига қўшиш учун юборилган хабарнома санаси" align="center" width="160" />
        <el-table-column prop="regionToNumber" label="Бошқа ҳудудга юборилган хабарнома рақами" align="center" width="160" />
        <el-table-column prop="regionToDate" label="Бошқа ҳудудга юборилган хабарнома санаси" align="center" width="160" />
        <el-table-column prop="regionToId" label="юборилган ҳудуд" align="center" width="160" />
        <el-table-column prop="districtToId" label="юборилган ҳудуд" align="center" width="160" />
        <el-table-column prop="taxToNumber" label="Солиқ органларига қайта юборилган хабарнома рақами" align="center" width="160" />
        <el-table-column prop="taxToDate" label="Солиқ органларига қайта юборилган хабарнома санаси" align="center" width="160" />
        <el-table-column prop="checkDate" label="Жиноят иши бўйича текшириш (тафтиш) якунланган сана" align="center" width="160" />
        <el-table-column prop="sum40" label="Қўшимча ҳисобланган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси" align="center" width="160" />
        <el-table-column prop="manufacturedSum40" label="Шундан ундирилгани" align="center" width="160" />
        <el-table-column prop="sum42" label="Ҳукумат ва бошқа орган қарорларига асосан ҳисобдан чиқарилган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси" align="center" width="160" />
        <el-table-column prop="debtorSum" label="Солиқ қарздорлиги суммаси" align="center" width="160" />
        <el-table-column prop="commentary" label="Изоҳ" align="center" width="160" />
        <el-table-column
          fixed="right"
          width="60"
        ><template slot="header">
           <div style="display: flex; align-items: center">
             <el-dropdown-item icon="el-icon-more" />
           </div>
         </template>
          <template slot-scope="scope">
            <div class="cell">
              <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                  <i class="el-icon-arrow-down" />
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">

                  <el-dropdown-item @onclick="handleRowClick((scope.row.id))">
                    <el-button type="text" size="mini" icon="el-icon-edit" @click="handleRowClick((scope.row.id))">
                      Тахрирлаш
                    </el-button>
                  </el-dropdown-item>

                  <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">Бошка худудга юбориш</span>
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">Учириш</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>

      </el-table>
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 8px">
        <el-pagination
          background
          :page-sizes="[10, 20, 50, 100]"
          layout="sizes, prev, pager, next, jumper"
        />
        <!--      <span style="margin-left: 16px">Всего: {{ paginationQuery.total }} </span>-->
      </div>
      <el-dialog
        title="Хабарнома"
        :visible.sync="dialogVisible"
        fullscreen
        :before-close="handleClose"
        :close-on-click-modal="false"
        top="5vh"
      >
        <el-form
          ref="form"
          :model="editOrderData"
          label-position="left"
          size="mini"
        >
          <el-scrollbar>
            <el-card class="el-card__body">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="Хабарнома маълумотлари" name="first">
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-form-item label="Бошкарма (махкама)" label-width="200px">
                        <el-select v-model="editOrderData.regionId" @change="fetchDistrictsByRegion(editOrderData.regionId)">
                          <el-option
                            v-for="region in regions"
                            :key="region.id"
                            :label="region.name"
                            :value="region.id"
                          />
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Булим" label-width="200px">
                        <el-select v-model="editOrderData.districtId">
                          <el-option
                            v-for="district in districts"
                            :key="district.id"
                            :label="district.name"
                            :value="district.id"
                          />
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Ижрочи ходим лавозими" label-width="200px">
                        <el-input v-model="editOrderData.positionName" clearable />
                      </el-form-item>
                      <el-form-item label="Ижрочи ходим ФИШ" label-width="200px">
                        <el-input v-model="editOrderData.fullName" clearable />
                      </el-form-item>

                      <el-form-item label="рақами" label-width="200px">
                        <el-input v-model="editOrderData.orderNumber" />
                      </el-form-item>

                      <el-form-item label="санаси">
                        <el-date-picker v-model="editOrderData.orderDate" />
                      </el-form-item>

                    </el-col>

                    <el-col :span="8">

                      <el-row>

                        <el-form-item label="СТИР" label-width="200px">
                          <el-input v-model="editOrderData.tin" />
                        </el-form-item>
                        <el-form-item label="Cубъект номи" label-width="200px">
                          <el-input v-model="editOrderData.entityName" />
                        </el-form-item>
                        <el-form-item label="Аниқланган ҳолат санаси" label-width="200px">
                          <el-date-picker v-model="editOrderData.identifiedDate" />
                        </el-form-item>
                      </el-row>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="Аниқланган солиқлар ва йиғимлар суммаси">
                        <el-input v-model="editOrderData.taxSum" clearable />
                      </el-form-item>
                      <el-form-item label="Аниқланган банкдан ташқари ноқонуний нақд пул айланмаси суммаси" class="el-form-item_label">
                        <el-input v-model="editOrderData.cashSum" clearable />
                      </el-form-item>
                      <el-form-item label="Ноқонуний фойдаланилган имтиёз суммаси">
                        <el-input v-model="editOrderData.benefitSum" clearable />
                      </el-form-item>
                      <el-form-item label="Бошқа ҳолатлар бўйича сумма">
                        <el-input v-model="editOrderData.otherSum" clearable />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="40">
                    <el-col :span="24">
                      <el-form-item label="Ҳолатнинг қисқача мазмуни" label-width="250px">
                        <el-input
                          v-model="editOrderData.situationShort"
                          type="textarea"
                          clearable
                          :autosize="{ minRows: 2, maxRows: 4}"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>

                </el-tab-pane>
                <el-tab-pane label="Амалга оширилган ишлар" name="second">
                  <el-row :gutter="40">
                    <el-col :span="12">
                      <el-form-item label="Тасдиғини топган сумма">
                        <el-input v-model="editOrderData.confirmedSum" />
                      </el-form-item>
                      <el-form-item label="Аниқлаштирилган ҳисоб-китоб топширилиши санаси">
                        <el-date-picker v-model="editOrderData.sureDate" />
                      </el-form-item>
                      <el-form-item label="Аниқлаштирилган ҳисоб-китоб суммаси">
                        <el-input v-model="editOrderData.sureSum" />
                      </el-form-item>
                      <el-form-item label="30 кунлик муддатда ихтиёрий тўлов амалга оширилган сумма">
                        <el-input v-model="editOrderData.sum30" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="30 кунлик муддатда тўланмаган сумма">
                        <el-input v-model="editOrderData.sumNot30" />
                      </el-form-item>
                      <el-form-item label="Асослантирувчи ҳужжат тақдим этилган хабарнома санаси">
                        <el-date-picker v-model="editOrderData.justifyDate" />
                      </el-form-item>
                      <el-form-item label="Асослантирувчи ҳужжат тақдим этилган хабарнома рақами">
                        <el-input v-model="editOrderData.justifyNumber" />
                      </el-form-item>
                      <el-form-item label="Терговга қадар текширув бошланган (1-шакл китобдан рўйхатдан ўтган) сана">
                        <el-date-picker v-model="editOrderData.formOneDate" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="Кўрилган чоралар" name="third">
                  <el-col :span="8">
                    <el-form-item label="Қўзғатилган жиноят иши рақами">
                      <el-input v-model="editOrderData.criminalNumber" />
                    </el-form-item>
                    <el-form-item label="Қўзғатилган жиноят иши санаси">
                      <el-date-picker v-model="editOrderData.criminalDate" />
                    </el-form-item>
                    <el-form-item label="Юритилган маъмурий иш рақами">
                      <el-input v-model="editOrderData.administrativeNumber" />
                    </el-form-item>
                    <el-form-item label="Юритилган маъмурий иш санаси">
                      <el-date-picker v-model="editOrderData.administrativeDate" />
                    </el-form-item>
                    <el-form-item label="Жиноят ишини қўзғатишни рад қилинган рақами">
                      <el-input v-model="editOrderData.refusedNumber" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="Жиноят ишини қўзғатишни рад қилинган санаси">
                      <el-date-picker v-model="editOrderData.refusedDate" />
                    </el-form-item>
                    <el-form-item label="Жиноят ишини қўзғатишни рад қилинган моддаси">
                      <el-input v-model="editOrderData.refusedArticle" />
                    </el-form-item>
                    <el-form-item label="Мавжуд жиноят ишига қўшиш учун юборилган хабарнома рақами">
                      <el-input v-model="editOrderData.criminalToNumber" />
                    </el-form-item>
                    <el-form-item label="Мавжуд жиноят ишига қўшиш учун юборилган хабарнома санаси">
                      <el-date-picker v-model="editOrderData.criminalToDate" />
                    </el-form-item>
                    <el-form-item label="Бошқа ҳудудга юборилган хабарнома рақами">
                      <el-input v-model="editOrderData.regionToNumber" />
                    </el-form-item>
                    <el-form-item label="Бошқа ҳудудга юборилган хабарнома санаси">
                      <el-date-picker v-model="editOrderData.regionToDate" />
                    </el-form-item>
                    <el-form-item label="Бошқа ҳудуд (Бошкарма)" label-width="200px">
                      <el-select v-model="editOrderData.regionToId" @change="fetchDistrictsByRegion(editOrderData.regionToId)">
                        <el-option
                          v-for="region in regions"
                          :key="region.id"
                          :label="region.name"
                          :value="region.id"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="Бошқа ҳудуд (булим)" label-width="200px">
                      <el-select v-model="editOrderData.districtToId">
                        <el-option
                          v-for="district in districts"
                          :key="district.id"
                          :label="district.name"
                          :value="district.id"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="Солиқ органларига қайта юборилган хабарнома рақами">
                      <el-input v-model="editOrderData.taxToNumber" />
                    </el-form-item>
                    <el-form-item label="Солиқ органларига қайта юборилган хабарнома санаси">
                      <el-date-picker v-model="editOrderData.taxToDate" />
                    </el-form-item>
                    <el-form-item label="Жиноят иши бўйича текшириш (тафтиш) якунланган сана">
                      <el-date-picker v-model="editOrderData.checkDate" />
                    </el-form-item>
                    <el-form-item label="Қўшимча ҳисобланган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси">
                      <el-input v-model="editOrderData.sum40" />
                    </el-form-item>
                    <el-form-item label="Шундан ундирилгани">
                      <el-input v-model="editOrderData.manufacturedSum40" />
                    </el-form-item>
                    <el-form-item label="Ҳукумат ва бошқа орган қарорларига асосан ҳисобдан чиқарилган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси">
                      <el-input v-model="editOrderData.sum42" />
                    </el-form-item>
                    <el-form-item label="Солиқ қарздорлиги суммаси">
                      <el-input v-model="editOrderData.debtorSum" />
                    </el-form-item>
                  </el-col>
                </el-tab-pane>
                <el-tab-pane label="Изоҳ" name="fifth">
                  <el-form-item label="Ҳолатнинг қисқача мазмуни" label-width="250px">
                    <el-input
                      v-model="editOrderData.commentary"
                      type="textarea"
                      clearable
                      :autosize="{ minRows: 7, maxRows: 10}"
                    />
                  </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="Файллар" name="forth">
                  <el-row :gutter="40">
                    <el-col :span="12">
                      <el-form-item label="Хабарнома">
                        <el-upload
                          name="fileNotify"
                          class="upload-demo"
                          action=""
                          :on-change="handleFileNotifyChange"
                          :on-preview="handleFileNotifyPreview"
                          :file-list="editOrderData.fileNotify||[]"
                          accept=".pdf"
                          :auto-upload="false"
                        >
                          <el-button size="mini" type="primary" style="width: 100%">Юклаш</el-button>
                          <div slot="tip" class="el-upload__tip">Хабарнома PDF форматда ва хажми 10 Mb дан ошмаслиги лозим </div>
                        </el-upload>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="30 кунлик муддатда ихтиёрий тўлов амалга оширилган">
                        <el-upload
                          name="file30"
                          class="upload-demo"
                          action=""
                          :on-change="handleFile30Change"
                          :on-preview="handleFile30Preview"
                          :file-list="editOrderData.file30||[]"
                          accept=".pdf"
                          :auto-upload="false"
                        >
                          <el-button size="mini" type="primary" style="width: 100%">Юклаш</el-button>
                        </el-upload>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-scrollbar>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Бекор</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Саклаш
            </el-button>
          </span>
        </template>
      </el-dialog>
      <el-dialog
        :fullscreen="true"
        :show-close="false"
        :visible.sync="fileViewVisible"
      >
        <span slot="title" style="float: left">
          <el-button icon="el-icon-close" circle @click="fileViewVisible = false" />
        </span>
        <div v-if="fileViewVisible" style="height: calc(100vh - 100px)">
          <!--                    {{ fileViewUrl }}-->
          <iframe
            style=" width: 100%;height: 100%"
            :src="fileViewUrl"
            controls
            controlsList="nodownload"
          />
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script src="./order.js">
</script>
<style scoped lang="css">
.el-form-item_label {
  line-height: 10px;
  padding: 0 2px 0 0;
}
</style>
<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-table thead.is-group th {
  background: #F5F7FA;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
}

::v-deep .el-table th {
                           padding: 0 0;
                           min-width: 0;
                           -webkit-box-sizing: border-box;
                           box-sizing: border-box;
                           text-overflow: ellipsis;
                           vertical-align: middle;
                           position: relative;
                         }

.el-table ::v-deep th .cell {
  padding: 0 0 0 0;

  .caret-wrapper {
    float: right;
    margin-bottom: -8px
  }

  .table-header-text {
    margin: 2px 4px 0px 4px;
    font-size: 13px;
    color: black;
    text-align: center;
    float: left;
  }

  .table-header-input {
    margin: 2px 8px 2px 2px;
    font-size: 13px;
    color: black;
    text-align: center;
    float: left;
    width: calc(100% - 4px);
  }

  .table-header-select {
    margin: 1px 4px 1px 4px;
  }

}
.el-card__body {
  height: 700px;
  padding: 5px 10px;
}
.el-dialog__body {
  padding: 10px 5px;
}
.page-content {
  height: calc(100vh - 220px);
  margin: -14px;

  .page-header {
    background: white;
    padding: 4px 4px;

    .page-title {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.delete-row-table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  td {
    border-bottom: 1px solid #dcdfe6;
    padding: 4px 16px;
    max-width: 300px;
  }
}
</style>

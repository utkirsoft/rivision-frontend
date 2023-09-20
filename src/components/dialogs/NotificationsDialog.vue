🆄🆃🅺🅸🆁™ 🇺🇿, [14.09.2023 14:50]
<template>
  <div>
    <el-dialog
      title="Хабарномалар"
      :visible="dialogOpen"
      width="80%"
      :close-on-click-modal="false"
      style="margin-top: -10vh"
      :before-close="handleClose"
    >
      <span class="notifications-form">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-position="top" label-width="120px">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="Ҳудудий бошқармалар" prop="region_id">

                <el-select
                  v-model="ruleForm.region_id"
                  style="width: 100%;"
                  placeholder="Танлаш"
                  @change="fetchDistrictsByRegion(ruleForm.region_id)"
                >
                  <el-option
                    v-for="item in regions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Бўлим номи" prop="district_id">
                <el-select v-model="ruleForm.district_id" style="width: 100%;" placeholder="Танлаш">
                  <el-option
                    v-for="district in districts"
                    :key="district.id"
                    :label="district.name"
                    :value="district.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Ижрочи ходим лавозими" prop="position_name">
                <el-input v-model="ruleForm.position_name" style="width: 100%;" placeholder="Танлаш" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Давр (йил)" prop="year">
                <el-input v-model="ruleForm.year" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Хабарнома юборилган субъект номи" prop="entity_name">
                <el-input v-model="ruleForm.entity_name" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="СТИР" prop="tin">
                <el-input
                  v-model="ruleForm.tin"
                  style="width: 100%;"
                  @input="filterNonNumeric('tin')"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Аниқланган ҳолат санаси" prop="identified_date">
                <el-date-picker
                  v-model="ruleForm.identified_date"
                  style="width: 100%;"
                  type="date"
                  format="dd.MM.yyyy"
                  value-format="yyyy-MM-dd"
                  placeholder="Санани танланг"
                />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Ҳолатнинг қисқача мазмуни" prop="situation_short">
                <el-input v-model="ruleForm.situation_short" type="textarea" :rows="4" />
              </el-form-item>
            </el-col>
            <fieldset>
              <legend> Шу жумладан </legend>
              <el-col :span="12">
                <el-form-item label="Аниқланган солиқлар ва йиғимлар суммаси" prop="tax_sum">
                  <el-input v-model="ruleForm.tax_sum" @input="filterNonNumeric('tax_sum')" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  label="Аниқланган банкдан ташқари ноқонуний нақд пул айланмаси суммаси"
                  prop="cash_sum"
                >
                  <el-input v-model="ruleForm.cash_sum" @input="filterNonNumeric('cash_sum')" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Ноқонуний фойдаланилган имтиёз суммаси" prop="benefit_sum">
                  <el-input
                    v-model="ruleForm.benefit_sum"
                    @input="filterNonNumeric('benefit_sum')"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Бошқа ҳолатлар бўйича сумма" prop="other_sum">
                  <el-input v-model="ruleForm.other_sum" @input="filterNonNumeric('other_sum')" />
                </el-form-item>
              </el-col>
            </fieldset>
            <fieldset style="margin: 20px 0">
              <legend>
                Юборилган хабарнома
              </legend>
              <el-col :span="8">
                <el-form-item label="Рақами" prop="order_number">
                  <el-input
                    v-model="ruleForm.order_number"
                    @input="filterNonNumeric('order_number')"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Санаси" prop="order_date">
                  <el-date-picker
                    v-model="ruleForm.order_date"
                    style="width: 100%;"
                    type="date"
                    format="dd.MM.yyyy"
                    value-format="yyyy-MM-dd"
                    placeholder="Санани танланг"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Файл юклаш" style="height: 110px; " prop="fileNotify">

                  <el-upload
                    action=""
                    :auto-upload="false"
                    class="upload-demo"
                    multiple
                    :show-file-list="true"
                    :on-preview="handleView"
                    :file-list="fileNotifyList"
                    :on-change="handleFileNotifyChange"
                  >
                    <div slot="tip" class="el-upload__tip" />
                    <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                  </el-upload>
                </el-form-item>
              </el-col>
            </fieldset>
            <el-col :span="8">
              <el-form-item label="Тасдиғини топган сумма" prop="confirmed_sum">
                <el-input
                  v-model="ruleForm.confirmed_sum"
                  @input="filterNonNumeric('confirmed_sum')"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Аниқлаштирилган ҳисоб-китоб топширилиши санаси" prop="sure_date">
                <el-date-picker
                  v-model="ruleForm.sure_date"
                  style="width: 100%;"
                  type="date"
                  format="dd.MM.yyyy"
                  value-format="yyyy-MM-dd"
                  placeholder="Санани танланг"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Аниқлаштирилган ҳисоб-китоб суммаси" prop="sure_sum">
                <el-input v-model="ruleForm.sure_sum" @input="filterNonNumeric('sure_sum')" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="30 кунлик муддатда ихтиёрий тўлов амалга оширилган сумма" prop="sum30">
                <el-input v-model="ruleForm.sum30" @input="filterNonNumeric('sum30')" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Файл юклаш" style="height: 110px; overflow: hidden" prop="file30">
                <el-upload
                  :auto-upload="false"
                  action="http://localhost:8080/notifications"
                  class="upload-demo"
                  :multiple="false"
                  :file-list="file30List"
                >
                  <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="30 кунлик муддатда тўланмаган сумма" prop="sum_not30">
                <el-input v-model="ruleForm.sum_not30" @input="filterNonNumeric('sum_not30')" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <fieldset>
                <legend>Асослантирувчи ҳужжат тақдим этилган хабарномалар</legend>
                <el-col :span="8">
                  <el-form-item label="Рақами" prop="justify_number">
                    <el-input
                      v-model="ruleForm.justify_number"
                      @input="filterNonNumeric('justify_number')"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="Файл юклаш" style="height: 110px; overflow: hidden" prop="fileJustify">
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileJustifyList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Санаси" prop="justify_date">
                    <el-date-picker
                      v-model="ruleForm.justify_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="24">
              <el-form-item
                label="Терговга қадар текширув бошланган (1-шакл китобдан рўйхатдан ўтган) сана"
                prop="form_one_date"
              >
                <el-date-picker
                  v-model="ruleForm.form_one_date"
                  style="width: 100%;"
                  type="date"
                  format="dd.MM.yyyy"
                  value-format="yyyy-MM-dd"
                  placeholder="Санани танланг"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <fieldset>
                <legend>Қўзғатилган жиноят иши</legend>
                <el-col :span="8">
                  <el-form-item label="Рақами" prop="criminal_number">
                    <el-input
                      v-model="ruleForm.criminal_number"
                      @input="filterNonNumeric('criminal_number')"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Санаси" prop="criminal_date">
                    <el-date-picker
                      v-model="ruleForm.criminal_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="Файл юклаш"
                    style="height: 110px; overflow: hidden"
                    prop="fileCriminal"
                  >
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="true"
                      :file-list="fileCriminalList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="12">
              <fieldset>
                <legend>Юритилган маъмурий иш</legend>
                <el-col :span="8">
                  <el-form-item label="Рақами" prop="administrative_number">
                    <el-input
                      v-model="ruleForm.administrative_number"
                      @input="filterNonNumeric('administrative_number')"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Санаси" prop="administrative_date">
                    <el-date-picker
                      v-model="ruleForm.administrative_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="Файл юклаш"
                    style="height: 110px; overflow: hidden"
                    prop="fileAdministrative"
                  >
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileAdministrativeList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="24">
              <fieldset style="margin: 20px 0 10px 0">
                <legend>Жиноят ишини қўзғатишни рад қилинган</legend>
                <el-col :span="6">
                  <el-form-item label="Рақами" prop="refused_number">
                    <el-input
                      v-model="ruleForm.refused_number"
                      @input="filterNonNumeric('refused_number')"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Санаси" prop="refused_date">
                    <el-date-picker
                      v-model="ruleForm.refused_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item
                    label="Файл юклаш"
                    style="height: 110px; overflow: hidden"
                    prop="fileRejected"
                  >
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileRejectedList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="моддаси" prop="refused_article">
                    <el-select v-model="ruleForm.refused_article" style="width: 100%;" placeholder="Танлаш">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="24">
              <fieldset style="margin: 10px 0">
                <legend>Мавжуд жиноят ишига қўшиш учун юборилган хабарнома</legend>
                <el-col :span="8">
                  <el-form-item label="Жиноят иши рақами" prop="criminal_to_number">
                    <el-input v-model="ruleForm.criminal_to_number" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Юборилган сана" prop="criminal_to_date">
                    <el-date-picker
                      v-model="ruleForm.criminal_to_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="Файл юклаш"
                    style="height: 110px; overflow: hidden"
                    prop="fileToCriminal"
                  >
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileToCriminalList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="24">
              <fieldset style="margin: 10px 0">
                <legend>Бошқа ҳудудга юборилган хабарнома</legend>
                <el-col :span="4">
                  <el-form-item label="Санаси" prop="region_to_date">
                    <el-date-picker
                      v-model="ruleForm.region_to_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="хат рақами" prop="region_to_number">
                    <el-input v-model="ruleForm.region_to_number" />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item
                    label="Файл юклаш"
                    style="height: 110px; overflow: hidden"
                    prop="fileToRegion"
                  >
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileToRegionList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="юборилган ҳудуд" prop="region_to_id">
                    <el-select
                      v-model="ruleForm.region_to_id"
                      style="width: 100%;"
                      placeholder="Танлаш"
                      @change="fetchDistrictsByRegionTo(ruleForm.region_to_id)"
                    >
                      <el-option
                        v-for="item in regions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="юборилган ҳудуд" prop="district_to_id">
                    <el-select v-model="ruleForm.district_to_id" style="width: 100%;" placeholder="Танлаш">
                      <el-option
                        v-for="item in districtsTo"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="24">
              <fieldset style="margin: 10px 0">
                <legend>Солиқ органларига қайта юборилган хабарнома</legend>
                <el-col :span="8">
                  <el-form-item label="Санаси" prop="tax_to_date">
                    <el-date-picker
                      v-model="ruleForm.tax_to_date"
                      style="width: 100%;"
                      type="date"
                      format="dd.MM.yyyy"
                      value-format="yyyy-MM-dd"
                      placeholder="Санани танланг"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="хат рақами" prop="tax_to_number">
                    <el-input v-model="ruleForm.tax_to_number" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Файл юклаш" style="height: 110px; overflow: hidden" prop="fileToTax">
                    <el-upload
                      :auto-upload="false"
                      action="http://localhost:8080/notifications"
                      class="upload-demo"
                      :multiple="false"
                      :file-list="fileToTaxList"
                    >
                      <el-button type="primary" icon="el-icon-upload2">Файл юклаш</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </fieldset>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="Қўшимча ҳисобланган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси"
                prop="sum40"
              >
                <el-input v-model="ruleForm.sum40" @input="filterNonNumeric('sum40')" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Шундан ундирилгани" prop="manufactured_sum40">
                <el-input
                  v-model="ruleForm.manufactured_sum40"
                  @input="filterNonNumeric('manufactured_sum40')"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="Ҳукумат ва бошқа орган қарорларига асосан ҳисобдан чиқарилган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси"
                prop="sum42"
              >
                <el-input v-model="ruleForm.sum42" @input="filterNonNumeric('sum42')" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Солиқ қарздорлиги суммаси" prop="debtor_sum">
                <el-input v-model="ruleForm.debtor_sum" @input="filterNonNumeric('debtor_sum')" />
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="Изоҳ" prop="commentary">
                <el-input v-model="ruleForm.commentary" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">Бекор қилиш</el-button>
        <el-button type="primary" @click.prevent="submitForm('ruleForm')">Сақлаш</el-button>
      </span>

    </el-dialog>
    <el-dialog
      :fullscreen="true"
      :show-close="false"
      :visible.sync="fileViewVisible"
    >
      <span slot="title" style="float: left">
        <el-button icon="el-icon-close" circle @click="fileViewVisible = false" />
      </span>
      <div v-if="fileViewVisible" style="height: calc(200vh)">
        <iframe
          style=" width: 100%;height: 100%"
          :src="fileViewUrl"
          controls
          controlsList="nodownload"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'NotificationsDialog',
  data() {
    return {
      dialogOpen: false,
      fileViewVisible: false,
      fileViewUrl: '',
      ruleForm: {
        id: null,
        user_id: 0,
        order_number: null,
        order_date: null,
        region_id: null,
        district_id: null,
        position_name: null,
        full_name: null,
        year: null,
        tin: null,
        entity_name: null,
        identified_date: null,
        situation_short: null,
        tax_sum: null,
        cash_sum: null,
        benefit_sum: null,
        other_sum: null,
        confirmed_sum: null,
        sure_date: null,
        sure_sum: null,
        sum30: null,
        sum_not30: null,
        justify_date: null,
        justify_number: null,
        form_one_date: null,
        criminal_number: null,
        criminal_date: null,
        administrative_number: null,
        administrative_date: null,
        refused_number: null,
        refused_date: null,
        refused_article: null,
        criminal_to_number: null,
        criminal_to_date: null,
        region_to_number: null,
        region_to_date: null,
        region_to_id: null,
        district_to_id: null,
        tax_to_number: null,
        tax_to_date: null,
        check_date: null,
        sum40: null,
        manufactured_sum40: null,
        sum42: null,
        debtor_sum: null,
        commentary: null
      },
      fileNotifyList: [],
      fileNotify: null,
      file30List: [],
      file30: null,
      fileJustifyList: [],
      fileJustify: null,
      fileCriminalList: [],
      fileCriminal: null,
      fileAdministrativeList: [],
      fileAdministrative: null,
      fileRejected: null,
      fileRejectedList: [],
      fileToCriminal: null,
      fileToCriminalList: [],
      fileToRegion: null,
      fileToRegionList: [],
      fileToTax: null,
      fileToTaxList: [],
      fileCheckEnd: null,
      fileCheckEndList: [],
      fileFineSum: null,
      fileFineSumList: [],

      rules: {
        tin: [
          { required: true, message: 'Илтимос СТИРни киритинг', trigger: 'blur' }
        ],
        fileNotify: [{ required: true, message: 'Илтимос СТИРни киритинг', trigger: 'blur' }]
      },
      regions: [],
      districts: [],
      regionsTo: [],
      districtsTo: [],
      options: []
    }
  },
  mounted() {
    this.ruleForm.user_id = this.$store.getters.user_id
    this.fetchRegions()
  },
  methods: {
    fetchRegions() {
      this.$http.get('region/list')
        .then(response => {
          this.regions = response.data
        })
    },
    fetchDistrictsByRegion(regionId) {
      this.$http.get(`district/by-region/${regionId}`)
        .then(response => {
          this.districts = response.data
        })
    },
    fetchDistrictsByRegionTo(regionId) {
      this.$http.get(`district/by-region/${regionId}`)
        .then(response => {
          this.districtsTo = response.data
        })
    },

    checkFile(type) {
      if (this.ruleForm.order_date !== null && this.ruleForm.order_number !== null) {
        // this.rules[type] = [{ required: true, message: 'Please input Activity name', trigger: 'change' }]
      } else {
        delete this.rules[type]
      }
    },
    handleClose() {
      this.dialogOpen = false
    },
    handleView(file) {
      this.fileViewVisible = true
      this.fileViewUrl = file.url
    },
    submitForm(formName) {
      const formData = new FormData()
      for (const [key, value] of Object.entries(this.ruleForm)) {
        formData.append(key, value)
      }
      this.rules.fileNotify = []
      // You can add additional checks here if needed
      // For example, checking the file type or size
      if (this.ruleForm.order_date !== null && this.ruleForm.order_number !== null) {
        if (this.fileNotifyList.length === 0) {
          this.rules.fileNotify = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileNotify
        }
      }
      if (this.ruleForm.sum30 !== null && this.ruleForm.sum30 > 10000) {
        if (this.file30List.length === 0) {
          this.rules.file30Rule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.file30Rule
        }
      }
      if (this.ruleForm.justify_number !== null && this.ruleForm.justify_date !== null) {
        if (this.fileJustifyList.length === 0) {
          this.rules.fileJustifyRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileJustifyRule
        }
      }
      if (this.ruleForm.criminal_number !== null && this.ruleForm.criminal_date !== null) {
        if (this.fileCriminalList.length === 0) {
          this.rules.fileCriminalRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileCriminalRule
        }
      }
      if (this.ruleForm.administrative_number !== null && this.ruleForm.administrative_date !== null) {
        if (this.fileAdministrativeList.length === 0) {
          this.rules.fileAdministrativeRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileAdministrativeRule
        }
      }
      if (this.ruleForm.refused_number !== null && this.ruleForm.refused_date !== null) {
        if (this.fileRejectedList.length === 0) {
          this.rules.fileRejectedRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileRejectedRule
        }
      }
      if (this.ruleForm.criminal_to_number !== null && this.ruleForm.criminal_to_date !== null) {
        if (this.fileToCriminalList.length === 0) {
          this.rules.fileToCriminalRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileToCriminalRule
        }
      }
      if (this.ruleForm.region_to_number !== null && this.ruleForm.region_to_date !== null) {
        if (this.fileToRegionList.length === 0) {
          this.rules.fileToRegionRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileToRegionRule
        }
      }
      if (this.ruleForm.tax_to_number !== null && this.ruleForm.tax_to_date !== null) {
        if (this.fileToTaxList.length === 0) {
          this.rules.fileToTaxRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileToTaxRule
        }
      }
      if (this.ruleForm.check_date !== null) {
        if (this.fileCheckEndList.length === 0) {
          this.rules.fileCheckEndRule = [{ required: true, message: 'Илтимос файлни юкланг', trigger: 'change' }]
        } else {
          delete this.rules.fileCheckEndRule
        }
      }
      formData.delete('regionName')
      formData.delete('regionToName')
      formData.delete('districtName')
      formData.delete('districtToName')

      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.fileNotify) {
            formData.append('fileNotify', this.fileNotify)
          } else {
            formData.delete('fileNotify')
          }
          if (this.file30) {
            formData.append('file30', this.file30)
          } else {
            formData.delete('file30')
          }
          if (this.fileJustify) {
            formData.append('fileJustify', this.fileJustify)
          } else {
            formData.delete('fileJustify')
          }
          if (this.fileCriminal) {
            formData.append('fileCriminal', this.fileCriminal)
          } else {
            formData.delete('fileCriminal')
          }
          if (this.fileAdministrative) {
            formData.append('fileAdministrative', this.fileAdministrative)
          } else {
            formData.delete('fileAdministrative')
          }
          if (this.fileRejected) {
            formData.append('fileRejected', this.fileRejected)
          } else {
            formData.delete('fileRejected')
          }
          if (this.fileToCriminal) {
            formData.append('fileToCriminal', this.fileToCriminal)
          } else {
            formData.delete('fileToCriminal')
          }
          if (this.fileToRegion) {
            formData.append('fileToRegion', this.fileToRegion)
          } else {
            formData.delete('fileToRegion')
          }
          if (this.fileToTax) {
            formData.append('fileToTax', this.fileToTax)
          } else {
            formData.delete('fileToTax')
          }
          if (this.fileCheckEnd) {
            formData.append('fileCheckEnd', this.fileCheckEnd)
          } else {
            formData.delete('fileCheckEnd')
          }
          if (this.fileFineSum) {
            formData.append('fileFineSum', this.fileFineSum)
          } else {
            formData.delete('fileFineSum')
          }
          if (formData.get('id') === 'null') {
            formData.delete('id')
          }
          if (this.ruleForm.id) {
            formData.delete('id')
            this.$http.put(`order/update/${this.ruleForm.id}`, formData)
              .then(response => {

              })
          } else {
            this.$http.post('order/create', formData)
              .then(response => {

              })
          }
          this.resetForm('ruleForm')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.handleClose()
    },
    handleFileNotifyChange(file, fileList) {
      this.$refs.ruleForm.clearValidate('fileNotify')
      if (file) {
        this.fileNotifyList = fileList.slice(-3)
        this.fileNotify = file.raw
      }
    },
    filterNonNumeric(field) {
      this.checkFile(field)
      this.ruleForm[field] = this.ruleForm[field].replace(/[^0-9]/g, '')
    }
  }
}
</script>

<style scoped lang="scss">
fieldset {
  border: 1px solid #409eff;
  padding: 12px;
  border-radius: 4px;
}

legend {
  font-size: 17px;
  font-weight: bold;
  padding: 0 10px;
}

el-dialog__body2 {
  height: calc(100vh - 50px) !important;
  overflow-y: scroll !important;
}
</style>

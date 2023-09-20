<template>
  <div>
    <div class="toolbar">
      <div class="toolbar-title">.</div>
      <el-button size="small" type="primary" icon="el-icon-plus" @click="openNotificationsDialog">Янги хабарнома
        яратиш
      </el-button>
    </div>
    <el-table
      height="calc(100vh - 190px)"
      size="mini"
      :data="table.data"
      style="width: 100%"
    >
      <el-table-column class-name="table-bottom-border" fixed>
        <el-table-column class-name="table-bottom-border" header-align="center" label="Т/р">
          <el-table-column>
            <el-table-column prop="id" label="1" header-align="center" width="70" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border" fixed>
        <el-table-column class-name="table-bottom-border" header-align="center" label="Ҳудудий бошқармалар">
          <el-table-column>
            <el-table-column prop="regionName" label="2" header-align="center" width="110" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border" width="90px" fixed="left">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Бўлим номи">
          <el-table-column>
            <el-table-column prop="districtName" label="3" header-align="center" width="70px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Ижрочи ходим лавозими">
          <el-table-column>
            <el-table-column prop="position_name" label="4" header-align="center" width="90" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Ф.И.Ш">
          <el-table-column>
            <el-table-column prop="full_name" label="5" header-align="center" width="90" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Давр (йил)">
          <el-table-column>
            <el-table-column prop="year" label="6" header-align="center" width="70" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Хабарнома юборилган субъект номи"
        >
          <el-table-column>
            <el-table-column prop="entity_name" label="7" header-align="center" width="140" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="СТИР">
          <el-table-column>
            <el-table-column prop="tin" label="8" header-align="center" width="80" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Аниқланган ҳолат санаси">
          <el-table-column>
            <el-table-column prop="identified_date" label="9" header-align="center" width="100" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Ҳолатнинг қисқача мазмуни">
          <el-table-column>
            <el-table-column prop="situation_short" label="10" header-align="center" width="130" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="Шу жумладан">
        <el-table-column
          class-name="table-bottom-border"
          label="Аниқланган солиқлар ва йиғимлар суммаси"
          header-align="center"
        >
          <el-table-column>
            <el-table-column prop="tax_sum" width="140px" header-align="center" label="11" />
          </el-table-column>
        </el-table-column>
        <el-table-column
          class-name="table-bottom-border"
          label="Аниқланган банкдан ташқари ноқонуний нақд пул айланмаси суммаси"
          header-align="center"
        >
          <el-table-column>
            <el-table-column prop="cash_sum" width="140px" header-align="center" label="12" />
          </el-table-column>
        </el-table-column>
        <el-table-column
          class-name="table-bottom-border"
          label="Ноқонуний фойдаланилган имтиёз суммаси"
          header-align="center"
        >
          <el-table-column>
            <el-table-column prop="benefit_sum" width="140px" header-align="center" label="13" />
          </el-table-column>
        </el-table-column>
        <el-table-column class-name="table-bottom-border" label="Бошқа ҳолатлар бўйича сумма" header-align="center">
          <el-table-column>
            <el-table-column prop="other_sum" width="140px" header-align="center" label="14" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="Юборилган хабарнома">
        <el-table-column class-name="table-bottom-border" label="Рақами" header-align="center">
          <el-table-column>
            <el-table-column prop="order_number" width="140px" header-align="center" label="15" />
          </el-table-column>
        </el-table-column>
        <el-table-column class-name="table-bottom-border" label="Санаси" header-align="center">
          <el-table-column>
            <el-table-column prop="order_date" width="140px" header-align="center" label="16" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Тасдиғини топган сумма">
          <el-table-column>
            <el-table-column prop="confirmed_sum" width="150px" header-align="center" label="17" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Аниқлаштирилган ҳисоб-китоб топширилиши санаси"
        >
          <el-table-column>
            <el-table-column prop="sure_date" width="150px" header-align="center" label="18" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Аниқлаштирилган ҳисоб-китоб суммаси"
        >
          <el-table-column>
            <el-table-column prop="sure_sum" width="150px" header-align="center" label="19" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="30 кунлик муддатда ихтиёрий тўлов амалга оширилган сумма"
        >
          <el-table-column>
            <el-table-column prop="sum30" width="150px" header-align="center" label="20" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="30 кунлик муддатда тўланмаган сумма"
        >
          <el-table-column>
            <el-table-column prop="sum_not30" width="150px" header-align="center" label="21" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column header-align="center" label="Асослантирувчи ҳужжат тақдим этилган хабарномалар">
          <el-table-column header-align="center" label="Сана">
            <el-table-column prop="justify_number" header-align="center" label="22" width="150px" />
          </el-table-column>
          <el-table-column header-align="center" label="Рақам">
            <el-table-column prop="justify_date" header-align="center" label="23" width="150px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Терговга қадар текширув бошланган (1-шакл китобдан рўйхатдан ўтган) сана"
        >
          <el-table-column>
            <el-table-column prop="form_one_date" header-align="center" label="24" width="170px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column header-align="center" label="Кўрилган чоралар">
        <el-table-column header-align="center" label="Қўзғатилган жиноят иши">
          <el-table-column header-align="center" label="Рақами">
            <el-table-column prop="criminal_number" header-align="center" label="25" />
          </el-table-column>
          <el-table-column header-align="center" label="Санаси">
            <el-table-column prop="criminal_date" header-align="center" label="26" />
          </el-table-column>
        </el-table-column>
        <el-table-column header-align="center" label="Юритилган маъмурий иш">
          <el-table-column header-align="center" label="Рақами">
            <el-table-column prop="administrative_number" header-align="center" label="27" />
          </el-table-column>
          <el-table-column header-align="center" label="Санаси">
            <el-table-column prop="administrative_date" header-align="center" label="28" />
          </el-table-column>
        </el-table-column>
        <el-table-column header-align="center" label="Жиноят ишини қўзғатишни рад қилинган">
          <el-table-column header-align="center" label="Рақами">
            <el-table-column prop="refused_number" header-align="center" label="29" />
          </el-table-column>
          <el-table-column header-align="center" label="Санаси">
            <el-table-column prop="refused_date" header-align="center" label="30" />
          </el-table-column>
          <el-table-column header-align="center" label="моддаси">
            <el-table-column prop="refused_article" header-align="center" label="31" />
          </el-table-column>
        </el-table-column>
        <el-table-column header-align="center" label="Мавжуд жиноят ишига қўшиш учун юборилган хабарнома">
          <el-table-column header-align="center" label="Юборилган сана">
            <el-table-column prop="criminal_to_number" header-align="center" label="32" width="170px" />
          </el-table-column>
          <el-table-column header-align="center" label="Жиноят иши рақами">
            <el-table-column prop="criminal_to_date" header-align="center" label="33" width="170px" />
          </el-table-column>
        </el-table-column>

        <el-table-column header-align="center" label="Бошқа ҳудудга юборилган хабарнома">
          <el-table-column header-align="center" label="сана">
            <el-table-column prop="region_to_date" header-align="center" label="34" />
          </el-table-column>
          <el-table-column header-align="center" label="хат рақами">
            <el-table-column prop="region_to_number" header-align="center" label="35" width="170px" />
          </el-table-column>
          <el-table-column header-align="center" label="юборилган ҳудуд">
            <el-table-column prop="region_to_id" header-align="center" label="36" width="170px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column header-align="center" label="Солиқ органларига қайта юборилган хабарнома">
          <el-table-column header-align="center" label="сана">
            <el-table-column prop="tax_to_date" header-align="center" label="37" />
          </el-table-column>
          <el-table-column header-align="center" label="хат рақами">
            <el-table-column prop="tax_to_number" header-align="center" label="38" width="170px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Жиноят иши бўйича текшириш (тафтиш) якунланган сана"
        >
          <el-table-column>
            <el-table-column prop="check_date" header-align="center" width="170px" label="39" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Қўшимча ҳисобланган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси"
        >
          <el-table-column>
            <el-table-column prop="sum40" header-align="center" width="300px" label="40" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Шундан ундирилгани">
          <el-table-column>
            <el-table-column
              prop="manufactured_sum40"
              class-name="table-bottom-border"
              header-align="center"
              width="170px"
              label="41"
            />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column
          class-name="table-bottom-border"
          header-align="center"
          label="Ҳукумат ва бошқа орган қарорларига асосан ҳисобдан чиқарилган солиқ ва бошқа мажбурий тўловлар ҳамда қўлланилган молиявий жарималар суммаси"
        >
          <el-table-column>
            <el-table-column prop="sum42" header-align="center" label="42" width="300px" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Солиқ қарздорлиги суммаси">
          <el-table-column>
            <el-table-column prop="debtor_sum" header-align="center" width="170px" label="43" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Хабарнома ҳолати">
          <el-table-column>
            <el-table-column header-align="center" width="170px" label="44" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column class-name="table-bottom-border" width="170px">
        <el-table-column class-name="table-bottom-border" header-align="center" label="Изоҳ">
          <el-table-column>
            <el-table-column prop="commentary" header-align="center" width="170px" label="45" />
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="#" align="center" width="90px" fixed="right">
        <template slot-scope="{row}">
          <i class="el-icon el-icon-edit" @click="editForm(row)" />
          <i class="el-icon el-icon-delete" @click="deleteData(row.id)" />
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        :current-page.sync="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <NotificationsDialog ref="NotificationsDialog" />
  </div>
</template>

<script>
import NotificationsDialog from '@/components/dialogs/NotificationsDialog.vue'

export default {
  name: 'Notifications',
  components: { NotificationsDialog },
  data() {
    return {
      table: {
        data: null
      },
      currentPage4: 4
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    openNotificationsDialog() {
      this.$refs['NotificationsDialog'].dialogOpen = true
    },
    editForm(row) {
      this.$refs['NotificationsDialog'].dialogOpen = true
      this.$refs['NotificationsDialog'].ruleForm = row
      this.$refs['NotificationsDialog'].fetchDistrictsByRegion(row.region_id)
      this.fetchFilesBy(row.id)
    },

    deleteData(id) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // this.$http.delete(`/api/notifications/delete/${id}`)
        //     .then(response => {
        //     })
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`)
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
    },
    loadData() {
      this.$http.get(`order/list`)
        .then(response => {
          this.table.data = response.data
        })
    },
    fetchFilesBy(orderId) {
      this.$refs['NotificationsDialog'].fileNotifyList = []
      this.$http.get(`order/storage/${orderId}`)
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            const item = response.data[i]
            const fileItem = { name: item.originalname, url: `http://localhost:3000/api/storage/${item.url}` }
            switch (item.type_id) {
              case 1:
                this.$refs['NotificationsDialog'].fileNotifyList.push(fileItem)
                break
              case 2:
                this.$refs['NotificationsDialog'].file30List.push(fileItem)
                break
              case 3:
                this.$refs['NotificationsDialog'].fileJustifyList.push(fileItem)
                break
              case 4:
                this.$refs['NotificationsDialog'].fileCriminalList.push(fileItem)
                break
              case 5:
                this.$refs['NotificationsDialog'].fileAdministrativeList.push(fileItem)
                break
              case 6:
                this.$refs['NotificationsDialog'].fileRejectedList.push(fileItem)
                break
              case 7:
                this.$refs['NotificationsDialog'].fileToRegionList.push(fileItem)
                break
              case 8:
                this.$refs['NotificationsDialog'].fileToTaxList.push(fileItem)
                break
              case 9:
                this.$refs['NotificationsDialog'].fileToTaxList.push(fileItem)
                break
              case 10:
                this.$refs['NotificationsDialog'].fileCheckEndList.push(fileItem)
                break
              case 11:
                this.$refs['NotificationsDialog'].fileFineSumList.push(fileItem)
                break
              default:
            }
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">

.el-icon {
  font-size: 18px;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-right: 20px;
  }

}

</style>

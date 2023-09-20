<template>
  <div class="app-container">
    <p>{{ $t('hello') }}</p>
    <p>{{ $t('greeting') }}</p>
    <el-select v-model="selectedLanguage" class="m-2" placeholder="Select" size="large" @change="changeLanguage">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column v-if="true" align="center" label="ID" width="95">

        <template #default="{row}">
          <div>
            <el-button type="primary" icon="el-icon-edit" circle @click="onSelectRow(row)" />
          </div>
        </template>

      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="deleteMessageInfoVisible"
      :fullscreen="true"
      width="80%"
    >
      <p>Hello1</p>
    </el-dialog>

    <el-dialog
      :fullscreen="true"
      :show-close="false"
      :visible.sync="dialogVisible"
    >
      <span slot="title" style="float: left">
        <el-button icon="el-icon-close" circle @click="dialogVisible = false" />
      </span>
      <div v-if="dialogVisible" style="height: calc(100vh - 100px)">
        {{ pdfUrl }}
        <iframe
          style=" width: 100%;height: 100%"
          :src="filePath()"
          controls
          controlsList="nodownload"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      deleteMessageInfoVisible: false,
      dialogVisible: false,
      selectedLanguage: 'uz',
      options: [
        {
          value: 'uz',
          label: 'Uzbek'
        },
        {
          value: 'en',
          label: 'English'
        },
        {
          value: 'ru',
          label: 'Русскый'
        }]
    }
  },
  computed: {
    pdfUrl() {
      return `api/storage/1.pdf`
    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    onSelectRow(row) {
      this.dialogVisible = true
    },
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage
    },
    filePath() {
      return `http://localhost:3000/api/storage/1.pdf`
    },
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        console.log(this.list)
        this.listLoading = false
      })
    }
  }
}
</script>

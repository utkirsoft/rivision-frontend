import axios from 'axios'

export default {
  data() {
    return {
      orderData: [],
      editOrderData: {
        id: '',
        userId: '',
        orderNumber: '',
        orderDate: Date.now(),
        regionId: 0,
        districtId: 0,
        positionName: '',
        fullName: '',
        year: '',
        tin: '',
        entityName: '',
        identifiedDate: '',
        situationShort: '',
        taxSum: 0,
        cashSum: 0,
        benefitSum: 0,
        otherSum: 0,
        confirmedSum: 0,
        sureDate: '',
        sureSum: 0,
        sum30: 0,
        sumNot30: 0,
        justifyDate: '',
        justifyNumber: '',
        formOneDate: '',
        criminalNumber: '',
        criminalDate: '',
        administrativeNumber: '',
        administrativeDate: '',
        refusedNumber: '',
        refusedDate: '',
        refusedArticle: '',
        criminalToNumber: '',
        criminalToDate: '',
        regionToNumber: '',
        regionToDate: '',
        regionToId: '',
        districtToId: '',
        taxToNumber: '',
        taxToDate: '',
        checkDate: '',
        sum40: 0,
        manufacturedSum40: 0,
        sum42: 0,
        debtorSum: 0,
        commentary: '',
        fileNotify: [],
        file30: [],
        fileJustify: [],
        fileCriminal: [],
        fileAdministrative: [],
        fileRejected: [],
        fileToCriminal: [],
        fileToRegion: [],
        fileToTax: [],
        fileCheckEnd: [],
        fileFineSum: []
      },
      fileViewVisible: false,
      fileViewUrl: false,
      dialogVisible: false,
      isEditFormOpen: false,
      regions: [],
      districts: [],
      activeName: 'first'
    }
  },
  mounted() {
    this.fetchRegions()
    this.fetchOrders()
  },
  methods: {
    handleFileNotifyChange(file, fileNotify) {
      console.log('handleFileNotifyChange')
      if (!fileNotify) {
        this.editOrderData.fileNotify = fileNotify.slice(-3)
      }
    },
    handleFileNotifyPreview(file) {
      console.log('handleFileNotifyPreview')
      this.fileViewVisible = true
      this.fileViewUrl = file.url
    },
    handleFile30Change(file, file30) {
      console.log('handleFile30Change')
      if (!file30) {
        this.editOrderData.file30 = file30.slice(-3)
      }
    },
    handleFile30Preview(file) {
      this.fileViewVisible = true
      this.fileViewUrl = file.url
    },
    // handleFileJustifyChange(file, fileJustify) {
    //   console.log('handleFileJustifyChange')
    //   this.editOrderData.fileJustify = fileJustify.slice(-3)
    // },
    // handleFileJustifyPreview(file) {
    //   console.log('handleFileJustifyPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileToTaxChange(file, fileToTax) {
    //   console.log('handleFileToTaxChange')
    //   this.editOrderData.fileToTax = fileToTax.slice(-3)
    // },
    // handleFileToTaxPreview(file) {
    //   console.log('handleFileToTaxPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileRejectedChange(file, fileRejected) {
    //   console.log('handleFileRejectedChange')
    //   this.editOrderData.fileRejected = fileRejected.slice(-3)
    // },
    // handleFileRejectedPreview(file) {
    //   console.log('handleFileRejectedPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileToRegionChange(file, fileToRegion) {
    //   console.log('handleFileToRegionChange')
    //   this.editOrderData.fileToRegion = fileToRegion.slice(-3)
    // },
    // handleFileToRegionPreview(file) {
    //   console.log('handleFileToRegionPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileToCriminalChange(file, fileToCriminal) {
    //   console.log('handleFileToCriminalChange')
    //   this.editOrderData.fileToCriminal = fileToCriminal.slice(-3)
    // },
    // handleFileToCriminalPreview(file) {
    //   console.log('handleFileToCriminalPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileCheckEndChange(file, fileCheckEnd) {
    //   console.log('handleFileCheckEndChange')
    //   this.editOrderData.fileCheckEnd = fileCheckEnd.slice(-3)
    // },
    // handleFileCheckEndPreview(file) {
    //   console.log('handleFileCheckEndPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileCriminalChange(file, fileCriminal) {
    //   console.log('handleFileCriminalChange')
    //   this.editOrderData.fileCriminal = fileCriminal.slice(-3)
    // },
    // handleFileCriminalPreview(file) {
    //   console.log('handleFileCriminalPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileAdministrativeChange(file, fileAdministrative) {
    //   console.log('handleFileAdministrativeChange')
    //   this.editOrderData.fileAdministrative = fileAdministrative.slice(-3)
    // },
    // handleFileAdministrativePreview(file) {
    //   console.log('handleFileAdministrativePreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    // handleFileFineSumChange(file, fileFineSum) {
    //   this.editOrderData.fileFineSum = fileFineSum.slice(-3)
    // },
    // handleFileFineSumPreview(file) {
    //   console.log('handleFileFineSumPreview')
    //   this.fileViewVisible = true
    //   this.fileViewUrl = file.url
    // },
    headerCellStyle() {
      return {
        background: '#d33333',
        color: 'blue',
        fontWeight: 'bold'
      }
    },
    formatDate(date) {
      const formattedDate = new Date(date)
      const day = formattedDate.getDate()
      const month = formattedDate.getMonth() + 1
      const year = formattedDate.getFullYear()

      // Pad with leading zero if needed
      const formattedDay = day < 10 ? `0${day}` : day
      const formattedMonth = month < 10 ? `0${month}` : month

      return `${formattedDay}.${formattedMonth}.${year}`
    },
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/order/list')
        this.orderData = response.data
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    },
    async getOrderBy(orderId) {
      try {
        console.log(`http://localhost:3000/order/${orderId}`)
        await axios.get(`http://localhost:3000/order/${orderId}`).then(
          response => {
            this.editOrderData = response.data
            if (!this.editOrderData.regionId) {
              this.fetchDistrictsByRegion(this.editOrderData.regionId)
            }
          }
        )
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    },
    handleClose(done) {
      done()
      // this.$confirm('Are you sure to close this dialog?')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    },
    handleRowClick(id, isEdit) {
      console.log('id = ' + id)

      this.editOrderData.fileNotify = []

      this.isEditFormOpen = isEdit
      this.getOrderBy(id)
      this.editOrderData.fileNotify.push({ name: 'abc.pdf', url: 'http://localhost:3000/api/storage/1.pdf' })

      console.log(this.editOrderData.fileNotify)
      this.dialogVisible = true
    },
    handleCellClick(row, column, cell, event) {
      console.log(row.id)
      console.log(column.property)
    },
    async fetchRegions() {
      try {
        const response = await axios.get('http://localhost:3000/region/list')
        this.regions = response.data
      } catch (error) {
        console.error('Error fetching regions:', error)
      }
    },
    async fetchDistrictsByRegion(regionId) {
      try {
        const response = await axios.get(`http://localhost:3000/district/by-region/${regionId}`)
        this.districts = response.data
      } catch (error) {
        console.error('Error fetching districts:', error)
      }
    },

    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {
      // this.$message('submit!')
    },
    onCancel() {
      // this.$message({
      //   message: 'cancel!',
      //   type: 'warning'
      // })
    }
  },
  computed: {
    filteredDistricts() {

    }
  }
}

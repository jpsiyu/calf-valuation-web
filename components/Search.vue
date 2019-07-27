<template>
  <div class="search">
    <el-row type="flex">
      <img class="search-img" src="~/assets/images/logo.png" >
      <el-input
        class="search-input"
        type="text"
        v-model="search"
        @input="inputChange"
        @keyup.enter.native="clickSearch"
        placeholder="输入股票代码:SZ000423" />
      <el-button class="search-btn" type="primary" @click="clickSearch">搜索</el-button>
    </el-row>
    <el-row>
      <el-alert v-if="errTips" class="search-err" :title="errTips" type="error" @close="onCloseErrTips"/>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      errTips: ''
    }
  },
  methods: {
    inputChange(){
      this.errTips = ''
    },
    clickSearch() {
      if (!this.search) {
        this.$emit("clear")
        return
      }
      const code = this.search.toUpperCase()
      this.$axios.get(`/api/code?symbol=${code}`)
        .then(res => {
          const serverMsg = res.data
          if (serverMsg.errCode) {
            return Promise.reject(new Error('找不到该代码的信息'))
          }
          this.$emit("search", serverMsg.data)
        })
        .catch(err => {
          this.$emit("clear")
          this.errTips = err.message
        })
    },
    onCloseErrTips(){
      this.errTips = ''
    }
  }
}
</script>

<style scoped>
.search-img{
  width: 40px;
  height: 40px;
}

.search-input {
  width: 400px;
  margin-left: 20px;
}

.search-btn {
  width: 100px;
  margin-left: 20px;
}

.search-err{
  width: 400px;
  margin-left: 60px;
  margin-top: 3px;
}
</style>



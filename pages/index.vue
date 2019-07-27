<template>
  <div class="index">
    <Search @search="search" @clear="clear" />
    <el-row v-if="symbol">
      <h1 class="index-symbol">
        {{symbolName}} {{symbol}}
      </h1>
    </el-row>
    <template v-if="symbol">
      <div class="index-section">
        <Balance :symbol="symbol"/>
      </div>
      <div class="index-section">
        <Indicator :symbol="symbol"/>
      </div>
      <div class="index-section">
        <Dcf :symbol="symbol"/>
      </div>
    </template>
    <template v-else>
      <img class="index-img" src="~/assets/images/welcome.png" />
    </template>
  </div>
</template>

<script>
import Search from '~/components/Search.vue'
import Balance from '~/components/Balance.vue'
import Indicator from '~/components/Indicator.vue'
import Dcf from '~/components/Dcf.vue'
export default {
  components: {
    Search,
    Balance,
    Indicator,
    Dcf,
  },
  data() {
    return {
      symbol: '',
      symbolName: '',
    }
  },
  methods: {
    search(event) {
      this.symbol = event.symbol
      this.symbolName = event.name
    },
    clear(){
      this.symbol = ''
      this.symbolName = ''
    }
  },
}
</script>

<style>
.index {
  width: 960px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-symbol{
  margin: 50px 0;
}

.index-section{
  margin: 50px 0;
  width: 100%;
}

.index-img{
  margin-top: 60px;
  width: 300px;
}
</style>

<template>
  <div class="index">
    <Balance />
    <Indicator />
    <Dcf />
  </div>
</template>

<script>
import Balance from '~/components/Balance.vue'
import Indicator from '~/components/Indicator.vue'
import Dcf from '~/components/Dcf.vue'
export default {
  components: {
    Balance,
    Indicator,
    Dcf,
  },
  methods: {},
}
</script>

<style>
.index{
  width: 960px;
  margin: auto;
}
</style>

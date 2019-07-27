<template>
  <div class="index">
    <Balance />
    <Indicator />
  </div>
</template>

<script>
import Balance from '~/components/Balance.vue'
import Indicator from '~/components/Indicator.vue'
export default {
  components: {
    Balance,
    Indicator,
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

<template>
  <div>
        hello vue
  </div>
</template>

<script>
  import {getProduct} from '../Ajax/api'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  methods:{
    getProduct(){
      getProduct({shopId: 67}).then(({data}) => {
        console.log(data)
      })
    }
  },
  mounted(){
    this.getProduct()
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div>
    <i class="material-icons">home</i>
    {{login}}
    <i class="material-icons">public</i>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
interface ComplexMessage {
  title: string,
  okMessage: string,
  cancelMessage: string
}
export default Vue.extend({
  props:{
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: false,
      validator (message: ComplexMessage) {
        return !!message.title;
      }
    }
  },
  data() {
    return {
      login: 'Welcom to my system'
    }
  }
})
</script>
<style lang="scss">
  @import "../assets/styles/index.css";

</style>

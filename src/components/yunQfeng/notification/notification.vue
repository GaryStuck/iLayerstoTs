<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="notification"
      :style="style"
      v-show="ifShow"
      @mouseenter="clearTimer"
      @mouseout="createTimer"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'notification',
    data () {
      return {
        ifShow: false,
        height: 0
      }
    },
    props: {
      content: {
        type: String,
        default: '提示！'
      },
      btn: {
        type: String,
        default: '关闭'
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      style () {
        return {}
      }
    },
    mounted () {
      this.createTimer()
    },
    methods: {
      createTimer () {
        if (this.autoClose) {
          this.timer = setTimeout(() => {
            this.ifShow = false
          }, 3000)
        }
      },
      clearTimer () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
      },
      handleClose (e) {
        e.preventDefault()
        this.$emit('close')
      },
      afterLeave () {
        this.$emit('closed')
      },
      afterEnter () {
        this.height = this.$el.offsetHeight
      }
    },
    beforeDestroy () {
      this.clearTimer()
    }
  }
</script>

<style lang="scss" scoped>
  @import "mixin";
  .notification {
    display: flex;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    padding: 20px;
    position: fixed;
    min-width: 280px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
    transition: all 0.3s;
    background-color: #303030;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      background-color: deeppink;
      width: -webkit-fill-available;
    }

    .content {
      padding: 0;
    }

    .btn {
      color: #ff4081;
      padding-left: 24px;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>

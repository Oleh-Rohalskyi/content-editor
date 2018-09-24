<template>
  <div class="preview">
    <code v-show="!htmlView">{{value}}</code>
    <div v-show="htmlView" v-html="value"></div>
    <button :style="buttonColor" @click="htmlView=!htmlView" class="preview__toogle">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data() {
    return {
      htmlView: true
    }
  },
  props: {
    value: String
  },
  computed: {
    buttonText() {
      return this.htmlView ? "HTML CODE" : "HTML RENDER ITSELF"
    },
    buttonColor() {
      return this.htmlView ? {backgroundColor:"#282C34", color: "#DE6D77"} : {backgroundColor:"#F4FAFF", color: "#212121"}
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .preview {
    min-width: 310px;
    width: 100%;
    background-color: #252526;
    resize: none;
    box-sizing: border-box;
    &__toogle {
      height: 30px;
      width: 200px;
      margin: 5px auto;
      font-size: 14px;
      font-weight: bold;
      display: block;
    }
    & code, & div {
      display: block;
      height: calc(100% - 35px);
      padding: 0 8px;
      box-sizing: border-box;
      overflow-y: scroll;
      border-bottom: 1px solid #DE6D77;
      border-left: 1px solid #DE6D77;
      background-color: #ccc;
    }
    & code {
      background-color: #282C34;
      color: #76C890;
      font-weight: bold;
    }
  }
</style>

<template>
  <textarea class="editor" @input="$emit('input',$event.target.value)" :value="value" ></textarea>
</template>

<script>
export default {
  name: "Editor",
  props: {
    value: String
  },
  data() {
    return {
      code: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.editor {
  background-color: #252526;
  color: #76C890;
  font-size: 16px;
  resize: none;
  display: block;
  min-width: 310px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 0 8px;
  border: none;
  border-top: 1px solid #DE6D77;
}
</style>
<template>
  <div class="page-editor">
    <Dropdown @change="selectDocument" :options="dropdownConfig" />
    <Editor :value="editorValue" @input="updateView" />
    <Preview :value="preview" />
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";

import parser from "micromarkdown";

export default {
  name: "page-editor",
  components: {
    Dropdown,
    Editor,
    Preview
  },
  data() {
    return {
      dropdownConfig: [],
      markdowns: [],
      selected: "",
      editorValue: "",
      preview: "",
    };
  },
  methods: {
    selectDocument(name) {

      this.selected = name;

      let _dropdownMap = []
      this.markdowns.forEach( item => {

          const _isSelectedDocument = item.name === name;
          if (_isSelectedDocument) {
            this.editorValue = item.code;
            this.updateView(this.editorValue);
          }
          _dropdownMap.push({
            name: item.name,
            selected: _isSelectedDocument
          });

      })

      this.dropdownConfig = _dropdownMap;

    },
    updateView(val) {
      this.preview  = parser.parse(val);
    },
  },
  created() {
    this.markdowns = [
      {
        name: "two-links",
        code: "two links [one](https://developer.mozilla.org/) to [two](https://developer.mozilla.org/)"
      },
      {
        name: "list-of-two",
        code: "1. At vero eos et accusamus et iusto odio dignissimos ducimus 1. Qui blanditiis praesentium voluptatum deleniti atque corrupti"
      }
    ];

    this.selectDocument("two-links");
  }
};
</script>

<style lang="scss">

.page-editor {
  background-color: #252526;
  display: grid;
  height: 100vh;
  width: 100vw;

  grid-template-columns: 50vw 50vw;
  grid-template-rows: 55px calc(100vh - 60px) calc(100vh - 60px);
  grid-template-areas: 
    "dropdown dropdown"
    "editor preview"
    "previewmob preview";
  
  & .dropdown {
    grid-area: dropdown;
  }
  & .editor {
    grid-area: "editor";
  }
  & .preview {
    grid-area: "preview";
  }
}
</style>
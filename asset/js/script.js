const { createApp } = Vue;
createApp({
  data() {
    return {
      newText: "",
      textList: [],
    };
  },
  methods: {
    addText() {
      if (this.newText != "") {
        this.textList.push({ done: true, list: this.newText });
        console.log(this.newText);
      }
      this.newText = "";
    },
  },
}).mount("#app");

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
      this.textList.push(this.newText);
      console.log(this.newText);
      console.log(this.textList);
    },
  },
}).mount("#app");

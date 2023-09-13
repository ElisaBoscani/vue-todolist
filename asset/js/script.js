const { createApp } = Vue;
createApp({
  data() {
    return {
      newText: "",
      textList: [
        { list: "fare la spesa", done: false },
        { list: "fare la lavatrice", done: false },
        { list: "visita dal dentista alle 18", done: false },
        { list: "ritirare un pacco", done: false },
      ],
    };
  },
  methods: {
    addText() {
      if (this.newText != "") {
        this.textList.unshift({ done: false, list: this.newText });
        console.log(this.newText);
      }
      this.newText = "";
    },
    removeText(index) {
      this.textList.splice(index, 1);
    },
    checkText(text) {
      text.done = !text.done;
    },
  },
}).mount("#app");

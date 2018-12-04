export const textMixin = {
  data() {
    return {
      text: "hello world!"
    };
  },
  computed: {
    reverseText() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    calculateLength() {
      return this.text + " (" + this.text.length + ")";
    }
  },
  created() {
    console.log('Cleared');
  }
}
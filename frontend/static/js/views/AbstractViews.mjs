export default class AbstractViews {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  setStyle(Stylelocation) {
    const style = document.querySelector("[data-style]");
    style.href = Stylelocation;
  }

  async getHtml() {
    return "";
  }
}

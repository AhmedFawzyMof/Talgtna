import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    this.setTitle("my Cashback");
    this.setScript("");
    this.setStyle("");
  }
  async getHtml() {
    return "";
  }
}

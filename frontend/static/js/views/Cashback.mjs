import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("my Cashback");
    this.setStyle("");
  }
  async getHtml() {
    return "";
  }
}

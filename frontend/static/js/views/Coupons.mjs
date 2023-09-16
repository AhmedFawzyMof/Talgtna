import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("my Coupons");
    this.setStyle("");
  }
  async getHtml() {
    return "";
  }
}

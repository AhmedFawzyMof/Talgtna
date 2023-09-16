import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("my Profile");
    this.setStyle("");
  }
  async getHtml() {
    return "";
  }
}

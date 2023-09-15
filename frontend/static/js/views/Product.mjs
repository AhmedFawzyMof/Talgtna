import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    console.log(params.name);
    this.setTitle("my Profile");
    this.setScript("");
    this.setStyle("");
  }
  async getHtml() {
    return "";
  }
}

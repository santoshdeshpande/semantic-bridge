import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import {AttributeManager} from '../common/attributeManager';

@customAttribute('sui-label')
@inject(Element)
export class Label {
  @bindable() size = "";
  @bindable() basic = false;

  constructor(element) {
    this.attributeManager = new AttributeManager(element);
  }

  attached() {
    this.size = this.size || "large";

    console.log("Hello I am checking..", this.size, this.basic);
    this.basic = this.getBoolean(this.basic);
    let classes = ['ui', 'label', this.size];
    if(this.basic) {
      classes.push("basic");
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['ui','label']);
  }

  getBoolean(value) {
    return (value === true || value === "true");
  }
}

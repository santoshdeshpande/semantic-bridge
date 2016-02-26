import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import {AttributeManager} from 'common/attributeManager';
import {getBooleanValue} from 'common/attributes';

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
    this.basic = getBooleanValue(this.basic);
    let classes = ['ui', 'label', this.size];
    if(this.basic) {
      classes.push("basic");
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['ui','label']);
  }
}

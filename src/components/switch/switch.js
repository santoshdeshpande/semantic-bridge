import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import {AttributeManager} from '../../common/attributeManager';
import {getBooleanValue} from '../../common/attributes';

@customElement("sui-switch")
@inject(Element)
export class Switch {
	static id = 0;
	@bindable({
		defaultBindingMode: bindingMode.twoWay
	}) checked;

	@bindable({
		defaultBindingMode: bindingMode.twoWay
	}) labelText;

	@bindable({
		defaultBindingMode: bindingMode.twoWay
	}) mode;

	constructor(element) {
		this.element = element;
		this.controlId = `sui-switch-${Switch.id++}`;
		
	}

	attached() {
		let classes = ["ui", "checkbox"];
		let checkboxEl = $(this.checkbox);
		this.attributeManager = new AttributeManager(this.checkbox);

		this.checked = getBooleanValue(this.checked);
		this.switchMode = getBooleanValue(this.switchMode);
		if(this.mode && this.mode !== "") {
			classes.push(this.mode);
		}
		this.setCheckboxChecked(this.checked);
		this.attributeManager.addClasses(classes);
		checkboxEl.checkbox({
			onChange: (e)=> {
				this.checked = checkboxEl.checkbox("is checked");
			}
		})
	}

	checkedChanged(newValue) {
		this.setCheckboxChecked(newValue);
	}

	setCheckboxChecked(value) {
		let behavior = value ? "check" : "uncheck"
		$(this.checkbox).checkbox(behavior);				
	}

}
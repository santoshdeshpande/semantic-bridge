import {Label} from 'src/components/label/label'
// import {initialize} from 'aurelia-pal-browser';

describe("Label", () => {
	let element;
	let label;
	beforeEach(() => {
		// initialize();
		element = document.createElement("a");
		document.body.appendChild(element);
		label = new Label(element);
	});

	it("has label class", () => {
		label.attached();
		expect(element.classList.contains("label")).toBe(true);
		expect(element.classList.contains("large")).toBe(true);
	});

	it("sets the size to massive", () => {
		label.size = "massive";
		label.attached();
		expect(element.classList.contains("massive")).toBe(true);
	});

	it("can create a basic label", () => {
		label.basic = true;
		label.size = "medium";
		label.attached();
		expect(element.classList.contains("basic")).toBe(true);
		expect(element.classList.contains("medium")).toBe(true);
	});
})
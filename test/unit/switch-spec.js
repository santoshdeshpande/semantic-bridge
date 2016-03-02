import {Switch as Widget} from 'src/components/switch/switch';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {BindingEngine} from 'aurelia-binding';

describe("Switch", () => {
    let element;
    let widget;
    let container;
    let templatingEngine;
    let bindingEngine;

    beforeEach(() => {
        initialize();
        container = new Container();
        element = DOM.createElement("div");
        container.registerInstance(DOM.Element, element);
        templatingEngine = container.get(TemplatingEngine);
        bindingEngine = container.get(BindingEngine);
        widget = templatingEngine.createViewModelForUnitTest(Widget, null, {});
    });

    it("is initialized properly", (done)=>{
        expect(widget).not.toBe(null);
        expect(widget).not.toBe(undefined);
        // widget.attached();
        done();
    });

});
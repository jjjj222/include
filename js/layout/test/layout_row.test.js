import { LayoutRow } from "../layout_row.js";

//------------------------------------------------------------------------------
//   Constructor
//------------------------------------------------------------------------------
describe('constructor', () => {
    test('new LayoutRow()', () => {
        const layout = new LayoutRow()

        // this.root
        expect(layout.root.nodeName).toBe("DIV");
        expect(layout.root.style.boxSizing)      .toBe("border-box");
        expect(layout.root.style.height)         .toBe("100%");
        expect(layout.root.style.width)          .toBe("100%");
        expect(layout.root.style.margin)         .toBe("0px");
        expect(layout.root.style.overflow)       .toBe("hidden");

        expect(layout.root.style.display)        .toBe("flex");
        expect(layout.root.style.flexDirection)  .toBe("column");
        expect(layout.root.style.justifyContent) .toBe("flex-start");
        expect(layout.root.style.alignItems)     .toBe("stretch");
        expect(layout.root.style.alignContent)   .toBe("stretch");

        // main_section
        expect(layout.root.firstChild.nodeName).toBe("DIV");
        expect(layout.root.firstChild.style.boxSizing)      .toBe("border-box");
        expect(layout.root.firstChild.style.height)         .toBe("100%");
        expect(layout.root.firstChild.style.width)          .toBe("100%");
        expect(layout.root.firstChild.style.margin)         .toBe("0px");
        expect(layout.root.firstChild.style.overflow)       .toBe("hidden");

        expect(layout.root.firstChild.style.display)        .toBe("flex");
        expect(layout.root.firstChild.style.flexDirection)  .toBe("column");
        expect(layout.root.firstChild.style.justifyContent) .toBe("flex-start");
        expect(layout.root.firstChild.style.alignItems)     .toBe("stretch");
        expect(layout.root.firstChild.style.alignContent)   .toBe("stretch");

        expect(layout.root.firstChild.style.padding)        .toBe("0px");
        expect(layout.root.firstChild.style.flexGrow)       .toBe("1");

        // this.body
        expect(layout.body).toBe(layout.root.firstChild.firstChild);
        expect(layout.body.nodeName).toBe("DIV");
        expect(layout.body.style.boxSizing) .toBe("border-box");
        expect(layout.body.style.height)    .toBe("100%");
        expect(layout.body.style.width)     .toBe("100%");
        expect(layout.body.style.margin)    .toBe("0px");
        expect(layout.body.style.padding)   .toBe("0px");
        expect(layout.body.style.flexGrow)  .toBe("1");
    })

    test('new LayoutRow(parent)', () => {
        const parent = document.createElement("div")
        parent.innerHTML = "<div>first</div><div>second</div>";

        const layout = new LayoutRow(parent)

        expect(parent.lastChild).toBe(layout.root)
    });
});

//------------------------------------------------------------------------------
//   Methods
//------------------------------------------------------------------------------
describe('member functions', () => {
    let layout = null;
    beforeEach(() => {
        layout = new LayoutRow()
    });

    describe('addTop(DOM)', () => {
        test('undefined DOM', () => {
            const result = layout.addTop();

            expect(result.nodeName).toBe("DIV");
            expect(layout.root.firstChild).toBe(result);
        })

        test('normal DOM', () => {
            const dom = document.createElement("xxx")
            const result = layout.addTop(dom);

            expect(result).toBe(dom);
            expect(layout.root.firstChild).toBe(dom);
        })
    });

    describe('addBottom(DOM)', () => {
        test('undefined DOM', () => {
            const result = layout.addBottom();

            expect(result.nodeName).toBe("DIV");
            expect(layout.root.lastChild).toBe(result);
        })

        test('normal DOM', () => {
            const dom = document.createElement("xxx")
            const result = layout.addBottom(dom);

            expect(result).toBe(dom);
            expect(layout.root.lastChild).toBe(dom);
        })
    });
});

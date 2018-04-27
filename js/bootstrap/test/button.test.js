import { Button } from "../button.js";

//------------------------------------------------------------------------------
//   Constructor
//------------------------------------------------------------------------------
describe('constructor', () => {
    test('new Button()', () => {
        const btn = new Button();

        expect(btn.root.nodeName).toBe('BUTTON');
        expect(btn.root.classList).toContain('btn');
        expect(btn.root.textContent).toBe('');
    })

    test('new Button(string)', () => {
        const btn = new Button('abc');

        expect(btn.root.textContent).toBe('abc');
    })
})

//------------------------------------------------------------------------------
//   Methods
//------------------------------------------------------------------------------
describe('member functions', () => {
    test('on(event, callback)', () => {
        const btn = new Button();
        const mock_callback_fn = jest.fn();

        btn.on('click', mock_callback_fn);

        const event = new Event('click');
        btn.root.dispatchEvent(event);

        expect(mock_callback_fn).toBeCalled();
    });
});

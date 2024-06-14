import {describe, expect, test} from "@jest/globals";
import {md} from "./md";

describe('md() function for tailwind responsive ui', () => {
    test('empty string', () => {
        const res = md('')
        expect(res).toBe('');
    })

    test('one classname', () => {
        const res = md('flex');
        expect(res).toBe('md:flex')
    })

    test('three classnames', () => {
        const res = md('flex bg-[#0d0d0d] top-[20vh]');
        expect(res).toBe('md:flex md:bg-[#0d0d0d] md:top-[20vh]')
    })

    test('more than one space divider', () => {
        const res = md('    flex     bg-[#0d0d0d]   top-[20vh]    ');
        expect(res).toBe('md:flex md:bg-[#0d0d0d] md:top-[20vh]')
    })
})
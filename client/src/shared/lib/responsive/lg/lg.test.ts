import {describe, expect, test} from "@jest/globals";
import {lg} from "./lg";

describe('lg() function for tailwind responsive ui', () => {
    test('empty string', () => {
        const res = lg('')
        expect(res).toBe('');
    })

    test('one classname', () => {
        const res = lg('flex');
        expect(res).toBe('lg:flex')
    })

    test('three classnames', () => {
        const res = lg('flex bg-[#0d0d0d] top-[20vh]');
        expect(res).toBe('lg:flex lg:bg-[#0d0d0d] lg:top-[20vh]')
    })

    test('more than one space divider', () => {
        const res = lg('    flex     bg-[#0d0d0d]   top-[20vh]    ');
        expect(res).toBe('lg:flex lg:bg-[#0d0d0d] lg:top-[20vh]')
    })
})
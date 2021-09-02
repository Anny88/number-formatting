import {format} from "../logic/format";

describe('Number formatting', () => {
    it('should round number to n points with decimal and thousands separators', function () {
        expect(format(undefined)).toEqual('0,00');
        expect(format(2.555)).toEqual('2,56');
        expect(format(10000.5555, 3)).toEqual('10.000,556');
        expect(format(100000.28374, 2, ',', '.')).toEqual('100.000,28');
        expect(format(100000.55555, 1, '.', ',')).toEqual('100,000.6');
        expect(format(1.555, 10, ',', '.')).toEqual('1,5550000000');
        expect(format(-1.55555, 4)).toEqual('-1,5555');
        expect(format('-1.55555', 4)).toEqual('-1,5555');
        expect(format(1.55555, 3, ',', '.', false)).toEqual('1,555');
        expect(format(1.55555, 6, ',', '.', false)).toEqual('1,555550');
        expect(format('1.5555', 2)).toEqual('1,56');
    });
});

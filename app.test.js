import nonUniqueElements from './nonUnique';
import median from './median';
import countNeighbours from './mooreNeighbour';

//Tests
describe('Non-unique Elements', () => {
    it('should get Non-unique Elements', () => {
        expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
        expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
        expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
        expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([
            10,
            9,
            10,
            10,
            9,
        ]);
    });
});

describe('Median', () => {
    it('should get median elements', () => {
        expect(median([1, 2, 3, 4, 5])).toEqual(3);
        expect(median([3, 1, 2, 5, 3])).toEqual(3);
        expect(median([1, 300, 2, 200, 1])).toEqual(2);
        expect(median([3, 6, 20, 99, 10, 15])).toEqual(12.5);
    });
});

describe('Moore Neighbourhood', () => {
    it('should get neighbours count', () => {
        expect(
            countNeighbours(
                [
                    [1, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1],
                    [1, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0],
                ],
                1,
                2
            )
        ).toEqual(3);
        expect(
            countNeighbours(
                [
                    [1, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1],
                    [1, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0],
                ],
                0,
                0
            )
        ).toEqual(1);
        expect(
            countNeighbours([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 0, 2)
        ).toEqual(3);
        expect(
            countNeighbours([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1, 1)
        ).toEqual(0);
    });
});

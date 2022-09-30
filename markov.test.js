const { MarkovMachine } = require('./markov');

describe('markov machine tests', function () {
    test('creating a chain', function () {
        let mm = new MarkovMachine('a b b a c d');
        expect(mm.chains).toEqual(new Map([
            ['a', ['b', 'c']],
            ['b', ['b', 'a']],
            ['c', ['d']],
            ['d', [null]]
        ]))
    })

})
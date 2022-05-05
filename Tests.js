import { stricEquals } from './StrictEquals.js';

console.log('------ Tests ------');

function stricEqualsTest_1() {
    const a = 1;
    const b = 1;
    console.log('Tests_1: A = 1 / B = 1 --> ' + 'Result' + stricEquals(a, b));
}
stricEqualsTest_1();

function stricEqualsTest_2() {
    const a = NaN;
    const b = NaN;
    console.log(
        'Tests_2: A = NaN / B = NaN --> ' + 'Result' + stricEquals(a, b)
    );
}

stricEqualsTest_2();

function stricEqualsTest_3() {
    const a = 0;
    const b = -0;
    console.log('Tests_3: A = 0 / B = -0 --> ' + 'Result' + stricEquals(a, b));
}

stricEqualsTest_3();

function stricEqualsTest_4() {
    const a = -0;
    const b = 0;
    console.log('Tests_4: A = -0 / B = 0 --> ' + 'Result' + stricEquals(a, b));
}

stricEqualsTest_4();

function stricEqualsTest_5() {
    const a = 1;
    const b = '1';
    console.log('Tests_5: A = 1 / B = "1" --> ' + 'Result' + stricEquals(a, b));
}

stricEqualsTest_5();

function stricEqualsTest_6() {
    const a = true;
    const b = false;
    console.log(
        'Tests_6: A = true / B = false --> ' + 'Result' + stricEquals(a, b)
    );
}

stricEqualsTest_6();

function stricEqualsTest_7() {
    const a = false;
    const b = false;
    console.log(
        'Tests_7: A = false / B = false --> ' + 'Result' + stricEquals(a, b)
    );
}

stricEqualsTest_7();

function stricEqualsTest_8() {
    const a = 'Water';
    const b = 'Oil';
    console.log(
        'Tests_8: A = "Water" / B = "Oil" --> ' + 'Result' + stricEquals(a, b)
    );
}

stricEqualsTest_8();

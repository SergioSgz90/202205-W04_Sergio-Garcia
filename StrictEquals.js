export function stricEquals(value1, value2) {
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return ' = ' + ' false';
    }
    if (!value1 && !value2) {
        return ' = ' + ' true';
    } else return ' =  ' + Object.is(value1, value2);
}

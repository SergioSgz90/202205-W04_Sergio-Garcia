export function stricEquals (value1, value2) {
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return 'Result: ' + 'false';
    }
    if (!value1 && !value2) {
        return 'Result: ' + 'true';
    } else return 'Result = ' + Object.is(value1, value2);
}

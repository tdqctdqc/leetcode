var isPalindrome = function (s) {
    let compare = '';
    let alphanumeric = /[A-Za-z0-9]/;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (alphanumeric.test(char)) compare += char.toUpperCase();
    }
    for (let i = 0; i <= compare.length / 2; i++) {
        if(compare[i] !== compare[compare.length - 1 - i]) return false;
    }
    return true;
};

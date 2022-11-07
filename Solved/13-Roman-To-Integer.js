//SOLVED

var romanToInt = function (s) {
    let values = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const char = s[i];
        const nextChar = s[i + 1];
        if(values[char] < values[nextChar]) {
            sum -= values[char];
            console.log('-' + values[char]);
        } else {
            sum += values[char];
            console.log(values[char]);
        }
    }
    sum += values[s[s.length - 1]];
    return sum;
}
console.log(romanToInt('III'));

var romanToIntOld = function(s) {
    let values = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let specialCases = {
        I : { V : 4, X : 9 },
        X : { L : 40, C : 90 },
        C : { D : 400, M : 900 }
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        console.log('char ' + char);
        if(i < s.length - 1 
        && char in specialCases
        && s[i + 1] in specialCases[char]) {
            let val = specialCases[char][s[i + 1]];
            sum += specialCases[char][s[i + 1]];
            i++;
        } else {
            sum += values[char];
            let val = values[char];
            // console.log('val ' + val);
        }
        console.log('sum ' + sum);
    }
    return sum;
}

// romanToInt("IV");
/**
 * @param {string} s
 * @return {number}
 */

 //182ms
var firstUniqChar = function(s) {
    let obj = {};
    let arrString = s.split("");
    let sl = s.length;

    for (let i=0; i<sl; i++)
    {
        obj[arrString[i]] = obj[arrString[i]] || 0;
        obj[arrString[i]]++;
        // console.log(obj[arrString[i]]);
    }

    for (let i=0; i<sl; i++)
    {
        if (obj[arrString[i]] === 1) return i;
    }

    return -1;
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var hash = {};
    for (var i=0; i<s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = i;
        }
        else {
            hash[s[i]] = -1;
        }
    }

    for(var i=0; i<s.length; i++) {
        if (hash[s[i]] !== -1) return i;
    }

    return -1;

};

// Runtime: 156 ms; 2%

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let map = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let reverse_ans = [];
    // let bin = (num >>> 0).toString(2);
    if (num === 0) return "0";
    while (num !== 0)
    {
        reverse_ans.push(map[num & 15]);
        num = num >>> 4;
    }

    return reverse_ans.reverse().join("");

    // while (bin.length !== 0)
    // {

    // }

};


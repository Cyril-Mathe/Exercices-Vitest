export function sum(a, b) {
  return a + b
}

// Exercice 1
export function crescent() {
    const x = [12, 4, 34, 9]
    x.sort((a, b) => a - b)
    return x
}

// Exercice 2
export function factorial(n) {
    if (typeof n !== "number" || Number.isNaN(n)) {
        throw new TypeError("n must be a number")
    }
    if (n < 0) {
        throw new RangeError("n must be non-negative")
    }
    if (n === 0 || n === 1) {
        return 1
    }
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

// Exercice 3
export function RLE(s)
{
    var result = "";
    var current_char = s.charAt(0);
    var count = 1;
    for(var i = 1; i < s.length ; i++)
        {
            if ( current_char != s.charAt(i) )
                {
                    result += count;
                    result += current_char;
                    current_char = s.charAt(i);
                    count = 1;
                }
            else
                {
                    count ++;
                }
            }
        result += count;
        result += current_char;
        return result;
}
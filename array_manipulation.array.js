function arrayManipulation(n, queries) {
    let arr = new Array(n+1).fill(0);
    
    for(let i=0; i<queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a] += k;
        if(b < n) arr[b+1] -= k;
    }
    
    let max = 0, sum = 0;
    for(let i=1; i<=n; i++) {
        sum += arr[i];
        max = Math.max(max, sum);
    }
    
    return max;
}



/* 
5 3
1 2 100
2 5 100
3 4 100
*/

// Input
const n = 5;
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

console.log(arrayManipulation(n, queries)); // Output: 200
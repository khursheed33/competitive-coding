/* 
consider two arrays a and b where each consists of n integers. In one operation:
1. select two indices i and j (0<i, j<n)
2. Swap integers a[i] and b[j]

This operation can be performed at most k times.

Find the maximum number of distinct elements that can be achieved in array a after at most k operations.

Example:
n=5
a=[2,3,3,2,2]
b=[1,3,2,4,1]
k=2

To get the maximum number of distinct elements in array a:
select i=2, j=0. swap a[2] and b[0] Now, a = [2,3,1,2,2]
select i=4, j=3. swap a[4] and b[3], Finally, a= [2,3,1,2,4] and b = [3,3,2,2,1]

Function Description:
getMaximumDistinct has following parameters:
 int a[n]
 int b[n]
 int k

*/





function getMaximumDistinct(a, b, k) {
    const n = a.length;
    const c = getCommonElements(a, b);
    let distinct = n - c.length;
    
    if (k >= c.length) {
        distinct += c.length;
        k -= c.length;
    } else {
        distinct += k;
        k = 0;
    }
    
    a.sort((x, y) => y - x);
    b.sort((x, y) => y - x);
    
    for (let i = 0; i < c.length && k > 0; i++) {
        if (a[i] < b[i]) {
            a[i] = b[i];
            k--;
        } else {
            break;
        }
    }
    
    return distinct + Math.min(k, n - distinct);
}

function getCommonElements(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const common = [];
    
    for (const x of setA) {
        if (setB.has(x)) {
            common.push(x);
        }
    }
    
    return common;
}






// Input 
const n = 5;
const a = [1,1,4,5,5];
const b = [4,4,3,1,5];
const k = 2;

const result = getMaximumDistinct(a,b,k);

console.log("Result: ",result);



/* 
// Input
const n = 3;
const a = [1,2,3];
const b = [4,5,6];
const k = 5;

// Output
// The maximum number of distinct elements that can be achieved in array a after at most k operations is 3.

// Explanation:
// In this case, we have c = 0 since there are no common elements between a and b.
// We sort the arrays a and b to get a = [3, 2, 1] and b = [6, 5, 4].
// We can perform the following swaps:
// - Swap a[0] and b[0] to get a = [6, 2, 1] and b = [3, 5, 4]. We have k = 4.
// - Swap a[1] and b[0] to get a = [6, 5, 1] and b = [3, 2, 4]. We have k = 3.
// - Swap a[2] and b[1] to get a = [6, 2, 4] and b = [3, 5, 1]. We have k = 2.
// - Swap a[0] and b[2] to get a = [1, 2, 4] and b = [3, 5, 6]. We have k = 1.
// - Swap a[1] and b[2] to get a = [1, 5, 4] and b = [3, 2, 6]. We have k = 0.
// At this point, we have performed the maximum number of swaps allowed by k. 
// The resulting array a has 3 distinct elements: 1, 5, and 4. Therefore, 
// the maximum number of distinct elements that can be achieved in array a after at
// most k operations is 3.






--------------------------------------------------------------------------------------
// Input 
const n = 5;
const a = [1,1,4,5,5];
const b = [4,4,3,1,5];
const k = 2;


There are two common elements between a and b: 1 and 5.
Since k = 2 and there are two common elements, we can make both of them distinct 
by swapping the corresponding elements in a and b.
After swapping the first common element, we get a = [4, 1, 4, 5, 5] and b = [1, 4, 3, 1, 5].
After swapping the second common element, we get a = [4, 3, 4, 5, 1] and b = [1, 4, 5, 1, 5].
We have used up all k swaps, and there are 4 distinct elements in a: 1, 3, 4, and 5.
Therefore, the maximum number of distinct elements in a after at most k operations is 4.









*/
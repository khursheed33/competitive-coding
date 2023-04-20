function matchingStrings(stringList, queries) {
    // Write your code here
    if(stringList.length <= 0 && queries.length <= 0){
        return;
    }
    
    let result = [];
    for(var queryItem of queries){
        let matchCount = 0;
        for(var stringItem of stringList){
            console.log(stringItem , "==",queryItem);
          if(queryItem == stringItem){
              matchCount += 1;
          } 
           
        }
        result.push(matchCount);
    }
   return result;
}

const stringList = ['ab','aba','ab'];
const queries = ['ab','xa'];
const result = matchingStrings(stringList, queries);

console.log("Result: ",result);
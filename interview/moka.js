/**
 * @typedef Commit
 * @property {string} id - commit id
 * @property {Commit} parent - parent reference
 */

/**
 * @param {Commit} head
 * @param {Commit} mergeHead
 * @return {Commit}
 */
function getBestCommonAncestor(head, mergeHead) {
    // TODO
    let first = head, second = mergeHead;
    let firstPath = [], secondPath = [];
    while(first !== null){
      firstPath.push(first);
      first = first.parent;
    }
    while(second !== null){
      secondPath.push(second);
      second = second.parent;
    }
    if(!firstPath.length && !secondPath.length){
      return null
    }
    for(let i of firstPath){
      for(let j of secondPath){
        if (i === j){ return i;}
      }
    }
    return null;
          
  }
  
  // test case
  const A = { id: 'A', parent: null };
  const B = { id: 'B', parent: A };
  const C = { id: 'C', parent: B };
  const D = { id: 'D', parent: B };
  const E = { id: 'E', parent: C };
  
  console.log(getBestCommonAncestor(A, B)); // A
  console.log(getBestCommonAncestor(D, E)); // B
  
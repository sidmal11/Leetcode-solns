/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0,totalCost = 0;
    gas.forEach((g,idx) => {
        totalGas += g;
        totalCost += cost[idx];
    })
    if (totalCost > totalGas) return -1;
    
    let possibleAns = 0;    
    let total = 0;
    for (let i= 0 ; i<gas.length ; i++){
        total += gas[i] - cost[i];
        if (total<0){
            total = 0;
            possibleAns = i+1
        }
    }
    return possibleAns;
};
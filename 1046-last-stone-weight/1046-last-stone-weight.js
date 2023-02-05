/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();

    stones.forEach(stone => {
        pq.enqueue(stone);
    })
    
    while (pq.size() > 1){
        let first = pq.dequeue().element;
        let second = pq.dequeue().element;
        if (first == second){
            continue;
        }else{
            pq.enqueue(first-second);
        }
    }

    return (pq.size()) ?  pq.front().element : 0;
};
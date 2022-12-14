function minEatingSpeed(piles: number[], h: number): number {
    let lo = 0,
        hi = 0;
    piles.forEach(p => {
        if (p > hi) {
            hi = p;
        }
    })

    while (lo <= hi) {
        let k = Math.floor(lo + (hi - lo) / 2)
        if (canFinish(piles, k, h)) {
            hi = k-1;
        } else {
            lo = k+1;
        }
    }
    
    return lo;

};

function canFinish(piles, k, h): boolean {
    let timeTaken = 0;
    piles.forEach( p =>{
                    timeTaken += Math.ceil(p/k)
                  })
    
    return timeTaken <= h
}
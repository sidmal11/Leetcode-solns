class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
        Map <Integer,Integer> count = new HashMap();
        
        for (int n : nums){
            // if (!count.contains(n)){
            //     count.put(n,1)
            // }else{
            //     count.set(m,count.get(n) +1);
            // }
            
            count.put(n,count.getOrDefault(n,0)+1);
        }

        Queue <Integer> heap = new PriorityQueue((a,b) -> {
            if (count.get(a)>count.get(b)){
                return -1 ;
            }else if(count.get(a)<count.get(b)){
                return 1;
            }
            return 0;
        }); 
            
        for (int key : count.keySet()){ heap.offer(key);}
        
        List<Integer> res = new ArrayList<>();
        
        while(res.size()<k){
            res.add(heap.poll());
        }
        
        return  res.stream().mapToInt(i -> i).toArray();
        
    }
}
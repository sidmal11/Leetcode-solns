class Solution {
    int [] par;
    int []rank;
        
    public int[] findRedundantConnection(int[][] edges) {
        int [] res = new int [2];
        int n =edges.length;
        rank = new int [n+1];
        Arrays.fill(rank,1);
        
        par = IntStream.range(0,n+1).toArray();

        for (int [] edge : edges){
            int a = edge[0];
            int b = edge[1];

            if (union(a,b) == false){
                return new int[]{a,b};
            }
        }
        return res;
    }
    
    public int find(int a){
        int tempParent = par[a];
        
        while(tempParent != par[tempParent] ){
            System.out.println(tempParent);
            System.out.println(par[tempParent]);

            par[tempParent] = par[par[tempParent]];
            tempParent = par[tempParent];
        }
        
        return tempParent;
    }
    
    public boolean union(int a,int b){
        int parA = find(a);
        int parB = find(b);
        
        if(parA == parB) return false;
        if (rank[parA] >rank[parB]){
            par[parB] = parA;
            rank[parA] += rank[parB];
        }else{
            par[parA] = parB;
            rank[parB] += rank[parA];
        }
        return true;
    }
}
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
     
        if (root==null) return 0;
        if (root.right == null && root.left == null){
            return 1;
        }else
            return 1+ Math.max(maxDepth(root.left),maxDepth(root.right));
    }
}
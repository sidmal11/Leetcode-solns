/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) return node;
    
    const visited = new Map();
    
    const explore = (node) => {
        let clone;
        if (!visited.has(node.val)) {
            clone = new Node(node.val);
            visited.set(node.val,clone);
            clone.neighbors = node.neighbors.map(explore)
            console.log(node.val, visited);
        }else{
            clone = visited.get(node.val)
        }
        return clone;
}
    
    return explore(node)
};


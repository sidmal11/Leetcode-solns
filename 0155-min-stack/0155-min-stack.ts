class MinStack {
    stack: number[];
    minstack: number[];
    constructor() {
        this.stack = [];
        this.minstack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (!this.minstack.length){
            this.minstack.push(val);
        }else{
            if (this.minstack[this.minstack.length-1] > val){
                this.minstack.push(val);
            }else{
                this.minstack.push(this.minstack[this.minstack.length-1])
            }
        }

console.log(this.minstack);
console.log(this.stack);

    }

    pop(): void {
        this.stack.pop();
        this.minstack.pop();
    }

    top(): number {
        return this.stack[this.stack.length-1];
    }

    getMin(): number {
        return this.minstack[this.minstack.length-1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
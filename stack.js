class Stack {
    constructor() {
        this.contents = []
    }
    push(value) {
        this.contents.push(value);
    }
    pop() {
        return this.contents.pop();
    }
    peek() {
        return this.contents[this.contents.length - 1];
    }
    size() {
        return this.contents.length;
    }
}

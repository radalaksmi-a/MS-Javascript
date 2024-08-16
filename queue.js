class Queue {
    constructor() {
        this.items = [];
    }

    
    Enqueue(element) {
        this.items.push(element);
    }

    
    Dequeue() {
        if (this.IsEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    
    Peek() {
        if (this.IsEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    
    IsEmpty() {
        return this.items.length === 0;
    }

    
    Size() {
        return this.items.length;
    }

    
    Clear() {
        this.items = [];
    }
}


const queue = new Queue();

queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

console.log(queue.Peek()); 
console.log(queue.Dequeue()); 
console.log(queue.Peek()); 
console.log(queue.Size()); 
console.log(queue.IsEmpty()); 
queue.Clear();
console.log(queue.IsEmpty()); 

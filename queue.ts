class Queue<T> {
    private items: T[] = [];

    Enqueue(element: T): void {
        this.items.push(element);
    }

    Dequeue(): T {
        if (this.IsEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift() as T; 
    }

    Peek(): T {
        if (this.IsEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    IsEmpty(): boolean {
        return this.items.length === 0;
    }

    Size(): number {
        return this.items.length;
    }

    Clear(): void {
        this.items = [];
    }
}


const queue = new Queue<number>();

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

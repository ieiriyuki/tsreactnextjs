class Queue<T> {
  private array: T[] = []

  push(item: T) {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
queue.push(2)
// queue.push('foo') // compile error

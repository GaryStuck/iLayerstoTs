declare function create(o: object | null): void;

export class Queue {
  // 大小
  private count: number;
  // 追踪第一个元素
  private lowestCount: number
  // 使用对象存储元素
  private items: Record<number, any> = {};

  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  public enQueue(element: any): void {
    this.items[this.count] = element
    this.count++
  }

  public deQueue(): void {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount];
    this.lowestCount++
    return result
  }

  public peek(): void {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  public isEmpty(): boolean {
    return this.count - this.lowestCount === 0
  }

  public size(): number {
    return this.count - this.lowestCount
  }

  public clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let objString: string = `${ this.items[this.lowestCount] }`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${ objString },${ this.items[i] }`
    }
    return objString
  }
}

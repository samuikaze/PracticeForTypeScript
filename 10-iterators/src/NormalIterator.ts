class NormalIterator<T> implements IIterates.Iterator<T> {
  public currentItem: T | null = null;
  private currentIndex = 0;

  constructor(private items: Array<T>) {
    this.currentItem = items[0];
  }

  public isDone() {
    return this.currentItem == null;
  }

  public next() {
    if (this.isDone()) {
      throw new Error('Iterator out of bound');
    }

    this.currentIndex++;
    this.currentItem = this.items[this.currentIndex];
  }
}

export default NormalIterator;

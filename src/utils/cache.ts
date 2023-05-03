interface CacheMap {
  [key: string]: unknown;
}

class Cache {
  private cache: CacheMap;

  constructor() {
    this.cache = {};
  }

  set<T>(key: string, data: T): void {
    if (!this.cache[key]) {
      this.cache[key] = data;
    }
  }

  remove(key: string): void {
    if (this.cache[key]) {
      delete this.cache[key];
    }
  }

  clear(): void {
    this.cache = {};
  }

  get<T>(key: string): T | undefined {
    return this.cache[key] as T;
  }

  getAll() {
    return this.cache;
  }
}

export default Cache;

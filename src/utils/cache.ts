interface CacheMap {
  [key: string]: { expireTime: number; data: unknown };
}
interface Config {
  staleTime?: number;
}

const FIVE_MINUTES = 1000 * 60 * 5;
const isExpired = (time: number) => {
  return time < Date.now();
};
class Cache {
  private cache: CacheMap;

  private staleTime: number;

  constructor(config?: Config) {
    this.cache = {};
    this.staleTime = config?.staleTime || FIVE_MINUTES;
  }

  private has(key: string) {
    return this.cache[key] !== undefined;
  }

  set<T>(key: string, data: T): void {
    this.cache[key] = {
      data,
      expireTime: Date.now() + this.staleTime,
    };
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
    if (this.has(key)) {
      const { data, expireTime } = this.cache[key];
      if (!isExpired(expireTime)) {
        return data as T;
      }
    }
    return undefined;
  }

  getAll() {
    return Object.entries(this.cache).reduce((acc, [key, { expireTime, data }]) => {
      return isExpired(expireTime) ? acc : { ...acc, [key]: data };
    }, {});
  }
}

export default Cache;

export function deleteByPath<T extends object>(obj: T, path: string): T {
  return _deleteByPath(obj, path) as T;
}

export function _deleteByPath(obj: unknown, path: string): unknown {
  const keys = path.split('.');
  const [current, ...tail] = keys;

  if (!obj || typeof obj !== 'object' || !Object.hasOwn(obj, current)) return obj;

  if (tail.length === 0) {
    const result = { ...obj };
    delete result[current as keyof typeof obj];
    return result;
  }

  const reducedObject = obj[current as keyof typeof obj];
  if (Array.isArray(reducedObject)) {
    return {
      ...obj,
      [current]: (reducedObject as unknown[]).map((item) =>
        _deleteByPath(item, tail.join('.'))
      ),
    };
  }

  if (typeof reducedObject === 'object') {
    return { ...obj, [current]: _deleteByPath(reducedObject, tail.join('.')) };
  }

  return obj;
}

export function isNull(obj) {
    return (obj === null);
}

export function isUndefinedOrNull(obj) {
    return ((obj === null) || (obj === undefined));
}

export function isNotUndefinedOrNull(obj) {
    return !isUndefinedOrNull(obj);
}

export function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}

export function isArrayEmpty(value) {
    if (!isUndefinedOrNull(value) && isArray(value))
        return (value.length === 0);
    return true;
}

export function isMapEmpty(value) {
    if (!isNull(value) && isMap(value))
        return (value.size === 0);
    return true;
}

export function cloneArray(a) {
    return [...a];
}

export function httpCliResponseContent(resp, type, apiClient) {
    return (!resp.content) ? {} : apiClient.deserialize(JSON.parse(resp.content), type);
}

export function responseIsLast(resp) {
    const ret = JSON.parse(resp.content);
    return (isNotUndefinedOrNull(ret.isLast)) ? ret.isLast : true;
}

export function functionGroupMatches(f, name) {
    return (typeof f === 'function') && (name.startsWith(f.name));
}
export function functionMatches(f, name) {
    return (typeof f === 'function') && (f.name === name);
}
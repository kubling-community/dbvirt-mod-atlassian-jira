import { isArrayEmpty, isNotUndefinedOrNull, isUndefinedOrNull } from "./Utils";

export function shallReturnEmpty(err, code) {
    if (isNotUndefinedOrNull(err)) {
        if (code === 404) return true;
        throw new Error(`Code: ${code} - Message: ${err}`);
    }
    return false;
}

export function paginationOps(ops, qf) {
    if (isNotUndefinedOrNull(qf.pagination)) {
        if (qf.pagination.pageSize > 0) ops.maxResults = qf.pagination.pageSize;
        ops.startAt = qf.pagination.page;
    }
    return ops;
}

export function basePaginatedCallback(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
    for (var v of data.values) {
        if (isNotUndefinedOrNull(enricher)) v = enricher(v);
        resultSet.addRow(JSON.stringify(v));
    }
}

export function httpCallbackResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
    for (let v of data.values) {
        if (isNotUndefinedOrNull(enricher)) v = enricher(v);
        resultSet.addRow(JSON.stringify(v));
    }
}

export function httpCallbackArrayResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data) || isUndefinedOrNull(data.values)) return;    
    for (let v of data) {
        if (isNotUndefinedOrNull(enricher)) v = enricher(v);
        resultSet.addRow(JSON.stringify(v));
    }
}

export function httpCallbackSingleResultSet(err, data, code, enricher) {
    if (shallReturnEmpty(err, code)) return;
    if (isUndefinedOrNull(data)) return;
    if (isNotUndefinedOrNull(enricher)) data = enricher(data);
    resultSet.addRow(JSON.stringify(data));
}

export function baseInsertCallback(err, data, code) {
    if (isNotUndefinedOrNull(err)) throw new Error(`Code ${code} Message: ${err}`);
    affectedRows.increment();
}

export function getFiltersOfField(tableFieldName, operation, qf) {
    return qf.filters.filter((f) => f.field === tableFieldName && f.operation == operation);
}

export function getFiltersOfFieldVal(tableFieldName, operation, qf) {
    return qf.filters.filter((f) => f.field === tableFieldName && f.operation == operation).map((f) => f.value);
}

/*
    Since API supports only one single filter value in some fields, what we do as a workaround is
    skip them when the query contains multiple values and we let the Engine make the final filtering
*/
export function addUniqueFieldFilterEqualOrNothing(ops, tableFieldName, opsFieldName, qf) {
    
    const ff = getFiltersOfField(tableFieldName, "EQUAL", qf);
    if (isArrayEmpty(ff)) return ops;

    // If true, it means a query like fieldName = X AND/OR fieldName = Z
    if (ff.length > 1) return ops;

    // Otherwise, we filter by the field
    ops[opsFieldName] = ff[0].value;

    return ops;
}

export function requiresFieldFilter(ops, tableFieldName, opsFieldName, qf, message) {
    
    const ff = qf.filters.filter((f) => f.field === tableFieldName && f.operation == "EQUAL");
    if (isArrayEmpty(ff)) throw new Error(message);

    // If true, it means a query like fieldName = X AND/OR fieldName = Z
    if (ff.length > 1) return ops;

    // Otherwise, we filter by the field
    ops[opsFieldName] = ff[0];

    return ops;
}
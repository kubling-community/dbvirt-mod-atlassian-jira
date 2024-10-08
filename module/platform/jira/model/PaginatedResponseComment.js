/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Comment from './Comment';

/**
 * The PaginatedResponseComment model module.
 * @module model/PaginatedResponseComment
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PaginatedResponseComment {
    /**
     * Constructs a new <code>PaginatedResponseComment</code>.
     * @alias module:model/PaginatedResponseComment
     */
    constructor() { 
        
        PaginatedResponseComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedResponseComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedResponseComment} obj Optional instance to populate.
     * @return {module:model/PaginatedResponseComment} The populated <code>PaginatedResponseComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedResponseComment();

            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Comment]);
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaginatedResponseComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaginatedResponseComment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['results'])) {
            throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
        }

        return true;
    }


}



/**
 * @member {Number} maxResults
 */
PaginatedResponseComment.prototype['maxResults'] = undefined;

/**
 * @member {Array.<module:model/Comment>} results
 */
PaginatedResponseComment.prototype['results'] = undefined;

/**
 * @member {Number} startAt
 */
PaginatedResponseComment.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
PaginatedResponseComment.prototype['total'] = undefined;






export default PaginatedResponseComment;


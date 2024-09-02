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
import IssueTypeScheme from './IssueTypeScheme';

/**
 * The PageBeanIssueTypeScheme model module.
 * @module model/PageBeanIssueTypeScheme
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PageBeanIssueTypeScheme {
    /**
     * Constructs a new <code>PageBeanIssueTypeScheme</code>.
     * A page of items.
     * @alias module:model/PageBeanIssueTypeScheme
     */
    constructor() { 
        
        PageBeanIssueTypeScheme.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageBeanIssueTypeScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBeanIssueTypeScheme} obj Optional instance to populate.
     * @return {module:model/PageBeanIssueTypeScheme} The populated <code>PageBeanIssueTypeScheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageBeanIssueTypeScheme();

            if (data.hasOwnProperty('isLast')) {
                obj['isLast'] = ApiClient.convertToType(data['isLast'], 'Boolean');
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('nextPage')) {
                obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [IssueTypeScheme]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageBeanIssueTypeScheme</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageBeanIssueTypeScheme</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['nextPage'] && !(typeof data['nextPage'] === 'string' || data['nextPage'] instanceof String)) {
            throw new Error("Expected the field `nextPage` to be a primitive type in the JSON string but got " + data['nextPage']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                IssueTypeScheme.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Whether this is the last page.
 * @member {Boolean} isLast
 */
PageBeanIssueTypeScheme.prototype['isLast'] = undefined;

/**
 * The maximum number of items that could be returned.
 * @member {Number} maxResults
 */
PageBeanIssueTypeScheme.prototype['maxResults'] = undefined;

/**
 * If there is another page of results, the URL of the next page.
 * @member {String} nextPage
 */
PageBeanIssueTypeScheme.prototype['nextPage'] = undefined;

/**
 * The URL of the page.
 * @member {String} self
 */
PageBeanIssueTypeScheme.prototype['self'] = undefined;

/**
 * The index of the first item returned.
 * @member {Number} startAt
 */
PageBeanIssueTypeScheme.prototype['startAt'] = undefined;

/**
 * The number of items returned.
 * @member {Number} total
 */
PageBeanIssueTypeScheme.prototype['total'] = undefined;

/**
 * The list of items.
 * @member {Array.<module:model/IssueTypeScheme>} values
 */
PageBeanIssueTypeScheme.prototype['values'] = undefined;






export default PageBeanIssueTypeScheme;


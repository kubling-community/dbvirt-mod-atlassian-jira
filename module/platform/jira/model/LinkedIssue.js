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
import LinkedIssueFields from './LinkedIssueFields';

/**
 * The LinkedIssue model module.
 * @module model/LinkedIssue
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class LinkedIssue {
    /**
     * Constructs a new <code>LinkedIssue</code>.
     * The ID or key of a linked issue.
     * @alias module:model/LinkedIssue
     */
    constructor() { 
        
        LinkedIssue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedIssue} obj Optional instance to populate.
     * @return {module:model/LinkedIssue} The populated <code>LinkedIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedIssue();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = LinkedIssueFields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkedIssue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkedIssue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `fields`
        if (data['fields']) { // data not null
          LinkedIssueFields.validateJSON(data['fields']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}



/**
 * @member {module:model/LinkedIssueFields} fields
 */
LinkedIssue.prototype['fields'] = undefined;

/**
 * The ID of an issue. Required if `key` isn't provided.
 * @member {String} id
 */
LinkedIssue.prototype['id'] = undefined;

/**
 * The key of an issue. Required if `id` isn't provided.
 * @member {String} key
 */
LinkedIssue.prototype['key'] = undefined;

/**
 * The URL of the issue.
 * @member {String} self
 */
LinkedIssue.prototype['self'] = undefined;






export default LinkedIssue;


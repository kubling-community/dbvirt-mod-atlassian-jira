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

/**
 * The RequiredMappingByIssueType model module.
 * @module model/RequiredMappingByIssueType
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class RequiredMappingByIssueType {
    /**
     * Constructs a new <code>RequiredMappingByIssueType</code>.
     * The list of required status mappings by issue type.
     * @alias module:model/RequiredMappingByIssueType
     */
    constructor() { 
        
        RequiredMappingByIssueType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequiredMappingByIssueType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequiredMappingByIssueType} obj Optional instance to populate.
     * @return {module:model/RequiredMappingByIssueType} The populated <code>RequiredMappingByIssueType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequiredMappingByIssueType();

            if (data.hasOwnProperty('issueTypeId')) {
                obj['issueTypeId'] = ApiClient.convertToType(data['issueTypeId'], 'String');
            }
            if (data.hasOwnProperty('statusIds')) {
                obj['statusIds'] = ApiClient.convertToType(data['statusIds'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RequiredMappingByIssueType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequiredMappingByIssueType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['issueTypeId'] && !(typeof data['issueTypeId'] === 'string' || data['issueTypeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeId` to be a primitive type in the JSON string but got " + data['issueTypeId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['statusIds'])) {
            throw new Error("Expected the field `statusIds` to be an array in the JSON data but got " + data['statusIds']);
        }

        return true;
    }


}



/**
 * The ID of the issue type.
 * @member {String} issueTypeId
 */
RequiredMappingByIssueType.prototype['issueTypeId'] = undefined;

/**
 * The status IDs requiring mapping.
 * @member {Array.<String>} statusIds
 */
RequiredMappingByIssueType.prototype['statusIds'] = undefined;






export default RequiredMappingByIssueType;


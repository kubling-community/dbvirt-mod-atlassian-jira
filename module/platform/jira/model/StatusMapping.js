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
 * The StatusMapping model module.
 * @module model/StatusMapping
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class StatusMapping {
    /**
     * Constructs a new <code>StatusMapping</code>.
     * Details about the mapping from a status to a new status for an issue type.
     * @alias module:model/StatusMapping
     * @param issueTypeId {String} The ID of the issue type.
     * @param newStatusId {String} The ID of the new status.
     * @param statusId {String} The ID of the status.
     */
    constructor(issueTypeId, newStatusId, statusId) { 
        
        StatusMapping.initialize(this, issueTypeId, newStatusId, statusId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTypeId, newStatusId, statusId) { 
        obj['issueTypeId'] = issueTypeId;
        obj['newStatusId'] = newStatusId;
        obj['statusId'] = statusId;
    }

    /**
     * Constructs a <code>StatusMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusMapping} obj Optional instance to populate.
     * @return {module:model/StatusMapping} The populated <code>StatusMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusMapping();

            if (data.hasOwnProperty('issueTypeId')) {
                obj['issueTypeId'] = ApiClient.convertToType(data['issueTypeId'], 'String');
            }
            if (data.hasOwnProperty('newStatusId')) {
                obj['newStatusId'] = ApiClient.convertToType(data['newStatusId'], 'String');
            }
            if (data.hasOwnProperty('statusId')) {
                obj['statusId'] = ApiClient.convertToType(data['statusId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatusMapping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatusMapping</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StatusMapping.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['issueTypeId'] && !(typeof data['issueTypeId'] === 'string' || data['issueTypeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeId` to be a primitive type in the JSON string but got " + data['issueTypeId']);
        }
        // ensure the json data is a string
        if (data['newStatusId'] && !(typeof data['newStatusId'] === 'string' || data['newStatusId'] instanceof String)) {
            throw new Error("Expected the field `newStatusId` to be a primitive type in the JSON string but got " + data['newStatusId']);
        }
        // ensure the json data is a string
        if (data['statusId'] && !(typeof data['statusId'] === 'string' || data['statusId'] instanceof String)) {
            throw new Error("Expected the field `statusId` to be a primitive type in the JSON string but got " + data['statusId']);
        }

        return true;
    }


}

StatusMapping.RequiredProperties = ["issueTypeId", "newStatusId", "statusId"];

/**
 * The ID of the issue type.
 * @member {String} issueTypeId
 */
StatusMapping.prototype['issueTypeId'] = undefined;

/**
 * The ID of the new status.
 * @member {String} newStatusId
 */
StatusMapping.prototype['newStatusId'] = undefined;

/**
 * The ID of the status.
 * @member {String} statusId
 */
StatusMapping.prototype['statusId'] = undefined;






export default StatusMapping;


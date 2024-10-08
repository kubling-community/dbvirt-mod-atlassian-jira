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
 * The SimpleUsage model module.
 * @module model/SimpleUsage
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class SimpleUsage {
    /**
     * Constructs a new <code>SimpleUsage</code>.
     * Represents a usage of an entity by a project ID and related issue type IDs.
     * @alias module:model/SimpleUsage
     * @param issueTypeIds {Array.<String>} The issue type IDs for the usage.
     * @param projectId {String} The project ID for the usage.
     */
    constructor(issueTypeIds, projectId) { 
        
        SimpleUsage.initialize(this, issueTypeIds, projectId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTypeIds, projectId) { 
        obj['issueTypeIds'] = issueTypeIds;
        obj['projectId'] = projectId;
    }

    /**
     * Constructs a <code>SimpleUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleUsage} obj Optional instance to populate.
     * @return {module:model/SimpleUsage} The populated <code>SimpleUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleUsage();

            if (data.hasOwnProperty('issueTypeIds')) {
                obj['issueTypeIds'] = ApiClient.convertToType(data['issueTypeIds'], ['String']);
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SimpleUsage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SimpleUsage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SimpleUsage.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['issueTypeIds'])) {
            throw new Error("Expected the field `issueTypeIds` to be an array in the JSON data but got " + data['issueTypeIds']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }

        return true;
    }


}

SimpleUsage.RequiredProperties = ["issueTypeIds", "projectId"];

/**
 * The issue type IDs for the usage.
 * @member {Array.<String>} issueTypeIds
 */
SimpleUsage.prototype['issueTypeIds'] = undefined;

/**
 * The project ID for the usage.
 * @member {String} projectId
 */
SimpleUsage.prototype['projectId'] = undefined;






export default SimpleUsage;


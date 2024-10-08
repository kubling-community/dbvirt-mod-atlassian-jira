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
 * The PublishedWorkflowId model module.
 * @module model/PublishedWorkflowId
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PublishedWorkflowId {
    /**
     * Constructs a new <code>PublishedWorkflowId</code>.
     * Properties that identify a published workflow.
     * @alias module:model/PublishedWorkflowId
     * @param name {String} The name of the workflow.
     */
    constructor(name) { 
        
        PublishedWorkflowId.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PublishedWorkflowId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishedWorkflowId} obj Optional instance to populate.
     * @return {module:model/PublishedWorkflowId} The populated <code>PublishedWorkflowId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishedWorkflowId();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PublishedWorkflowId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublishedWorkflowId</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PublishedWorkflowId.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entityId'] && !(typeof data['entityId'] === 'string' || data['entityId'] instanceof String)) {
            throw new Error("Expected the field `entityId` to be a primitive type in the JSON string but got " + data['entityId']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

PublishedWorkflowId.RequiredProperties = ["name"];

/**
 * The entity ID of the workflow.
 * @member {String} entityId
 */
PublishedWorkflowId.prototype['entityId'] = undefined;

/**
 * The name of the workflow.
 * @member {String} name
 */
PublishedWorkflowId.prototype['name'] = undefined;






export default PublishedWorkflowId;


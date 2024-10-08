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
 * The StatusesPerWorkflow model module.
 * @module model/StatusesPerWorkflow
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class StatusesPerWorkflow {
    /**
     * Constructs a new <code>StatusesPerWorkflow</code>.
     * The statuses associated with each workflow.
     * @alias module:model/StatusesPerWorkflow
     */
    constructor() { 
        
        StatusesPerWorkflow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatusesPerWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusesPerWorkflow} obj Optional instance to populate.
     * @return {module:model/StatusesPerWorkflow} The populated <code>StatusesPerWorkflow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusesPerWorkflow();

            if (data.hasOwnProperty('initialStatusId')) {
                obj['initialStatusId'] = ApiClient.convertToType(data['initialStatusId'], 'String');
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], ['String']);
            }
            if (data.hasOwnProperty('workflowId')) {
                obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StatusesPerWorkflow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StatusesPerWorkflow</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['initialStatusId'] && !(typeof data['initialStatusId'] === 'string' || data['initialStatusId'] instanceof String)) {
            throw new Error("Expected the field `initialStatusId` to be a primitive type in the JSON string but got " + data['initialStatusId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['statuses'])) {
            throw new Error("Expected the field `statuses` to be an array in the JSON data but got " + data['statuses']);
        }
        // ensure the json data is a string
        if (data['workflowId'] && !(typeof data['workflowId'] === 'string' || data['workflowId'] instanceof String)) {
            throw new Error("Expected the field `workflowId` to be a primitive type in the JSON string but got " + data['workflowId']);
        }

        return true;
    }


}



/**
 * The ID of the initial status for the workflow.
 * @member {String} initialStatusId
 */
StatusesPerWorkflow.prototype['initialStatusId'] = undefined;

/**
 * The status IDs associated with the workflow.
 * @member {Array.<String>} statuses
 */
StatusesPerWorkflow.prototype['statuses'] = undefined;

/**
 * The ID of the workflow.
 * @member {String} workflowId
 */
StatusesPerWorkflow.prototype['workflowId'] = undefined;






export default StatusesPerWorkflow;


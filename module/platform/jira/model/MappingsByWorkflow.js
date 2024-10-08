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
import WorkflowAssociationStatusMapping from './WorkflowAssociationStatusMapping';

/**
 * The MappingsByWorkflow model module.
 * @module model/MappingsByWorkflow
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class MappingsByWorkflow {
    /**
     * Constructs a new <code>MappingsByWorkflow</code>.
     * The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn&#39;t contain all statuses that the old workflow has. Status mappings can be provided by a combination of &#x60;statusMappingsByWorkflows&#x60; and &#x60;statusMappingsByIssueTypeOverride&#x60;.
     * @alias module:model/MappingsByWorkflow
     * @param newWorkflowId {String} The ID of the new workflow.
     * @param oldWorkflowId {String} The ID of the old workflow.
     * @param statusMappings {Array.<module:model/WorkflowAssociationStatusMapping>} The list of status mappings.
     */
    constructor(newWorkflowId, oldWorkflowId, statusMappings) { 
        
        MappingsByWorkflow.initialize(this, newWorkflowId, oldWorkflowId, statusMappings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newWorkflowId, oldWorkflowId, statusMappings) { 
        obj['newWorkflowId'] = newWorkflowId;
        obj['oldWorkflowId'] = oldWorkflowId;
        obj['statusMappings'] = statusMappings;
    }

    /**
     * Constructs a <code>MappingsByWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MappingsByWorkflow} obj Optional instance to populate.
     * @return {module:model/MappingsByWorkflow} The populated <code>MappingsByWorkflow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MappingsByWorkflow();

            if (data.hasOwnProperty('newWorkflowId')) {
                obj['newWorkflowId'] = ApiClient.convertToType(data['newWorkflowId'], 'String');
            }
            if (data.hasOwnProperty('oldWorkflowId')) {
                obj['oldWorkflowId'] = ApiClient.convertToType(data['oldWorkflowId'], 'String');
            }
            if (data.hasOwnProperty('statusMappings')) {
                obj['statusMappings'] = ApiClient.convertToType(data['statusMappings'], [WorkflowAssociationStatusMapping]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MappingsByWorkflow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MappingsByWorkflow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MappingsByWorkflow.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['newWorkflowId'] && !(typeof data['newWorkflowId'] === 'string' || data['newWorkflowId'] instanceof String)) {
            throw new Error("Expected the field `newWorkflowId` to be a primitive type in the JSON string but got " + data['newWorkflowId']);
        }
        // ensure the json data is a string
        if (data['oldWorkflowId'] && !(typeof data['oldWorkflowId'] === 'string' || data['oldWorkflowId'] instanceof String)) {
            throw new Error("Expected the field `oldWorkflowId` to be a primitive type in the JSON string but got " + data['oldWorkflowId']);
        }
        if (data['statusMappings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statusMappings'])) {
                throw new Error("Expected the field `statusMappings` to be an array in the JSON data but got " + data['statusMappings']);
            }
            // validate the optional field `statusMappings` (array)
            for (const item of data['statusMappings']) {
                WorkflowAssociationStatusMapping.validateJSON(item);
            };
        }

        return true;
    }


}

MappingsByWorkflow.RequiredProperties = ["newWorkflowId", "oldWorkflowId", "statusMappings"];

/**
 * The ID of the new workflow.
 * @member {String} newWorkflowId
 */
MappingsByWorkflow.prototype['newWorkflowId'] = undefined;

/**
 * The ID of the old workflow.
 * @member {String} oldWorkflowId
 */
MappingsByWorkflow.prototype['oldWorkflowId'] = undefined;

/**
 * The list of status mappings.
 * @member {Array.<module:model/WorkflowAssociationStatusMapping>} statusMappings
 */
MappingsByWorkflow.prototype['statusMappings'] = undefined;






export default MappingsByWorkflow;


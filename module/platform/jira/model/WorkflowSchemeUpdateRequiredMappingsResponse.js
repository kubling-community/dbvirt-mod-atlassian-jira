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
import RequiredMappingByIssueType from './RequiredMappingByIssueType';
import RequiredMappingByWorkflows from './RequiredMappingByWorkflows';
import StatusMetadata from './StatusMetadata';
import StatusesPerWorkflow from './StatusesPerWorkflow';

/**
 * The WorkflowSchemeUpdateRequiredMappingsResponse model module.
 * @module model/WorkflowSchemeUpdateRequiredMappingsResponse
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorkflowSchemeUpdateRequiredMappingsResponse {
    /**
     * Constructs a new <code>WorkflowSchemeUpdateRequiredMappingsResponse</code>.
     * @alias module:model/WorkflowSchemeUpdateRequiredMappingsResponse
     */
    constructor() { 
        
        WorkflowSchemeUpdateRequiredMappingsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowSchemeUpdateRequiredMappingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowSchemeUpdateRequiredMappingsResponse} obj Optional instance to populate.
     * @return {module:model/WorkflowSchemeUpdateRequiredMappingsResponse} The populated <code>WorkflowSchemeUpdateRequiredMappingsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowSchemeUpdateRequiredMappingsResponse();

            if (data.hasOwnProperty('statusMappingsByIssueTypes')) {
                obj['statusMappingsByIssueTypes'] = ApiClient.convertToType(data['statusMappingsByIssueTypes'], [RequiredMappingByIssueType]);
            }
            if (data.hasOwnProperty('statusMappingsByWorkflows')) {
                obj['statusMappingsByWorkflows'] = ApiClient.convertToType(data['statusMappingsByWorkflows'], [RequiredMappingByWorkflows]);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], [StatusMetadata]);
            }
            if (data.hasOwnProperty('statusesPerWorkflow')) {
                obj['statusesPerWorkflow'] = ApiClient.convertToType(data['statusesPerWorkflow'], [StatusesPerWorkflow]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowSchemeUpdateRequiredMappingsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowSchemeUpdateRequiredMappingsResponse</code>.
     */
    static validateJSON(data) {
        if (data['statusMappingsByIssueTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statusMappingsByIssueTypes'])) {
                throw new Error("Expected the field `statusMappingsByIssueTypes` to be an array in the JSON data but got " + data['statusMappingsByIssueTypes']);
            }
            // validate the optional field `statusMappingsByIssueTypes` (array)
            for (const item of data['statusMappingsByIssueTypes']) {
                RequiredMappingByIssueType.validateJSON(item);
            };
        }
        if (data['statusMappingsByWorkflows']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statusMappingsByWorkflows'])) {
                throw new Error("Expected the field `statusMappingsByWorkflows` to be an array in the JSON data but got " + data['statusMappingsByWorkflows']);
            }
            // validate the optional field `statusMappingsByWorkflows` (array)
            for (const item of data['statusMappingsByWorkflows']) {
                RequiredMappingByWorkflows.validateJSON(item);
            };
        }
        if (data['statuses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statuses'])) {
                throw new Error("Expected the field `statuses` to be an array in the JSON data but got " + data['statuses']);
            }
            // validate the optional field `statuses` (array)
            for (const item of data['statuses']) {
                StatusMetadata.validateJSON(item);
            };
        }
        if (data['statusesPerWorkflow']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['statusesPerWorkflow'])) {
                throw new Error("Expected the field `statusesPerWorkflow` to be an array in the JSON data but got " + data['statusesPerWorkflow']);
            }
            // validate the optional field `statusesPerWorkflow` (array)
            for (const item of data['statusesPerWorkflow']) {
                StatusesPerWorkflow.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of required status mappings by issue type.
 * @member {Array.<module:model/RequiredMappingByIssueType>} statusMappingsByIssueTypes
 */
WorkflowSchemeUpdateRequiredMappingsResponse.prototype['statusMappingsByIssueTypes'] = undefined;

/**
 * The list of required status mappings by workflow.
 * @member {Array.<module:model/RequiredMappingByWorkflows>} statusMappingsByWorkflows
 */
WorkflowSchemeUpdateRequiredMappingsResponse.prototype['statusMappingsByWorkflows'] = undefined;

/**
 * The details of the statuses in the associated workflows.
 * @member {Array.<module:model/StatusMetadata>} statuses
 */
WorkflowSchemeUpdateRequiredMappingsResponse.prototype['statuses'] = undefined;

/**
 * The statuses associated with each workflow.
 * @member {Array.<module:model/StatusesPerWorkflow>} statusesPerWorkflow
 */
WorkflowSchemeUpdateRequiredMappingsResponse.prototype['statusesPerWorkflow'] = undefined;






export default WorkflowSchemeUpdateRequiredMappingsResponse;


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
import ProjectIssueTypes from './ProjectIssueTypes';
import StatusScope from './StatusScope';
import WorkflowUsages from './WorkflowUsages';

/**
 * The JiraStatus model module.
 * @module model/JiraStatus
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraStatus {
    /**
     * Constructs a new <code>JiraStatus</code>.
     * Details of a status.
     * @alias module:model/JiraStatus
     */
    constructor() { 
        
        JiraStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JiraStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraStatus} obj Optional instance to populate.
     * @return {module:model/JiraStatus} The populated <code>JiraStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraStatus();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = StatusScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('statusCategory')) {
                obj['statusCategory'] = ApiClient.convertToType(data['statusCategory'], 'String');
            }
            if (data.hasOwnProperty('usages')) {
                obj['usages'] = ApiClient.convertToType(data['usages'], [ProjectIssueTypes]);
            }
            if (data.hasOwnProperty('workflowUsages')) {
                obj['workflowUsages'] = ApiClient.convertToType(data['workflowUsages'], [WorkflowUsages]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `scope`
        if (data['scope']) { // data not null
          StatusScope.validateJSON(data['scope']);
        }
        // ensure the json data is a string
        if (data['statusCategory'] && !(typeof data['statusCategory'] === 'string' || data['statusCategory'] instanceof String)) {
            throw new Error("Expected the field `statusCategory` to be a primitive type in the JSON string but got " + data['statusCategory']);
        }
        if (data['usages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['usages'])) {
                throw new Error("Expected the field `usages` to be an array in the JSON data but got " + data['usages']);
            }
            // validate the optional field `usages` (array)
            for (const item of data['usages']) {
                ProjectIssueTypes.validateJSON(item);
            };
        }
        if (data['workflowUsages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['workflowUsages'])) {
                throw new Error("Expected the field `workflowUsages` to be an array in the JSON data but got " + data['workflowUsages']);
            }
            // validate the optional field `workflowUsages` (array)
            for (const item of data['workflowUsages']) {
                WorkflowUsages.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The description of the status.
 * @member {String} description
 */
JiraStatus.prototype['description'] = undefined;

/**
 * The ID of the status.
 * @member {String} id
 */
JiraStatus.prototype['id'] = undefined;

/**
 * The name of the status.
 * @member {String} name
 */
JiraStatus.prototype['name'] = undefined;

/**
 * @member {module:model/StatusScope} scope
 */
JiraStatus.prototype['scope'] = undefined;

/**
 * The category of the status.
 * @member {module:model/JiraStatus.StatusCategoryEnum} statusCategory
 */
JiraStatus.prototype['statusCategory'] = undefined;

/**
 * Projects and issue types where the status is used. Only available if the `usages` expand is requested.
 * @member {Array.<module:model/ProjectIssueTypes>} usages
 */
JiraStatus.prototype['usages'] = undefined;

/**
 * The workflows that use this status. Only available if the `workflowUsages` expand is requested.
 * @member {Array.<module:model/WorkflowUsages>} workflowUsages
 */
JiraStatus.prototype['workflowUsages'] = undefined;





/**
 * Allowed values for the <code>statusCategory</code> property.
 * @enum {String}
 * @readonly
 */
JiraStatus['StatusCategoryEnum'] = {

    /**
     * value: "TODO"
     * @const
     */
    "TODO": "TODO",

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS",

    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE"
};



export default JiraStatus;


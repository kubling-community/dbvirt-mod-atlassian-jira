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
import StatusLayoutUpdate from './StatusLayoutUpdate';
import TransitionUpdateDTO from './TransitionUpdateDTO';
import WorkflowLayout from './WorkflowLayout';

/**
 * The WorkflowCreate model module.
 * @module model/WorkflowCreate
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorkflowCreate {
    /**
     * Constructs a new <code>WorkflowCreate</code>.
     * The details of the workflows to create.
     * @alias module:model/WorkflowCreate
     * @param name {String} The name of the workflow to create.
     * @param statuses {Array.<module:model/StatusLayoutUpdate>} The statuses associated with this workflow.
     * @param transitions {Array.<module:model/TransitionUpdateDTO>} The transitions of this workflow.
     */
    constructor(name, statuses, transitions) { 
        
        WorkflowCreate.initialize(this, name, statuses, transitions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, statuses, transitions) { 
        obj['name'] = name;
        obj['statuses'] = statuses;
        obj['transitions'] = transitions;
    }

    /**
     * Constructs a <code>WorkflowCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCreate} obj Optional instance to populate.
     * @return {module:model/WorkflowCreate} The populated <code>WorkflowCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowCreate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startPointLayout')) {
                obj['startPointLayout'] = WorkflowLayout.constructFromObject(data['startPointLayout']);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], [StatusLayoutUpdate]);
            }
            if (data.hasOwnProperty('transitions')) {
                obj['transitions'] = ApiClient.convertToType(data['transitions'], [TransitionUpdateDTO]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkflowCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `startPointLayout`
        if (data['startPointLayout']) { // data not null
          WorkflowLayout.validateJSON(data['startPointLayout']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['statuses'])) {
            throw new Error("Expected the field `statuses` to be an array in the JSON data but got " + data['statuses']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['transitions'])) {
            throw new Error("Expected the field `transitions` to be an array in the JSON data but got " + data['transitions']);
        }

        return true;
    }


}

WorkflowCreate.RequiredProperties = ["name", "statuses", "transitions"];

/**
 * The description of the workflow to create.
 * @member {String} description
 */
WorkflowCreate.prototype['description'] = undefined;

/**
 * The name of the workflow to create.
 * @member {String} name
 */
WorkflowCreate.prototype['name'] = undefined;

/**
 * @member {module:model/WorkflowLayout} startPointLayout
 */
WorkflowCreate.prototype['startPointLayout'] = undefined;

/**
 * The statuses associated with this workflow.
 * @member {Array.<module:model/StatusLayoutUpdate>} statuses
 */
WorkflowCreate.prototype['statuses'] = undefined;

/**
 * The transitions of this workflow.
 * @member {Array.<module:model/TransitionUpdateDTO>} transitions
 */
WorkflowCreate.prototype['transitions'] = undefined;






export default WorkflowCreate;


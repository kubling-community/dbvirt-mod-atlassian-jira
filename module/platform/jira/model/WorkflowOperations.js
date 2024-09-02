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
 * The WorkflowOperations model module.
 * @module model/WorkflowOperations
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorkflowOperations {
    /**
     * Constructs a new <code>WorkflowOperations</code>.
     * Operations allowed on a workflow
     * @alias module:model/WorkflowOperations
     * @param canDelete {Boolean} Whether the workflow can be deleted.
     * @param canEdit {Boolean} Whether the workflow can be updated.
     */
    constructor(canDelete, canEdit) { 
        
        WorkflowOperations.initialize(this, canDelete, canEdit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, canDelete, canEdit) { 
        obj['canDelete'] = canDelete;
        obj['canEdit'] = canEdit;
    }

    /**
     * Constructs a <code>WorkflowOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowOperations} obj Optional instance to populate.
     * @return {module:model/WorkflowOperations} The populated <code>WorkflowOperations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowOperations();

            if (data.hasOwnProperty('canDelete')) {
                obj['canDelete'] = ApiClient.convertToType(data['canDelete'], 'Boolean');
            }
            if (data.hasOwnProperty('canEdit')) {
                obj['canEdit'] = ApiClient.convertToType(data['canEdit'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowOperations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowOperations</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WorkflowOperations.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

WorkflowOperations.RequiredProperties = ["canDelete", "canEdit"];

/**
 * Whether the workflow can be deleted.
 * @member {Boolean} canDelete
 */
WorkflowOperations.prototype['canDelete'] = undefined;

/**
 * Whether the workflow can be updated.
 * @member {Boolean} canEdit
 */
WorkflowOperations.prototype['canEdit'] = undefined;






export default WorkflowOperations;


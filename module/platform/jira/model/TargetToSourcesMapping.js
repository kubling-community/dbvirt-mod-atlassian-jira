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
import TargetMandatoryFields from './TargetMandatoryFields';
import TargetStatus from './TargetStatus';

/**
 * The TargetToSourcesMapping model module.
 * @module model/TargetToSourcesMapping
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class TargetToSourcesMapping {
    /**
     * Constructs a new <code>TargetToSourcesMapping</code>.
     * An object representing the mapping of issues and data related to destination entities, like fields and statuses, that are required during a bulk move.
     * @alias module:model/TargetToSourcesMapping
     * @param inferFieldDefaults {Boolean} If `true`, values from the source issues will be retained for the mandatory fields in the field configuration of the destination project. The `targetMandatoryFields` property shouldn't be defined.  If `false`, the user is required to set values for mandatory fields present in the field configuration of the destination project. Provide input by defining the `targetMandatoryFields` property
     * @param inferStatusDefaults {Boolean} If `true`, the statuses of issues being moved in this target group that are not present in the target workflow will be changed to the default status of the target workflow (see below). Leave `targetStatus` empty when using this.  If `false`, you must provide a `targetStatus` for each status not present in the target workflow.  The default status in a workflow is referred to as the \"initial status\". Each workflow has its own unique initial status. When an issue is created, it is automatically assigned to this initial status. Read more about configuring initial statuses: [Configure the initial status | Atlassian Support.](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-initial-status/)
     * @param inferSubtaskTypeDefault {Boolean} When an issue is moved, its subtasks (if there are any) need to be moved with it. `inferSubtaskTypeDefault` helps with moving the subtasks by picking a random subtask type in the target project.  If `true`, subtasks will automatically move to the same project as their parent.  When they move:   *  Their `issueType` will be set to the default for subtasks in the target project.  *  Values for mandatory fields will be retained from the source issues  *  Specifying separate mapping for implicit subtasks won’t be allowed.  If `false`, you must manually move the subtasks. They will retain the parent which they had in the current project after being moved.
     */
    constructor(inferFieldDefaults, inferStatusDefaults, inferSubtaskTypeDefault) { 
        
        TargetToSourcesMapping.initialize(this, inferFieldDefaults, inferStatusDefaults, inferSubtaskTypeDefault);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, inferFieldDefaults, inferStatusDefaults, inferSubtaskTypeDefault) { 
        obj['inferFieldDefaults'] = inferFieldDefaults;
        obj['inferStatusDefaults'] = inferStatusDefaults;
        obj['inferSubtaskTypeDefault'] = inferSubtaskTypeDefault;
    }

    /**
     * Constructs a <code>TargetToSourcesMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetToSourcesMapping} obj Optional instance to populate.
     * @return {module:model/TargetToSourcesMapping} The populated <code>TargetToSourcesMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetToSourcesMapping();

            if (data.hasOwnProperty('inferFieldDefaults')) {
                obj['inferFieldDefaults'] = ApiClient.convertToType(data['inferFieldDefaults'], 'Boolean');
            }
            if (data.hasOwnProperty('inferStatusDefaults')) {
                obj['inferStatusDefaults'] = ApiClient.convertToType(data['inferStatusDefaults'], 'Boolean');
            }
            if (data.hasOwnProperty('inferSubtaskTypeDefault')) {
                obj['inferSubtaskTypeDefault'] = ApiClient.convertToType(data['inferSubtaskTypeDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('issueIdsOrKeys')) {
                obj['issueIdsOrKeys'] = ApiClient.convertToType(data['issueIdsOrKeys'], ['String']);
            }
            if (data.hasOwnProperty('targetMandatoryFields')) {
                obj['targetMandatoryFields'] = ApiClient.convertToType(data['targetMandatoryFields'], [TargetMandatoryFields]);
            }
            if (data.hasOwnProperty('targetStatus')) {
                obj['targetStatus'] = ApiClient.convertToType(data['targetStatus'], [TargetStatus]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetToSourcesMapping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetToSourcesMapping</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetToSourcesMapping.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['issueIdsOrKeys'])) {
            throw new Error("Expected the field `issueIdsOrKeys` to be an array in the JSON data but got " + data['issueIdsOrKeys']);
        }
        if (data['targetMandatoryFields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['targetMandatoryFields'])) {
                throw new Error("Expected the field `targetMandatoryFields` to be an array in the JSON data but got " + data['targetMandatoryFields']);
            }
            // validate the optional field `targetMandatoryFields` (array)
            for (const item of data['targetMandatoryFields']) {
                TargetMandatoryFields.validateJSON(item);
            };
        }
        if (data['targetStatus']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['targetStatus'])) {
                throw new Error("Expected the field `targetStatus` to be an array in the JSON data but got " + data['targetStatus']);
            }
            // validate the optional field `targetStatus` (array)
            for (const item of data['targetStatus']) {
                TargetStatus.validateJSON(item);
            };
        }

        return true;
    }


}

TargetToSourcesMapping.RequiredProperties = ["inferFieldDefaults", "inferStatusDefaults", "inferSubtaskTypeDefault"];

/**
 * If `true`, values from the source issues will be retained for the mandatory fields in the field configuration of the destination project. The `targetMandatoryFields` property shouldn't be defined.  If `false`, the user is required to set values for mandatory fields present in the field configuration of the destination project. Provide input by defining the `targetMandatoryFields` property
 * @member {Boolean} inferFieldDefaults
 */
TargetToSourcesMapping.prototype['inferFieldDefaults'] = undefined;

/**
 * If `true`, the statuses of issues being moved in this target group that are not present in the target workflow will be changed to the default status of the target workflow (see below). Leave `targetStatus` empty when using this.  If `false`, you must provide a `targetStatus` for each status not present in the target workflow.  The default status in a workflow is referred to as the \"initial status\". Each workflow has its own unique initial status. When an issue is created, it is automatically assigned to this initial status. Read more about configuring initial statuses: [Configure the initial status | Atlassian Support.](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-initial-status/)
 * @member {Boolean} inferStatusDefaults
 */
TargetToSourcesMapping.prototype['inferStatusDefaults'] = undefined;

/**
 * When an issue is moved, its subtasks (if there are any) need to be moved with it. `inferSubtaskTypeDefault` helps with moving the subtasks by picking a random subtask type in the target project.  If `true`, subtasks will automatically move to the same project as their parent.  When they move:   *  Their `issueType` will be set to the default for subtasks in the target project.  *  Values for mandatory fields will be retained from the source issues  *  Specifying separate mapping for implicit subtasks won’t be allowed.  If `false`, you must manually move the subtasks. They will retain the parent which they had in the current project after being moved.
 * @member {Boolean} inferSubtaskTypeDefault
 */
TargetToSourcesMapping.prototype['inferSubtaskTypeDefault'] = undefined;

/**
 * List of issue IDs or keys to be moved. These issues must be from the same project, have the same issue type, and be from the same parent (if they’re subtasks).
 * @member {Array.<String>} issueIdsOrKeys
 */
TargetToSourcesMapping.prototype['issueIdsOrKeys'] = undefined;

/**
 * List of objects containing mandatory fields in the target field configuration and new values that need to be set during the bulk move operation.  The new values will only be applied if the field is mandatory in the target project and at least one issue from the source has that field empty, or if the field context is different in the target project (e.g. project-scoped version fields).  **You should only define this property when `inferFieldDefaults` is `false`.**
 * @member {Array.<module:model/TargetMandatoryFields>} targetMandatoryFields
 */
TargetToSourcesMapping.prototype['targetMandatoryFields'] = undefined;

/**
 * List of the objects containing statuses in the source workflow and their new values which need to be set during the bulk move operation.  The new values will only be applied if the source status is invalid for the target project and issue type.  **You should only define this property when `inferStatusDefaults` is `false`.**
 * @member {Array.<module:model/TargetStatus>} targetStatus
 */
TargetToSourcesMapping.prototype['targetStatus'] = undefined;






export default TargetToSourcesMapping;


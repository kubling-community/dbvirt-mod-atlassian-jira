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
import ProjectId from './ProjectId';

/**
 * The ProjectIssueTypes model module.
 * @module model/ProjectIssueTypes
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ProjectIssueTypes {
    /**
     * Constructs a new <code>ProjectIssueTypes</code>.
     * Use the optional &#x60;workflows.usages&#x60; expand to get additional information about the projects and issue types associated with the requested workflows.
     * @alias module:model/ProjectIssueTypes
     */
    constructor() { 
        
        ProjectIssueTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectIssueTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueTypes} obj Optional instance to populate.
     * @return {module:model/ProjectIssueTypes} The populated <code>ProjectIssueTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectIssueTypes();

            if (data.hasOwnProperty('issueTypes')) {
                obj['issueTypes'] = ApiClient.convertToType(data['issueTypes'], ['String']);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ProjectId.constructFromObject(data['project']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectIssueTypes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectIssueTypes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['issueTypes'])) {
            throw new Error("Expected the field `issueTypes` to be an array in the JSON data but got " + data['issueTypes']);
        }
        // validate the optional field `project`
        if (data['project']) { // data not null
          ProjectId.validateJSON(data['project']);
        }

        return true;
    }


}



/**
 * IDs of the issue types
 * @member {Array.<String>} issueTypes
 */
ProjectIssueTypes.prototype['issueTypes'] = undefined;

/**
 * @member {module:model/ProjectId} project
 */
ProjectIssueTypes.prototype['project'] = undefined;






export default ProjectIssueTypes;


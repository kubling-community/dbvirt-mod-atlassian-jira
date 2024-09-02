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
import IssueTypeScreenScheme from './IssueTypeScreenScheme';

/**
 * The IssueTypeScreenSchemesProjects model module.
 * @module model/IssueTypeScreenSchemesProjects
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueTypeScreenSchemesProjects {
    /**
     * Constructs a new <code>IssueTypeScreenSchemesProjects</code>.
     * Issue type screen scheme with a list of the projects that use it.
     * @alias module:model/IssueTypeScreenSchemesProjects
     * @param issueTypeScreenScheme {module:model/IssueTypeScreenScheme} Details of an issue type screen scheme.
     * @param projectIds {Array.<String>} The IDs of the projects using the issue type screen scheme.
     */
    constructor(issueTypeScreenScheme, projectIds) { 
        
        IssueTypeScreenSchemesProjects.initialize(this, issueTypeScreenScheme, projectIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTypeScreenScheme, projectIds) { 
        obj['issueTypeScreenScheme'] = issueTypeScreenScheme;
        obj['projectIds'] = projectIds;
    }

    /**
     * Constructs a <code>IssueTypeScreenSchemesProjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemesProjects} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemesProjects} The populated <code>IssueTypeScreenSchemesProjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeScreenSchemesProjects();

            if (data.hasOwnProperty('issueTypeScreenScheme')) {
                obj['issueTypeScreenScheme'] = ApiClient.convertToType(data['issueTypeScreenScheme'], IssueTypeScreenScheme);
            }
            if (data.hasOwnProperty('projectIds')) {
                obj['projectIds'] = ApiClient.convertToType(data['projectIds'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueTypeScreenSchemesProjects</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueTypeScreenSchemesProjects</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueTypeScreenSchemesProjects.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `issueTypeScreenScheme`
        if (data['issueTypeScreenScheme']) { // data not null
          IssueTypeScreenScheme.validateJSON(data['issueTypeScreenScheme']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['projectIds'])) {
            throw new Error("Expected the field `projectIds` to be an array in the JSON data but got " + data['projectIds']);
        }

        return true;
    }


}

IssueTypeScreenSchemesProjects.RequiredProperties = ["issueTypeScreenScheme", "projectIds"];

/**
 * Details of an issue type screen scheme.
 * @member {module:model/IssueTypeScreenScheme} issueTypeScreenScheme
 */
IssueTypeScreenSchemesProjects.prototype['issueTypeScreenScheme'] = undefined;

/**
 * The IDs of the projects using the issue type screen scheme.
 * @member {Array.<String>} projectIds
 */
IssueTypeScreenSchemesProjects.prototype['projectIds'] = undefined;






export default IssueTypeScreenSchemesProjects;


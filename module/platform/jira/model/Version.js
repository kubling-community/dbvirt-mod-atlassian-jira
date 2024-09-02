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
import SimpleLink from './SimpleLink';
import VersionApprover from './VersionApprover';
import VersionIssuesStatusForFixVersion from './VersionIssuesStatusForFixVersion';

/**
 * The Version model module.
 * @module model/Version
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Version {
    /**
     * Constructs a new <code>Version</code>.
     * Details about a project version.
     * @alias module:model/Version
     */
    constructor() { 
        
        Version.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version();

            if (data.hasOwnProperty('approvers')) {
                obj['approvers'] = ApiClient.convertToType(data['approvers'], [VersionApprover]);
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issuesStatusForFixVersion')) {
                obj['issuesStatusForFixVersion'] = VersionIssuesStatusForFixVersion.constructFromObject(data['issuesStatusForFixVersion']);
            }
            if (data.hasOwnProperty('moveUnfixedIssuesTo')) {
                obj['moveUnfixedIssuesTo'] = ApiClient.convertToType(data['moveUnfixedIssuesTo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [SimpleLink]);
            }
            if (data.hasOwnProperty('overdue')) {
                obj['overdue'] = ApiClient.convertToType(data['overdue'], 'Boolean');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('releaseDate')) {
                obj['releaseDate'] = ApiClient.convertToType(data['releaseDate'], 'Date');
            }
            if (data.hasOwnProperty('released')) {
                obj['released'] = ApiClient.convertToType(data['released'], 'Boolean');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('userReleaseDate')) {
                obj['userReleaseDate'] = ApiClient.convertToType(data['userReleaseDate'], 'String');
            }
            if (data.hasOwnProperty('userStartDate')) {
                obj['userStartDate'] = ApiClient.convertToType(data['userStartDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Version</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Version</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['approvers'])) {
            throw new Error("Expected the field `approvers` to be an array in the JSON data but got " + data['approvers']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['driver'] && !(typeof data['driver'] === 'string' || data['driver'] instanceof String)) {
            throw new Error("Expected the field `driver` to be a primitive type in the JSON string but got " + data['driver']);
        }
        // ensure the json data is a string
        if (data['expand'] && !(typeof data['expand'] === 'string' || data['expand'] instanceof String)) {
            throw new Error("Expected the field `expand` to be a primitive type in the JSON string but got " + data['expand']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `issuesStatusForFixVersion`
        if (data['issuesStatusForFixVersion']) { // data not null
          VersionIssuesStatusForFixVersion.validateJSON(data['issuesStatusForFixVersion']);
        }
        // ensure the json data is a string
        if (data['moveUnfixedIssuesTo'] && !(typeof data['moveUnfixedIssuesTo'] === 'string' || data['moveUnfixedIssuesTo'] instanceof String)) {
            throw new Error("Expected the field `moveUnfixedIssuesTo` to be a primitive type in the JSON string but got " + data['moveUnfixedIssuesTo']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['operations'])) {
                throw new Error("Expected the field `operations` to be an array in the JSON data but got " + data['operations']);
            }
            // validate the optional field `operations` (array)
            for (const item of data['operations']) {
                SimpleLink.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['userReleaseDate'] && !(typeof data['userReleaseDate'] === 'string' || data['userReleaseDate'] instanceof String)) {
            throw new Error("Expected the field `userReleaseDate` to be a primitive type in the JSON string but got " + data['userReleaseDate']);
        }
        // ensure the json data is a string
        if (data['userStartDate'] && !(typeof data['userStartDate'] === 'string' || data['userStartDate'] instanceof String)) {
            throw new Error("Expected the field `userStartDate` to be a primitive type in the JSON string but got " + data['userStartDate']);
        }

        return true;
    }


}



/**
 * If the expand option `approvers` is used, returns a list containing the approvers for this version.
 * @member {Array.<module:model/VersionApprover>} approvers
 */
Version.prototype['approvers'] = undefined;

/**
 * Indicates that the version is archived. Optional when creating or updating a version.
 * @member {Boolean} archived
 */
Version.prototype['archived'] = undefined;

/**
 * The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes.
 * @member {String} description
 */
Version.prototype['description'] = undefined;

/**
 * If the expand option `driver` is used, returns the Atlassian account ID of the driver.
 * @member {String} driver
 */
Version.prototype['driver'] = undefined;

/**
 * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing approvers for this version.  Optional for create and update.
 * @member {String} expand
 */
Version.prototype['expand'] = undefined;

/**
 * The ID of the version.
 * @member {String} id
 */
Version.prototype['id'] = undefined;

/**
 * @member {module:model/VersionIssuesStatusForFixVersion} issuesStatusForFixVersion
 */
Version.prototype['issuesStatusForFixVersion'] = undefined;

/**
 * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
 * @member {String} moveUnfixedIssuesTo
 */
Version.prototype['moveUnfixedIssuesTo'] = undefined;

/**
 * The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
 * @member {String} name
 */
Version.prototype['name'] = undefined;

/**
 * If the expand option `operations` is used, returns the list of operations available for this version.
 * @member {Array.<module:model/SimpleLink>} operations
 */
Version.prototype['operations'] = undefined;

/**
 * Indicates that the version is overdue.
 * @member {Boolean} overdue
 */
Version.prototype['overdue'] = undefined;

/**
 * Deprecated. Use `projectId`.
 * @member {String} project
 */
Version.prototype['project'] = undefined;

/**
 * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
 * @member {Number} projectId
 */
Version.prototype['projectId'] = undefined;

/**
 * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} releaseDate
 */
Version.prototype['releaseDate'] = undefined;

/**
 * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
 * @member {Boolean} released
 */
Version.prototype['released'] = undefined;

/**
 * The URL of the version.
 * @member {String} self
 */
Version.prototype['self'] = undefined;

/**
 * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} startDate
 */
Version.prototype['startDate'] = undefined;

/**
 * The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userReleaseDate
 */
Version.prototype['userReleaseDate'] = undefined;

/**
 * The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userStartDate
 */
Version.prototype['userStartDate'] = undefined;






export default Version;


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
 * The IssueTypeScreenSchemeProjectAssociation model module.
 * @module model/IssueTypeScreenSchemeProjectAssociation
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueTypeScreenSchemeProjectAssociation {
    /**
     * Constructs a new <code>IssueTypeScreenSchemeProjectAssociation</code>.
     * Associated issue type screen scheme and project.
     * @alias module:model/IssueTypeScreenSchemeProjectAssociation
     */
    constructor() { 
        
        IssueTypeScreenSchemeProjectAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTypeScreenSchemeProjectAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemeProjectAssociation} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemeProjectAssociation} The populated <code>IssueTypeScreenSchemeProjectAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeScreenSchemeProjectAssociation();

            if (data.hasOwnProperty('issueTypeScreenSchemeId')) {
                obj['issueTypeScreenSchemeId'] = ApiClient.convertToType(data['issueTypeScreenSchemeId'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueTypeScreenSchemeProjectAssociation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueTypeScreenSchemeProjectAssociation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['issueTypeScreenSchemeId'] && !(typeof data['issueTypeScreenSchemeId'] === 'string' || data['issueTypeScreenSchemeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeScreenSchemeId` to be a primitive type in the JSON string but got " + data['issueTypeScreenSchemeId']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }

        return true;
    }


}



/**
 * The ID of the issue type screen scheme.
 * @member {String} issueTypeScreenSchemeId
 */
IssueTypeScreenSchemeProjectAssociation.prototype['issueTypeScreenSchemeId'] = undefined;

/**
 * The ID of the project.
 * @member {String} projectId
 */
IssueTypeScreenSchemeProjectAssociation.prototype['projectId'] = undefined;






export default IssueTypeScreenSchemeProjectAssociation;


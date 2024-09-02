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
 * The IssueSecuritySchemeToProjectMapping model module.
 * @module model/IssueSecuritySchemeToProjectMapping
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueSecuritySchemeToProjectMapping {
    /**
     * Constructs a new <code>IssueSecuritySchemeToProjectMapping</code>.
     * Details about an project using security scheme mapping.
     * @alias module:model/IssueSecuritySchemeToProjectMapping
     * @extends Object
     */
    constructor() { 
        
        IssueSecuritySchemeToProjectMapping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueSecuritySchemeToProjectMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSecuritySchemeToProjectMapping} obj Optional instance to populate.
     * @return {module:model/IssueSecuritySchemeToProjectMapping} The populated <code>IssueSecuritySchemeToProjectMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueSecuritySchemeToProjectMapping();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('issueSecuritySchemeId')) {
                obj['issueSecuritySchemeId'] = ApiClient.convertToType(data['issueSecuritySchemeId'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueSecuritySchemeToProjectMapping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueSecuritySchemeToProjectMapping</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['issueSecuritySchemeId'] && !(typeof data['issueSecuritySchemeId'] === 'string' || data['issueSecuritySchemeId'] instanceof String)) {
            throw new Error("Expected the field `issueSecuritySchemeId` to be a primitive type in the JSON string but got " + data['issueSecuritySchemeId']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }

        return true;
    }


}



/**
 * @member {String} issueSecuritySchemeId
 */
IssueSecuritySchemeToProjectMapping.prototype['issueSecuritySchemeId'] = undefined;

/**
 * @member {String} projectId
 */
IssueSecuritySchemeToProjectMapping.prototype['projectId'] = undefined;






export default IssueSecuritySchemeToProjectMapping;


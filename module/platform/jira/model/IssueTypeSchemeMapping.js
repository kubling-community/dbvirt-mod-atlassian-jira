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
 * The IssueTypeSchemeMapping model module.
 * @module model/IssueTypeSchemeMapping
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueTypeSchemeMapping {
    /**
     * Constructs a new <code>IssueTypeSchemeMapping</code>.
     * Issue type scheme item.
     * @alias module:model/IssueTypeSchemeMapping
     * @param issueTypeId {String} The ID of the issue type.
     * @param issueTypeSchemeId {String} The ID of the issue type scheme.
     */
    constructor(issueTypeId, issueTypeSchemeId) { 
        
        IssueTypeSchemeMapping.initialize(this, issueTypeId, issueTypeSchemeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueTypeId, issueTypeSchemeId) { 
        obj['issueTypeId'] = issueTypeId;
        obj['issueTypeSchemeId'] = issueTypeSchemeId;
    }

    /**
     * Constructs a <code>IssueTypeSchemeMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeSchemeMapping} obj Optional instance to populate.
     * @return {module:model/IssueTypeSchemeMapping} The populated <code>IssueTypeSchemeMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeSchemeMapping();

            if (data.hasOwnProperty('issueTypeId')) {
                obj['issueTypeId'] = ApiClient.convertToType(data['issueTypeId'], 'String');
            }
            if (data.hasOwnProperty('issueTypeSchemeId')) {
                obj['issueTypeSchemeId'] = ApiClient.convertToType(data['issueTypeSchemeId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueTypeSchemeMapping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueTypeSchemeMapping</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueTypeSchemeMapping.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['issueTypeId'] && !(typeof data['issueTypeId'] === 'string' || data['issueTypeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeId` to be a primitive type in the JSON string but got " + data['issueTypeId']);
        }
        // ensure the json data is a string
        if (data['issueTypeSchemeId'] && !(typeof data['issueTypeSchemeId'] === 'string' || data['issueTypeSchemeId'] instanceof String)) {
            throw new Error("Expected the field `issueTypeSchemeId` to be a primitive type in the JSON string but got " + data['issueTypeSchemeId']);
        }

        return true;
    }


}

IssueTypeSchemeMapping.RequiredProperties = ["issueTypeId", "issueTypeSchemeId"];

/**
 * The ID of the issue type.
 * @member {String} issueTypeId
 */
IssueTypeSchemeMapping.prototype['issueTypeId'] = undefined;

/**
 * The ID of the issue type scheme.
 * @member {String} issueTypeSchemeId
 */
IssueTypeSchemeMapping.prototype['issueTypeSchemeId'] = undefined;






export default IssueTypeSchemeMapping;


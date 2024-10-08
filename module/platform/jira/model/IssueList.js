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
 * The IssueList model module.
 * @module model/IssueList
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueList {
    /**
     * Constructs a new <code>IssueList</code>.
     * A list of issue IDs.
     * @alias module:model/IssueList
     * @param issueIds {Array.<String>} The list of issue IDs.
     */
    constructor(issueIds) { 
        
        IssueList.initialize(this, issueIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueIds) { 
        obj['issueIds'] = issueIds;
    }

    /**
     * Constructs a <code>IssueList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueList} obj Optional instance to populate.
     * @return {module:model/IssueList} The populated <code>IssueList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueList();

            if (data.hasOwnProperty('issueIds')) {
                obj['issueIds'] = ApiClient.convertToType(data['issueIds'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueList.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['issueIds'])) {
            throw new Error("Expected the field `issueIds` to be an array in the JSON data but got " + data['issueIds']);
        }

        return true;
    }


}

IssueList.RequiredProperties = ["issueIds"];

/**
 * The list of issue IDs.
 * @member {Array.<String>} issueIds
 */
IssueList.prototype['issueIds'] = undefined;






export default IssueList;


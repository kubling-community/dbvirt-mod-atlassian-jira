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
 * The IssueArchivalSyncRequest model module.
 * @module model/IssueArchivalSyncRequest
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueArchivalSyncRequest {
    /**
     * Constructs a new <code>IssueArchivalSyncRequest</code>.
     * List of Issue Ids Or Keys that are to be archived or unarchived
     * @alias module:model/IssueArchivalSyncRequest
     */
    constructor() { 
        
        IssueArchivalSyncRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueArchivalSyncRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueArchivalSyncRequest} obj Optional instance to populate.
     * @return {module:model/IssueArchivalSyncRequest} The populated <code>IssueArchivalSyncRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueArchivalSyncRequest();

            if (data.hasOwnProperty('issueIdsOrKeys')) {
                obj['issueIdsOrKeys'] = ApiClient.convertToType(data['issueIdsOrKeys'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueArchivalSyncRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueArchivalSyncRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['issueIdsOrKeys'])) {
            throw new Error("Expected the field `issueIdsOrKeys` to be an array in the JSON data but got " + data['issueIdsOrKeys']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} issueIdsOrKeys
 */
IssueArchivalSyncRequest.prototype['issueIdsOrKeys'] = undefined;






export default IssueArchivalSyncRequest;


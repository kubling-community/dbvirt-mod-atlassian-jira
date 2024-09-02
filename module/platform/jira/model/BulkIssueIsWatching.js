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
 * The BulkIssueIsWatching model module.
 * @module model/BulkIssueIsWatching
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class BulkIssueIsWatching {
    /**
     * Constructs a new <code>BulkIssueIsWatching</code>.
     * A container for the watch status of a list of issues.
     * @alias module:model/BulkIssueIsWatching
     */
    constructor() { 
        
        BulkIssueIsWatching.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkIssueIsWatching</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkIssueIsWatching} obj Optional instance to populate.
     * @return {module:model/BulkIssueIsWatching} The populated <code>BulkIssueIsWatching</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkIssueIsWatching();

            if (data.hasOwnProperty('issuesIsWatching')) {
                obj['issuesIsWatching'] = ApiClient.convertToType(data['issuesIsWatching'], {'String': 'Boolean'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BulkIssueIsWatching</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BulkIssueIsWatching</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The map of issue ID to boolean watch status.
 * @member {Object.<String, Boolean>} issuesIsWatching
 */
BulkIssueIsWatching.prototype['issuesIsWatching'] = undefined;






export default BulkIssueIsWatching;


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
import IssueEntityPropertiesForMultiUpdate from './IssueEntityPropertiesForMultiUpdate';

/**
 * The MultiIssueEntityProperties model module.
 * @module model/MultiIssueEntityProperties
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class MultiIssueEntityProperties {
    /**
     * Constructs a new <code>MultiIssueEntityProperties</code>.
     * A list of issues and their respective properties to set or update. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
     * @alias module:model/MultiIssueEntityProperties
     */
    constructor() { 
        
        MultiIssueEntityProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiIssueEntityProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiIssueEntityProperties} obj Optional instance to populate.
     * @return {module:model/MultiIssueEntityProperties} The populated <code>MultiIssueEntityProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiIssueEntityProperties();

            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], [IssueEntityPropertiesForMultiUpdate]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiIssueEntityProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiIssueEntityProperties</code>.
     */
    static validateJSON(data) {
        if (data['issues']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['issues'])) {
                throw new Error("Expected the field `issues` to be an array in the JSON data but got " + data['issues']);
            }
            // validate the optional field `issues` (array)
            for (const item of data['issues']) {
                IssueEntityPropertiesForMultiUpdate.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A list of issue IDs and their respective properties.
 * @member {Array.<module:model/IssueEntityPropertiesForMultiUpdate>} issues
 */
MultiIssueEntityProperties.prototype['issues'] = undefined;






export default MultiIssueEntityProperties;


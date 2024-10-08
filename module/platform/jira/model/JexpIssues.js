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
import JexpJqlIssues from './JexpJqlIssues';

/**
 * The JexpIssues model module.
 * @module model/JexpIssues
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JexpIssues {
    /**
     * Constructs a new <code>JexpIssues</code>.
     * The JQL specifying the issues available in the evaluated Jira expression under the &#x60;issues&#x60; context variable.
     * @alias module:model/JexpIssues
     */
    constructor() { 
        
        JexpIssues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JexpIssues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JexpIssues} obj Optional instance to populate.
     * @return {module:model/JexpIssues} The populated <code>JexpIssues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JexpIssues();

            if (data.hasOwnProperty('jql')) {
                obj['jql'] = ApiClient.convertToType(data['jql'], JexpJqlIssues);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JexpIssues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JexpIssues</code>.
     */
    static validateJSON(data) {
        // validate the optional field `jql`
        if (data['jql']) { // data not null
          JexpJqlIssues.validateJSON(data['jql']);
        }

        return true;
    }


}



/**
 * The JQL query that specifies the set of issues available in the Jira expression.
 * @member {module:model/JexpJqlIssues} jql
 */
JexpIssues.prototype['jql'] = undefined;






export default JexpIssues;


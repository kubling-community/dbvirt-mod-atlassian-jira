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
import ProjectDataPolicy from './ProjectDataPolicy';

/**
 * The ProjectWithDataPolicyDataPolicy model module.
 * @module model/ProjectWithDataPolicyDataPolicy
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ProjectWithDataPolicyDataPolicy {
    /**
     * Constructs a new <code>ProjectWithDataPolicyDataPolicy</code>.
     * Data policy.
     * @alias module:model/ProjectWithDataPolicyDataPolicy
     * @implements module:model/ProjectDataPolicy
     */
    constructor() { 
        ProjectDataPolicy.initialize(this);
        ProjectWithDataPolicyDataPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectWithDataPolicyDataPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectWithDataPolicyDataPolicy} obj Optional instance to populate.
     * @return {module:model/ProjectWithDataPolicyDataPolicy} The populated <code>ProjectWithDataPolicyDataPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectWithDataPolicyDataPolicy();
            ProjectDataPolicy.constructFromObject(data, obj);

            if (data.hasOwnProperty('anyContentBlocked')) {
                obj['anyContentBlocked'] = ApiClient.convertToType(data['anyContentBlocked'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectWithDataPolicyDataPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectWithDataPolicyDataPolicy</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whether the project contains any content inaccessible to the requesting application.
 * @member {Boolean} anyContentBlocked
 */
ProjectWithDataPolicyDataPolicy.prototype['anyContentBlocked'] = undefined;


// Implement ProjectDataPolicy interface:
/**
 * Whether the project contains any content inaccessible to the requesting application.
 * @member {Boolean} anyContentBlocked
 */
ProjectDataPolicy.prototype['anyContentBlocked'] = undefined;




export default ProjectWithDataPolicyDataPolicy;


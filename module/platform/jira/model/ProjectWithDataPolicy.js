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
import ProjectWithDataPolicyDataPolicy from './ProjectWithDataPolicyDataPolicy';

/**
 * The ProjectWithDataPolicy model module.
 * @module model/ProjectWithDataPolicy
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ProjectWithDataPolicy {
    /**
     * Constructs a new <code>ProjectWithDataPolicy</code>.
     * Details about data policies for a project.
     * @alias module:model/ProjectWithDataPolicy
     */
    constructor() { 
        
        ProjectWithDataPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectWithDataPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectWithDataPolicy} obj Optional instance to populate.
     * @return {module:model/ProjectWithDataPolicy} The populated <code>ProjectWithDataPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectWithDataPolicy();

            if (data.hasOwnProperty('dataPolicy')) {
                obj['dataPolicy'] = ProjectWithDataPolicyDataPolicy.constructFromObject(data['dataPolicy']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProjectWithDataPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectWithDataPolicy</code>.
     */
    static validateJSON(data) {
        // validate the optional field `dataPolicy`
        if (data['dataPolicy']) { // data not null
          ProjectWithDataPolicyDataPolicy.validateJSON(data['dataPolicy']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProjectWithDataPolicyDataPolicy} dataPolicy
 */
ProjectWithDataPolicy.prototype['dataPolicy'] = undefined;

/**
 * The project ID.
 * @member {Number} id
 */
ProjectWithDataPolicy.prototype['id'] = undefined;






export default ProjectWithDataPolicy;


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
import PrioritySchemeIdTask from './PrioritySchemeIdTask';
import PrioritySchemeWithPaginatedPrioritiesAndProjects from './PrioritySchemeWithPaginatedPrioritiesAndProjects';

/**
 * The UpdatePrioritySchemeResponseBean model module.
 * @module model/UpdatePrioritySchemeResponseBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UpdatePrioritySchemeResponseBean {
    /**
     * Constructs a new <code>UpdatePrioritySchemeResponseBean</code>.
     * Details of the updated priority scheme.
     * @alias module:model/UpdatePrioritySchemeResponseBean
     * @extends Object
     */
    constructor() { 
        
        UpdatePrioritySchemeResponseBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePrioritySchemeResponseBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePrioritySchemeResponseBean} obj Optional instance to populate.
     * @return {module:model/UpdatePrioritySchemeResponseBean} The populated <code>UpdatePrioritySchemeResponseBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePrioritySchemeResponseBean();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('priorityScheme')) {
                obj['priorityScheme'] = PrioritySchemeWithPaginatedPrioritiesAndProjects.constructFromObject(data['priorityScheme']);
            }
            if (data.hasOwnProperty('task')) {
                obj['task'] = PrioritySchemeIdTask.constructFromObject(data['task']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePrioritySchemeResponseBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePrioritySchemeResponseBean</code>.
     */
    static validateJSON(data) {
        // validate the optional field `task`
        if (data['task']) { // data not null
          PrioritySchemeIdTask.validateJSON(data['task']);
        }

        return true;
    }


}



/**
 * @member {module:model/PrioritySchemeWithPaginatedPrioritiesAndProjects} priorityScheme
 */
UpdatePrioritySchemeResponseBean.prototype['priorityScheme'] = undefined;

/**
 * @member {module:model/PrioritySchemeIdTask} task
 */
UpdatePrioritySchemeResponseBean.prototype['task'] = undefined;






export default UpdatePrioritySchemeResponseBean;


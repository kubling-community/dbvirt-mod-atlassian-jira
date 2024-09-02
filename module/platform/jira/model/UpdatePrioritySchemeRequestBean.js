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
import PriorityMapping from './PriorityMapping';
import UpdatePrioritiesInSchemeRequestBean from './UpdatePrioritiesInSchemeRequestBean';
import UpdateProjectsInSchemeRequestBean from './UpdateProjectsInSchemeRequestBean';

/**
 * The UpdatePrioritySchemeRequestBean model module.
 * @module model/UpdatePrioritySchemeRequestBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UpdatePrioritySchemeRequestBean {
    /**
     * Constructs a new <code>UpdatePrioritySchemeRequestBean</code>.
     * Details of a priority scheme.
     * @alias module:model/UpdatePrioritySchemeRequestBean
     */
    constructor() { 
        
        UpdatePrioritySchemeRequestBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePrioritySchemeRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePrioritySchemeRequestBean} obj Optional instance to populate.
     * @return {module:model/UpdatePrioritySchemeRequestBean} The populated <code>UpdatePrioritySchemeRequestBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePrioritySchemeRequestBean();

            if (data.hasOwnProperty('defaultPriorityId')) {
                obj['defaultPriorityId'] = ApiClient.convertToType(data['defaultPriorityId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mappings')) {
                obj['mappings'] = ApiClient.convertToType(data['mappings'], PriorityMapping);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priorities')) {
                obj['priorities'] = ApiClient.convertToType(data['priorities'], UpdatePrioritiesInSchemeRequestBean);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], UpdateProjectsInSchemeRequestBean);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePrioritySchemeRequestBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePrioritySchemeRequestBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `mappings`
        if (data['mappings']) { // data not null
          PriorityMapping.validateJSON(data['mappings']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The default priority of the scheme.
 * @member {Number} defaultPriorityId
 */
UpdatePrioritySchemeRequestBean.prototype['defaultPriorityId'] = undefined;

/**
 * The description of the priority scheme.
 * @member {String} description
 */
UpdatePrioritySchemeRequestBean.prototype['description'] = undefined;

/**
 * Instructions to migrate issues.
 * @member {module:model/PriorityMapping} mappings
 */
UpdatePrioritySchemeRequestBean.prototype['mappings'] = undefined;

/**
 * The name of the priority scheme. Must be unique.
 * @member {String} name
 */
UpdatePrioritySchemeRequestBean.prototype['name'] = undefined;

/**
 * The priorities in the scheme.
 * @member {module:model/UpdatePrioritiesInSchemeRequestBean} priorities
 */
UpdatePrioritySchemeRequestBean.prototype['priorities'] = undefined;

/**
 * The projects in the scheme.
 * @member {module:model/UpdateProjectsInSchemeRequestBean} projects
 */
UpdatePrioritySchemeRequestBean.prototype['projects'] = undefined;






export default UpdatePrioritySchemeRequestBean;


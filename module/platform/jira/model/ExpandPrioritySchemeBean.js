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
 * The ExpandPrioritySchemeBean model module.
 * @module model/ExpandPrioritySchemeBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ExpandPrioritySchemeBean {
    /**
     * Constructs a new <code>ExpandPrioritySchemeBean</code>.
     * A priority scheme with less fields to be used in for an API expand response.
     * @alias module:model/ExpandPrioritySchemeBean
     */
    constructor() { 
        
        ExpandPrioritySchemeBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpandPrioritySchemeBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpandPrioritySchemeBean} obj Optional instance to populate.
     * @return {module:model/ExpandPrioritySchemeBean} The populated <code>ExpandPrioritySchemeBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpandPrioritySchemeBean();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpandPrioritySchemeBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpandPrioritySchemeBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}



/**
 * The ID of the priority scheme.
 * @member {String} id
 */
ExpandPrioritySchemeBean.prototype['id'] = undefined;

/**
 * The name of the priority scheme.
 * @member {String} name
 */
ExpandPrioritySchemeBean.prototype['name'] = undefined;

/**
 * The URL of the priority scheme.
 * @member {String} self
 */
ExpandPrioritySchemeBean.prototype['self'] = undefined;






export default ExpandPrioritySchemeBean;


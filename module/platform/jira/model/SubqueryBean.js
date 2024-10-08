/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SubqueryBean model module.
 * @module model/SubqueryBean
 * @version 1001.0.0
 */
class SubqueryBean {
    /**
     * Constructs a new <code>SubqueryBean</code>.
     * @alias module:model/SubqueryBean
     */
    constructor() { 
        
        SubqueryBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubqueryBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubqueryBean} obj Optional instance to populate.
     * @return {module:model/SubqueryBean} The populated <code>SubqueryBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubqueryBean();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubqueryBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubqueryBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}



/**
 * @member {String} query
 */
SubqueryBean.prototype['query'] = undefined;






export default SubqueryBean;


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
 * The IssueBeanFieldsToInclude model module.
 * @module model/IssueBeanFieldsToInclude
 * @version 1001.0.0
 */
class IssueBeanFieldsToInclude {
    /**
     * Constructs a new <code>IssueBeanFieldsToInclude</code>.
     * @alias module:model/IssueBeanFieldsToInclude
     */
    constructor() { 
        
        IssueBeanFieldsToInclude.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueBeanFieldsToInclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBeanFieldsToInclude} obj Optional instance to populate.
     * @return {module:model/IssueBeanFieldsToInclude} The populated <code>IssueBeanFieldsToInclude</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueBeanFieldsToInclude();

            if (data.hasOwnProperty('actuallyIncluded')) {
                obj['actuallyIncluded'] = ApiClient.convertToType(data['actuallyIncluded'], ['String']);
            }
            if (data.hasOwnProperty('excluded')) {
                obj['excluded'] = ApiClient.convertToType(data['excluded'], ['String']);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueBeanFieldsToInclude</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueBeanFieldsToInclude</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['actuallyIncluded'])) {
            throw new Error("Expected the field `actuallyIncluded` to be an array in the JSON data but got " + data['actuallyIncluded']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excluded'])) {
            throw new Error("Expected the field `excluded` to be an array in the JSON data but got " + data['excluded']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['included'])) {
            throw new Error("Expected the field `included` to be an array in the JSON data but got " + data['included']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} actuallyIncluded
 */
IssueBeanFieldsToInclude.prototype['actuallyIncluded'] = undefined;

/**
 * @member {Array.<String>} excluded
 */
IssueBeanFieldsToInclude.prototype['excluded'] = undefined;

/**
 * @member {Array.<String>} included
 */
IssueBeanFieldsToInclude.prototype['included'] = undefined;






export default IssueBeanFieldsToInclude;


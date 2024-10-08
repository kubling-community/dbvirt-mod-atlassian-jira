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
 * The JqlFunctionPrecomputationUpdateBean model module.
 * @module model/JqlFunctionPrecomputationUpdateBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlFunctionPrecomputationUpdateBean {
    /**
     * Constructs a new <code>JqlFunctionPrecomputationUpdateBean</code>.
     * Precomputation id and its new value.
     * @alias module:model/JqlFunctionPrecomputationUpdateBean
     * @param id {String} The id of the precomputation to update.
     */
    constructor(id) { 
        
        JqlFunctionPrecomputationUpdateBean.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>JqlFunctionPrecomputationUpdateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlFunctionPrecomputationUpdateBean} obj Optional instance to populate.
     * @return {module:model/JqlFunctionPrecomputationUpdateBean} The populated <code>JqlFunctionPrecomputationUpdateBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlFunctionPrecomputationUpdateBean();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlFunctionPrecomputationUpdateBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlFunctionPrecomputationUpdateBean</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JqlFunctionPrecomputationUpdateBean.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

JqlFunctionPrecomputationUpdateBean.RequiredProperties = ["id"];

/**
 * The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.
 * @member {String} error
 */
JqlFunctionPrecomputationUpdateBean.prototype['error'] = undefined;

/**
 * The id of the precomputation to update.
 * @member {String} id
 */
JqlFunctionPrecomputationUpdateBean.prototype['id'] = undefined;

/**
 * The new value of the precomputation.
 * @member {String} value
 */
JqlFunctionPrecomputationUpdateBean.prototype['value'] = undefined;






export default JqlFunctionPrecomputationUpdateBean;


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
import JqlFunctionPrecomputationUpdateBean from './JqlFunctionPrecomputationUpdateBean';

/**
 * The JqlFunctionPrecomputationUpdateRequestBean model module.
 * @module model/JqlFunctionPrecomputationUpdateRequestBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlFunctionPrecomputationUpdateRequestBean {
    /**
     * Constructs a new <code>JqlFunctionPrecomputationUpdateRequestBean</code>.
     * List of pairs (id and value) for precomputation updates.
     * @alias module:model/JqlFunctionPrecomputationUpdateRequestBean
     */
    constructor() { 
        
        JqlFunctionPrecomputationUpdateRequestBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JqlFunctionPrecomputationUpdateRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlFunctionPrecomputationUpdateRequestBean} obj Optional instance to populate.
     * @return {module:model/JqlFunctionPrecomputationUpdateRequestBean} The populated <code>JqlFunctionPrecomputationUpdateRequestBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlFunctionPrecomputationUpdateRequestBean();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [JqlFunctionPrecomputationUpdateBean]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlFunctionPrecomputationUpdateRequestBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlFunctionPrecomputationUpdateRequestBean</code>.
     */
    static validateJSON(data) {
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                JqlFunctionPrecomputationUpdateBean.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/JqlFunctionPrecomputationUpdateBean>} values
 */
JqlFunctionPrecomputationUpdateRequestBean.prototype['values'] = undefined;






export default JqlFunctionPrecomputationUpdateRequestBean;


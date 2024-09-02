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
 * The ValidationOptionsForUpdate model module.
 * @module model/ValidationOptionsForUpdate
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ValidationOptionsForUpdate {
    /**
     * Constructs a new <code>ValidationOptionsForUpdate</code>.
     * The level of validation to return from the API. If no values are provided, the default would return &#x60;WARNING&#x60; and &#x60;ERROR&#x60; level validation results.
     * @alias module:model/ValidationOptionsForUpdate
     */
    constructor() { 
        
        ValidationOptionsForUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidationOptionsForUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationOptionsForUpdate} obj Optional instance to populate.
     * @return {module:model/ValidationOptionsForUpdate} The populated <code>ValidationOptionsForUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationOptionsForUpdate();

            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidationOptionsForUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationOptionsForUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['levels'])) {
            throw new Error("Expected the field `levels` to be an array in the JSON data but got " + data['levels']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ValidationOptionsForUpdate.LevelsEnum>} levels
 */
ValidationOptionsForUpdate.prototype['levels'] = undefined;





/**
 * Allowed values for the <code>levels</code> property.
 * @enum {String}
 * @readonly
 */
ValidationOptionsForUpdate['LevelsEnum'] = {

    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"
};



export default ValidationOptionsForUpdate;


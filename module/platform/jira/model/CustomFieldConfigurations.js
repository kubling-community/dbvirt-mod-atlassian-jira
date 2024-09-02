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
import ContextualConfiguration from './ContextualConfiguration';

/**
 * The CustomFieldConfigurations model module.
 * @module model/CustomFieldConfigurations
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldConfigurations {
    /**
     * Constructs a new <code>CustomFieldConfigurations</code>.
     * Details of configurations for a custom field.
     * @alias module:model/CustomFieldConfigurations
     * @param configurations {Array.<module:model/ContextualConfiguration>} The list of custom field configuration details.
     */
    constructor(configurations) { 
        
        CustomFieldConfigurations.initialize(this, configurations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, configurations) { 
        obj['configurations'] = configurations;
    }

    /**
     * Constructs a <code>CustomFieldConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldConfigurations} obj Optional instance to populate.
     * @return {module:model/CustomFieldConfigurations} The populated <code>CustomFieldConfigurations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldConfigurations();

            if (data.hasOwnProperty('configurations')) {
                obj['configurations'] = ApiClient.convertToType(data['configurations'], [ContextualConfiguration]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldConfigurations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldConfigurations</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldConfigurations.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['configurations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['configurations'])) {
                throw new Error("Expected the field `configurations` to be an array in the JSON data but got " + data['configurations']);
            }
            // validate the optional field `configurations` (array)
            for (const item of data['configurations']) {
                ContextualConfiguration.validateJSON(item);
            };
        }

        return true;
    }


}

CustomFieldConfigurations.RequiredProperties = ["configurations"];

/**
 * The list of custom field configuration details.
 * @member {Array.<module:model/ContextualConfiguration>} configurations
 */
CustomFieldConfigurations.prototype['configurations'] = undefined;






export default CustomFieldConfigurations;


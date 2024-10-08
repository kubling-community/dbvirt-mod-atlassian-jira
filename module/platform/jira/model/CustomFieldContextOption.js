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
 * The CustomFieldContextOption model module.
 * @module model/CustomFieldContextOption
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextOption {
    /**
     * Constructs a new <code>CustomFieldContextOption</code>.
     * Details of the custom field options for a context.
     * @alias module:model/CustomFieldContextOption
     * @param disabled {Boolean} Whether the option is disabled.
     * @param id {String} The ID of the custom field option.
     * @param value {String} The value of the custom field option.
     */
    constructor(disabled, id, value) { 
        
        CustomFieldContextOption.initialize(this, disabled, id, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, disabled, id, value) { 
        obj['disabled'] = disabled;
        obj['id'] = id;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>CustomFieldContextOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextOption} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextOption} The populated <code>CustomFieldContextOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextOption();

            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('optionId')) {
                obj['optionId'] = ApiClient.convertToType(data['optionId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextOption</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextOption.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['optionId'] && !(typeof data['optionId'] === 'string' || data['optionId'] instanceof String)) {
            throw new Error("Expected the field `optionId` to be a primitive type in the JSON string but got " + data['optionId']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

CustomFieldContextOption.RequiredProperties = ["disabled", "id", "value"];

/**
 * Whether the option is disabled.
 * @member {Boolean} disabled
 */
CustomFieldContextOption.prototype['disabled'] = undefined;

/**
 * The ID of the custom field option.
 * @member {String} id
 */
CustomFieldContextOption.prototype['id'] = undefined;

/**
 * For cascading options, the ID of the custom field option containing the cascading option.
 * @member {String} optionId
 */
CustomFieldContextOption.prototype['optionId'] = undefined;

/**
 * The value of the custom field option.
 * @member {String} value
 */
CustomFieldContextOption.prototype['value'] = undefined;






export default CustomFieldContextOption;


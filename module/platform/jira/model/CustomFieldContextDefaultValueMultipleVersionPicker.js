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
 * The CustomFieldContextDefaultValueMultipleVersionPicker model module.
 * @module model/CustomFieldContextDefaultValueMultipleVersionPicker
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextDefaultValueMultipleVersionPicker {
    /**
     * Constructs a new <code>CustomFieldContextDefaultValueMultipleVersionPicker</code>.
     * The default value for a multiple version picker custom field.
     * @alias module:model/CustomFieldContextDefaultValueMultipleVersionPicker
     * @param type {String} 
     * @param versionIds {Array.<String>} The IDs of the default versions.
     */
    constructor(type, versionIds) { 
        
        CustomFieldContextDefaultValueMultipleVersionPicker.initialize(this, type, versionIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, versionIds) { 
        obj['type'] = type;
        obj['versionIds'] = versionIds;
    }

    /**
     * Constructs a <code>CustomFieldContextDefaultValueMultipleVersionPicker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextDefaultValueMultipleVersionPicker} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextDefaultValueMultipleVersionPicker} The populated <code>CustomFieldContextDefaultValueMultipleVersionPicker</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextDefaultValueMultipleVersionPicker();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('versionIds')) {
                obj['versionIds'] = ApiClient.convertToType(data['versionIds'], ['String']);
            }
            if (data.hasOwnProperty('versionOrder')) {
                obj['versionOrder'] = ApiClient.convertToType(data['versionOrder'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextDefaultValueMultipleVersionPicker</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextDefaultValueMultipleVersionPicker</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextDefaultValueMultipleVersionPicker.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['versionIds'])) {
            throw new Error("Expected the field `versionIds` to be an array in the JSON data but got " + data['versionIds']);
        }
        // ensure the json data is a string
        if (data['versionOrder'] && !(typeof data['versionOrder'] === 'string' || data['versionOrder'] instanceof String)) {
            throw new Error("Expected the field `versionOrder` to be a primitive type in the JSON string but got " + data['versionOrder']);
        }

        return true;
    }


}

CustomFieldContextDefaultValueMultipleVersionPicker.RequiredProperties = ["type", "versionIds"];

/**
 * @member {String} type
 */
CustomFieldContextDefaultValueMultipleVersionPicker.prototype['type'] = undefined;

/**
 * The IDs of the default versions.
 * @member {Array.<String>} versionIds
 */
CustomFieldContextDefaultValueMultipleVersionPicker.prototype['versionIds'] = undefined;

/**
 * The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `\"releasedFirst\"` and `\"unreleasedFirst\"`.
 * @member {String} versionOrder
 */
CustomFieldContextDefaultValueMultipleVersionPicker.prototype['versionOrder'] = undefined;






export default CustomFieldContextDefaultValueMultipleVersionPicker;


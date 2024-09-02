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
 * The CustomFieldContextDefaultValueForgeStringField model module.
 * @module model/CustomFieldContextDefaultValueForgeStringField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextDefaultValueForgeStringField {
    /**
     * Constructs a new <code>CustomFieldContextDefaultValueForgeStringField</code>.
     * The default text for a Forge string custom field.
     * @alias module:model/CustomFieldContextDefaultValueForgeStringField
     * @param contextId {String} The ID of the context.
     * @param type {String} 
     */
    constructor(contextId, type) { 
        
        CustomFieldContextDefaultValueForgeStringField.initialize(this, contextId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contextId, type) { 
        obj['contextId'] = contextId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CustomFieldContextDefaultValueForgeStringField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextDefaultValueForgeStringField} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextDefaultValueForgeStringField} The populated <code>CustomFieldContextDefaultValueForgeStringField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextDefaultValueForgeStringField();

            if (data.hasOwnProperty('contextId')) {
                obj['contextId'] = ApiClient.convertToType(data['contextId'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextDefaultValueForgeStringField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextDefaultValueForgeStringField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextDefaultValueForgeStringField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contextId'] && !(typeof data['contextId'] === 'string' || data['contextId'] instanceof String)) {
            throw new Error("Expected the field `contextId` to be a primitive type in the JSON string but got " + data['contextId']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

CustomFieldContextDefaultValueForgeStringField.RequiredProperties = ["contextId", "type"];

/**
 * The ID of the context.
 * @member {String} contextId
 */
CustomFieldContextDefaultValueForgeStringField.prototype['contextId'] = undefined;

/**
 * The default text. The maximum length is 254 characters.
 * @member {String} text
 */
CustomFieldContextDefaultValueForgeStringField.prototype['text'] = undefined;

/**
 * @member {String} type
 */
CustomFieldContextDefaultValueForgeStringField.prototype['type'] = undefined;






export default CustomFieldContextDefaultValueForgeStringField;


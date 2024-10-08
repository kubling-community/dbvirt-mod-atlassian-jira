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
 * The JiraSingleLineTextField model module.
 * @module model/JiraSingleLineTextField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraSingleLineTextField {
    /**
     * Constructs a new <code>JiraSingleLineTextField</code>.
     * @alias module:model/JiraSingleLineTextField
     * @param fieldId {String} 
     * @param text {String} 
     */
    constructor(fieldId, text) { 
        
        JiraSingleLineTextField.initialize(this, fieldId, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldId, text) { 
        obj['fieldId'] = fieldId;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>JiraSingleLineTextField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraSingleLineTextField} obj Optional instance to populate.
     * @return {module:model/JiraSingleLineTextField} The populated <code>JiraSingleLineTextField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraSingleLineTextField();

            if (data.hasOwnProperty('fieldId')) {
                obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraSingleLineTextField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraSingleLineTextField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JiraSingleLineTextField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fieldId'] && !(typeof data['fieldId'] === 'string' || data['fieldId'] instanceof String)) {
            throw new Error("Expected the field `fieldId` to be a primitive type in the JSON string but got " + data['fieldId']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}

JiraSingleLineTextField.RequiredProperties = ["fieldId", "text"];

/**
 * @member {String} fieldId
 */
JiraSingleLineTextField.prototype['fieldId'] = undefined;

/**
 * @member {String} text
 */
JiraSingleLineTextField.prototype['text'] = undefined;






export default JiraSingleLineTextField;


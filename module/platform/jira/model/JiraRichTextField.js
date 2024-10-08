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
import JiraRichTextInput from './JiraRichTextInput';

/**
 * The JiraRichTextField model module.
 * @module model/JiraRichTextField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraRichTextField {
    /**
     * Constructs a new <code>JiraRichTextField</code>.
     * @alias module:model/JiraRichTextField
     * @param fieldId {String} 
     * @param richText {module:model/JiraRichTextInput} 
     */
    constructor(fieldId, richText) { 
        
        JiraRichTextField.initialize(this, fieldId, richText);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldId, richText) { 
        obj['fieldId'] = fieldId;
        obj['richText'] = richText;
    }

    /**
     * Constructs a <code>JiraRichTextField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraRichTextField} obj Optional instance to populate.
     * @return {module:model/JiraRichTextField} The populated <code>JiraRichTextField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraRichTextField();

            if (data.hasOwnProperty('fieldId')) {
                obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
            }
            if (data.hasOwnProperty('richText')) {
                obj['richText'] = JiraRichTextInput.constructFromObject(data['richText']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraRichTextField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraRichTextField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JiraRichTextField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fieldId'] && !(typeof data['fieldId'] === 'string' || data['fieldId'] instanceof String)) {
            throw new Error("Expected the field `fieldId` to be a primitive type in the JSON string but got " + data['fieldId']);
        }
        // validate the optional field `richText`
        if (data['richText']) { // data not null
          JiraRichTextInput.validateJSON(data['richText']);
        }

        return true;
    }


}

JiraRichTextField.RequiredProperties = ["fieldId", "richText"];

/**
 * @member {String} fieldId
 */
JiraRichTextField.prototype['fieldId'] = undefined;

/**
 * @member {module:model/JiraRichTextInput} richText
 */
JiraRichTextField.prototype['richText'] = undefined;






export default JiraRichTextField;


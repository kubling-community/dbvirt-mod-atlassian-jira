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
import JiraVersionField from './JiraVersionField';

/**
 * The JiraSingleVersionPickerField model module.
 * @module model/JiraSingleVersionPickerField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraSingleVersionPickerField {
    /**
     * Constructs a new <code>JiraSingleVersionPickerField</code>.
     * @alias module:model/JiraSingleVersionPickerField
     * @param fieldId {String} 
     * @param version {module:model/JiraVersionField} 
     */
    constructor(fieldId, version) { 
        
        JiraSingleVersionPickerField.initialize(this, fieldId, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldId, version) { 
        obj['fieldId'] = fieldId;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>JiraSingleVersionPickerField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraSingleVersionPickerField} obj Optional instance to populate.
     * @return {module:model/JiraSingleVersionPickerField} The populated <code>JiraSingleVersionPickerField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraSingleVersionPickerField();

            if (data.hasOwnProperty('fieldId')) {
                obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = JiraVersionField.constructFromObject(data['version']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraSingleVersionPickerField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraSingleVersionPickerField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JiraSingleVersionPickerField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fieldId'] && !(typeof data['fieldId'] === 'string' || data['fieldId'] instanceof String)) {
            throw new Error("Expected the field `fieldId` to be a primitive type in the JSON string but got " + data['fieldId']);
        }
        // validate the optional field `version`
        if (data['version']) { // data not null
          JiraVersionField.validateJSON(data['version']);
        }

        return true;
    }


}

JiraSingleVersionPickerField.RequiredProperties = ["fieldId", "version"];

/**
 * @member {String} fieldId
 */
JiraSingleVersionPickerField.prototype['fieldId'] = undefined;

/**
 * @member {module:model/JiraVersionField} version
 */
JiraSingleVersionPickerField.prototype['version'] = undefined;






export default JiraSingleVersionPickerField;


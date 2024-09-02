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
import JiraDateInput from './JiraDateInput';

/**
 * The JiraDateField model module.
 * @module model/JiraDateField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraDateField {
    /**
     * Constructs a new <code>JiraDateField</code>.
     * @alias module:model/JiraDateField
     * @param fieldId {String} 
     */
    constructor(fieldId) { 
        
        JiraDateField.initialize(this, fieldId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldId) { 
        obj['fieldId'] = fieldId;
    }

    /**
     * Constructs a <code>JiraDateField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraDateField} obj Optional instance to populate.
     * @return {module:model/JiraDateField} The populated <code>JiraDateField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraDateField();

            if (data.hasOwnProperty('date')) {
                obj['date'] = JiraDateInput.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('fieldId')) {
                obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraDateField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraDateField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JiraDateField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `date`
        if (data['date']) { // data not null
          JiraDateInput.validateJSON(data['date']);
        }
        // ensure the json data is a string
        if (data['fieldId'] && !(typeof data['fieldId'] === 'string' || data['fieldId'] instanceof String)) {
            throw new Error("Expected the field `fieldId` to be a primitive type in the JSON string but got " + data['fieldId']);
        }

        return true;
    }


}

JiraDateField.RequiredProperties = ["fieldId"];

/**
 * @member {module:model/JiraDateInput} date
 */
JiraDateField.prototype['date'] = undefined;

/**
 * @member {String} fieldId
 */
JiraDateField.prototype['fieldId'] = undefined;






export default JiraDateField;


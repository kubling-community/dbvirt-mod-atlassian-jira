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
 * The CustomFieldContextDefaultValueDateTime model module.
 * @module model/CustomFieldContextDefaultValueDateTime
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextDefaultValueDateTime {
    /**
     * Constructs a new <code>CustomFieldContextDefaultValueDateTime</code>.
     * The default value for a date time custom field.
     * @alias module:model/CustomFieldContextDefaultValueDateTime
     * @param type {String} 
     */
    constructor(type) { 
        
        CustomFieldContextDefaultValueDateTime.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CustomFieldContextDefaultValueDateTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextDefaultValueDateTime} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextDefaultValueDateTime} The populated <code>CustomFieldContextDefaultValueDateTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextDefaultValueDateTime();

            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('useCurrent')) {
                obj['useCurrent'] = ApiClient.convertToType(data['useCurrent'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextDefaultValueDateTime</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextDefaultValueDateTime</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextDefaultValueDateTime.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dateTime'] && !(typeof data['dateTime'] === 'string' || data['dateTime'] instanceof String)) {
            throw new Error("Expected the field `dateTime` to be a primitive type in the JSON string but got " + data['dateTime']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

CustomFieldContextDefaultValueDateTime.RequiredProperties = ["type"];

/**
 * The default date-time in ISO format. Ignored if `useCurrent` is true.
 * @member {String} dateTime
 */
CustomFieldContextDefaultValueDateTime.prototype['dateTime'] = undefined;

/**
 * @member {String} type
 */
CustomFieldContextDefaultValueDateTime.prototype['type'] = undefined;

/**
 * Whether to use the current date.
 * @member {Boolean} useCurrent
 * @default false
 */
CustomFieldContextDefaultValueDateTime.prototype['useCurrent'] = false;






export default CustomFieldContextDefaultValueDateTime;


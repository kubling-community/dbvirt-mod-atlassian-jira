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
import UserFilter from './UserFilter';

/**
 * The CustomFieldContextDefaultValueForgeUserField model module.
 * @module model/CustomFieldContextDefaultValueForgeUserField
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextDefaultValueForgeUserField {
    /**
     * Constructs a new <code>CustomFieldContextDefaultValueForgeUserField</code>.
     * Defaults for a Forge user custom field.
     * @alias module:model/CustomFieldContextDefaultValueForgeUserField
     * @param accountId {String} The ID of the default user.
     * @param contextId {String} The ID of the context.
     * @param type {String} 
     * @param userFilter {module:model/UserFilter} 
     */
    constructor(accountId, contextId, type, userFilter) { 
        
        CustomFieldContextDefaultValueForgeUserField.initialize(this, accountId, contextId, type, userFilter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, contextId, type, userFilter) { 
        obj['accountId'] = accountId;
        obj['contextId'] = contextId;
        obj['type'] = type;
        obj['userFilter'] = userFilter;
    }

    /**
     * Constructs a <code>CustomFieldContextDefaultValueForgeUserField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextDefaultValueForgeUserField} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextDefaultValueForgeUserField} The populated <code>CustomFieldContextDefaultValueForgeUserField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextDefaultValueForgeUserField();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('contextId')) {
                obj['contextId'] = ApiClient.convertToType(data['contextId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('userFilter')) {
                obj['userFilter'] = UserFilter.constructFromObject(data['userFilter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextDefaultValueForgeUserField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextDefaultValueForgeUserField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextDefaultValueForgeUserField.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }
        // ensure the json data is a string
        if (data['contextId'] && !(typeof data['contextId'] === 'string' || data['contextId'] instanceof String)) {
            throw new Error("Expected the field `contextId` to be a primitive type in the JSON string but got " + data['contextId']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `userFilter`
        if (data['userFilter']) { // data not null
          UserFilter.validateJSON(data['userFilter']);
        }

        return true;
    }


}

CustomFieldContextDefaultValueForgeUserField.RequiredProperties = ["accountId", "contextId", "type", "userFilter"];

/**
 * The ID of the default user.
 * @member {String} accountId
 */
CustomFieldContextDefaultValueForgeUserField.prototype['accountId'] = undefined;

/**
 * The ID of the context.
 * @member {String} contextId
 */
CustomFieldContextDefaultValueForgeUserField.prototype['contextId'] = undefined;

/**
 * @member {String} type
 */
CustomFieldContextDefaultValueForgeUserField.prototype['type'] = undefined;

/**
 * @member {module:model/UserFilter} userFilter
 */
CustomFieldContextDefaultValueForgeUserField.prototype['userFilter'] = undefined;






export default CustomFieldContextDefaultValueForgeUserField;


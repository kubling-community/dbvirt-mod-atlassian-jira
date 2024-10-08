/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ChangelogItemsInner model module.
 * @module model/ChangelogItemsInner
 * @version 1001.0.0
 */
class ChangelogItemsInner {
    /**
     * Constructs a new <code>ChangelogItemsInner</code>.
     * A change item.
     * @alias module:model/ChangelogItemsInner
     */
    constructor() { 
        
        ChangelogItemsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangelogItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangelogItemsInner} obj Optional instance to populate.
     * @return {module:model/ChangelogItemsInner} The populated <code>ChangelogItemsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangelogItemsInner();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('fieldId')) {
                obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
            }
            if (data.hasOwnProperty('fieldtype')) {
                obj['fieldtype'] = ApiClient.convertToType(data['fieldtype'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('fromString')) {
                obj['fromString'] = ApiClient.convertToType(data['fromString'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('toString')) {
                obj['toString'] = ApiClient.convertToType(data['toString'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangelogItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangelogItemsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['fieldId'] && !(typeof data['fieldId'] === 'string' || data['fieldId'] instanceof String)) {
            throw new Error("Expected the field `fieldId` to be a primitive type in the JSON string but got " + data['fieldId']);
        }
        // ensure the json data is a string
        if (data['fieldtype'] && !(typeof data['fieldtype'] === 'string' || data['fieldtype'] instanceof String)) {
            throw new Error("Expected the field `fieldtype` to be a primitive type in the JSON string but got " + data['fieldtype']);
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['fromString'] && !(typeof data['fromString'] === 'string' || data['fromString'] instanceof String)) {
            throw new Error("Expected the field `fromString` to be a primitive type in the JSON string but got " + data['fromString']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['toString'] && !(typeof data['toString'] === 'string' || data['toString'] instanceof String)) {
            throw new Error("Expected the field `toString` to be a primitive type in the JSON string but got " + data['toString']);
        }

        return true;
    }


}



/**
 * The name of the field changed.
 * @member {String} field
 */
ChangelogItemsInner.prototype['field'] = undefined;

/**
 * The ID of the field changed.
 * @member {String} fieldId
 */
ChangelogItemsInner.prototype['fieldId'] = undefined;

/**
 * The type of the field changed.
 * @member {String} fieldtype
 */
ChangelogItemsInner.prototype['fieldtype'] = undefined;

/**
 * The details of the original value.
 * @member {String} from
 */
ChangelogItemsInner.prototype['from'] = undefined;

/**
 * The details of the original value as a string.
 * @member {String} fromString
 */
ChangelogItemsInner.prototype['fromString'] = undefined;

/**
 * The details of the new value.
 * @member {String} to
 */
ChangelogItemsInner.prototype['to'] = undefined;

/**
 * The details of the new value as a string.
 * @member {String} toString
 */
ChangelogItemsInner.prototype['toString'] = undefined;






export default ChangelogItemsInner;


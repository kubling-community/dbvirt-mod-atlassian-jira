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
import JsonTypeBean from './JsonTypeBean';

/**
 * The FieldCreateMetadataSchema model module.
 * @module model/FieldCreateMetadataSchema
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class FieldCreateMetadataSchema {
    /**
     * Constructs a new <code>FieldCreateMetadataSchema</code>.
     * The data type of the field.
     * @alias module:model/FieldCreateMetadataSchema
     * @implements module:model/JsonTypeBean
     * @param type {String} The data type of the field.
     */
    constructor(type) { 
        JsonTypeBean.initialize(this, type);
        FieldCreateMetadataSchema.initialize(this, type);
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
     * Constructs a <code>FieldCreateMetadataSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldCreateMetadataSchema} obj Optional instance to populate.
     * @return {module:model/FieldCreateMetadataSchema} The populated <code>FieldCreateMetadataSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldCreateMetadataSchema();
            JsonTypeBean.constructFromObject(data, obj);

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], {'String': Object});
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'String');
            }
            if (data.hasOwnProperty('customId')) {
                obj['customId'] = ApiClient.convertToType(data['customId'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FieldCreateMetadataSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FieldCreateMetadataSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FieldCreateMetadataSchema.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['custom'] && !(typeof data['custom'] === 'string' || data['custom'] instanceof String)) {
            throw new Error("Expected the field `custom` to be a primitive type in the JSON string but got " + data['custom']);
        }
        // ensure the json data is a string
        if (data['items'] && !(typeof data['items'] === 'string' || data['items'] instanceof String)) {
            throw new Error("Expected the field `items` to be a primitive type in the JSON string but got " + data['items']);
        }
        // ensure the json data is a string
        if (data['system'] && !(typeof data['system'] === 'string' || data['system'] instanceof String)) {
            throw new Error("Expected the field `system` to be a primitive type in the JSON string but got " + data['system']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

FieldCreateMetadataSchema.RequiredProperties = ["type"];

/**
 * If the field is a custom field, the configuration of the field.
 * @member {Object.<String, Object>} configuration
 */
FieldCreateMetadataSchema.prototype['configuration'] = undefined;

/**
 * If the field is a custom field, the URI of the field.
 * @member {String} custom
 */
FieldCreateMetadataSchema.prototype['custom'] = undefined;

/**
 * If the field is a custom field, the custom ID of the field.
 * @member {Number} customId
 */
FieldCreateMetadataSchema.prototype['customId'] = undefined;

/**
 * When the data type is an array, the name of the field items within the array.
 * @member {String} items
 */
FieldCreateMetadataSchema.prototype['items'] = undefined;

/**
 * If the field is a system field, the name of the field.
 * @member {String} system
 */
FieldCreateMetadataSchema.prototype['system'] = undefined;

/**
 * The data type of the field.
 * @member {String} type
 */
FieldCreateMetadataSchema.prototype['type'] = undefined;


// Implement JsonTypeBean interface:
/**
 * If the field is a custom field, the configuration of the field.
 * @member {Object.<String, Object>} configuration
 */
JsonTypeBean.prototype['configuration'] = undefined;
/**
 * If the field is a custom field, the URI of the field.
 * @member {String} custom
 */
JsonTypeBean.prototype['custom'] = undefined;
/**
 * If the field is a custom field, the custom ID of the field.
 * @member {Number} customId
 */
JsonTypeBean.prototype['customId'] = undefined;
/**
 * When the data type is an array, the name of the field items within the array.
 * @member {String} items
 */
JsonTypeBean.prototype['items'] = undefined;
/**
 * If the field is a system field, the name of the field.
 * @member {String} system
 */
JsonTypeBean.prototype['system'] = undefined;
/**
 * The data type of the field.
 * @member {String} type
 */
JsonTypeBean.prototype['type'] = undefined;




export default FieldCreateMetadataSchema;


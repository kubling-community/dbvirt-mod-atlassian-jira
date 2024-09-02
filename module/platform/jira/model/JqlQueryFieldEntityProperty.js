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
 * The JqlQueryFieldEntityProperty model module.
 * @module model/JqlQueryFieldEntityProperty
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlQueryFieldEntityProperty {
    /**
     * Constructs a new <code>JqlQueryFieldEntityProperty</code>.
     * Details of an entity property.
     * @alias module:model/JqlQueryFieldEntityProperty
     * @param entity {String} The object on which the property is set.
     * @param key {String} The key of the property.
     * @param path {String} The path in the property value to query.
     */
    constructor(entity, key, path) { 
        
        JqlQueryFieldEntityProperty.initialize(this, entity, key, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entity, key, path) { 
        obj['entity'] = entity;
        obj['key'] = key;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>JqlQueryFieldEntityProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryFieldEntityProperty} obj Optional instance to populate.
     * @return {module:model/JqlQueryFieldEntityProperty} The populated <code>JqlQueryFieldEntityProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlQueryFieldEntityProperty();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlQueryFieldEntityProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlQueryFieldEntityProperty</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JqlQueryFieldEntityProperty.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entity'] && !(typeof data['entity'] === 'string' || data['entity'] instanceof String)) {
            throw new Error("Expected the field `entity` to be a primitive type in the JSON string but got " + data['entity']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

JqlQueryFieldEntityProperty.RequiredProperties = ["entity", "key", "path"];

/**
 * The object on which the property is set.
 * @member {String} entity
 */
JqlQueryFieldEntityProperty.prototype['entity'] = undefined;

/**
 * The key of the property.
 * @member {String} key
 */
JqlQueryFieldEntityProperty.prototype['key'] = undefined;

/**
 * The path in the property value to query.
 * @member {String} path
 */
JqlQueryFieldEntityProperty.prototype['path'] = undefined;

/**
 * The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module.
 * @member {module:model/JqlQueryFieldEntityProperty.TypeEnum} type
 */
JqlQueryFieldEntityProperty.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
JqlQueryFieldEntityProperty['TypeEnum'] = {

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "user"
     * @const
     */
    "user": "user"
};



export default JqlQueryFieldEntityProperty;


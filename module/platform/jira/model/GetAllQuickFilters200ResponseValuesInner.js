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
 * The GetAllQuickFilters200ResponseValuesInner model module.
 * @module model/GetAllQuickFilters200ResponseValuesInner
 * @version 1001.0.0
 */
class GetAllQuickFilters200ResponseValuesInner {
    /**
     * Constructs a new <code>GetAllQuickFilters200ResponseValuesInner</code>.
     * @alias module:model/GetAllQuickFilters200ResponseValuesInner
     */
    constructor() { 
        
        GetAllQuickFilters200ResponseValuesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllQuickFilters200ResponseValuesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllQuickFilters200ResponseValuesInner} obj Optional instance to populate.
     * @return {module:model/GetAllQuickFilters200ResponseValuesInner} The populated <code>GetAllQuickFilters200ResponseValuesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllQuickFilters200ResponseValuesInner();

            if (data.hasOwnProperty('boardId')) {
                obj['boardId'] = ApiClient.convertToType(data['boardId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('jql')) {
                obj['jql'] = ApiClient.convertToType(data['jql'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAllQuickFilters200ResponseValuesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAllQuickFilters200ResponseValuesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['jql'] && !(typeof data['jql'] === 'string' || data['jql'] instanceof String)) {
            throw new Error("Expected the field `jql` to be a primitive type in the JSON string but got " + data['jql']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Number} boardId
 */
GetAllQuickFilters200ResponseValuesInner.prototype['boardId'] = undefined;

/**
 * @member {String} description
 */
GetAllQuickFilters200ResponseValuesInner.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
GetAllQuickFilters200ResponseValuesInner.prototype['id'] = undefined;

/**
 * @member {String} jql
 */
GetAllQuickFilters200ResponseValuesInner.prototype['jql'] = undefined;

/**
 * @member {String} name
 */
GetAllQuickFilters200ResponseValuesInner.prototype['name'] = undefined;

/**
 * @member {Number} position
 */
GetAllQuickFilters200ResponseValuesInner.prototype['position'] = undefined;






export default GetAllQuickFilters200ResponseValuesInner;


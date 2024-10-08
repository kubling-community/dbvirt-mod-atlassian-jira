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
 * The GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner model module.
 * @module model/GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner
 * @version 1001.0.0
 */
class GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner {
    /**
     * Constructs a new <code>GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner</code>.
     * @alias module:model/GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner
     */
    constructor() { 
        
        GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner} obj Optional instance to populate.
     * @return {module:model/GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner} The populated <code>GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner.prototype['name'] = undefined;

/**
 * @member {String} self
 */
GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner.prototype['self'] = undefined;






export default GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner;


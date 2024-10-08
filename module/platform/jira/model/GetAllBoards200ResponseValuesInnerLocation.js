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
 * The GetAllBoards200ResponseValuesInnerLocation model module.
 * @module model/GetAllBoards200ResponseValuesInnerLocation
 * @version 1001.0.0
 */
class GetAllBoards200ResponseValuesInnerLocation {
    /**
     * Constructs a new <code>GetAllBoards200ResponseValuesInnerLocation</code>.
     * The container that the board is located in.
     * @alias module:model/GetAllBoards200ResponseValuesInnerLocation
     */
    constructor() { 
        
        GetAllBoards200ResponseValuesInnerLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllBoards200ResponseValuesInnerLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllBoards200ResponseValuesInnerLocation} obj Optional instance to populate.
     * @return {module:model/GetAllBoards200ResponseValuesInnerLocation} The populated <code>GetAllBoards200ResponseValuesInnerLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllBoards200ResponseValuesInnerLocation();

            if (data.hasOwnProperty('avatarURI')) {
                obj['avatarURI'] = ApiClient.convertToType(data['avatarURI'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('projectKey')) {
                obj['projectKey'] = ApiClient.convertToType(data['projectKey'], 'String');
            }
            if (data.hasOwnProperty('projectName')) {
                obj['projectName'] = ApiClient.convertToType(data['projectName'], 'String');
            }
            if (data.hasOwnProperty('projectTypeKey')) {
                obj['projectTypeKey'] = ApiClient.convertToType(data['projectTypeKey'], 'String');
            }
            if (data.hasOwnProperty('userAccountId')) {
                obj['userAccountId'] = ApiClient.convertToType(data['userAccountId'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAllBoards200ResponseValuesInnerLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAllBoards200ResponseValuesInnerLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['avatarURI'] && !(typeof data['avatarURI'] === 'string' || data['avatarURI'] instanceof String)) {
            throw new Error("Expected the field `avatarURI` to be a primitive type in the JSON string but got " + data['avatarURI']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['projectKey'] && !(typeof data['projectKey'] === 'string' || data['projectKey'] instanceof String)) {
            throw new Error("Expected the field `projectKey` to be a primitive type in the JSON string but got " + data['projectKey']);
        }
        // ensure the json data is a string
        if (data['projectName'] && !(typeof data['projectName'] === 'string' || data['projectName'] instanceof String)) {
            throw new Error("Expected the field `projectName` to be a primitive type in the JSON string but got " + data['projectName']);
        }
        // ensure the json data is a string
        if (data['projectTypeKey'] && !(typeof data['projectTypeKey'] === 'string' || data['projectTypeKey'] instanceof String)) {
            throw new Error("Expected the field `projectTypeKey` to be a primitive type in the JSON string but got " + data['projectTypeKey']);
        }
        // ensure the json data is a string
        if (data['userAccountId'] && !(typeof data['userAccountId'] === 'string' || data['userAccountId'] instanceof String)) {
            throw new Error("Expected the field `userAccountId` to be a primitive type in the JSON string but got " + data['userAccountId']);
        }

        return true;
    }


}



/**
 * @member {String} avatarURI
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['avatarURI'] = undefined;

/**
 * @member {String} displayName
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['displayName'] = undefined;

/**
 * @member {String} name
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['name'] = undefined;

/**
 * @member {Number} projectId
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['projectId'] = undefined;

/**
 * @member {String} projectKey
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['projectKey'] = undefined;

/**
 * @member {String} projectName
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['projectName'] = undefined;

/**
 * @member {String} projectTypeKey
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['projectTypeKey'] = undefined;

/**
 * @member {String} userAccountId
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['userAccountId'] = undefined;

/**
 * @member {Number} userId
 */
GetAllBoards200ResponseValuesInnerLocation.prototype['userId'] = undefined;






export default GetAllBoards200ResponseValuesInnerLocation;


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
import GetAllBoards200ResponseValuesInnerAdmins from './GetAllBoards200ResponseValuesInnerAdmins';
import GetAllBoards200ResponseValuesInnerLocation from './GetAllBoards200ResponseValuesInnerLocation';

/**
 * The GetAllBoards200ResponseValuesInner model module.
 * @module model/GetAllBoards200ResponseValuesInner
 * @version 1001.0.0
 */
class GetAllBoards200ResponseValuesInner {
    /**
     * Constructs a new <code>GetAllBoards200ResponseValuesInner</code>.
     * Details about a board.
     * @alias module:model/GetAllBoards200ResponseValuesInner
     */
    constructor() { 
        
        GetAllBoards200ResponseValuesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllBoards200ResponseValuesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllBoards200ResponseValuesInner} obj Optional instance to populate.
     * @return {module:model/GetAllBoards200ResponseValuesInner} The populated <code>GetAllBoards200ResponseValuesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllBoards200ResponseValuesInner();

            if (data.hasOwnProperty('admins')) {
                obj['admins'] = GetAllBoards200ResponseValuesInnerAdmins.constructFromObject(data['admins']);
            }
            if (data.hasOwnProperty('canEdit')) {
                obj['canEdit'] = ApiClient.convertToType(data['canEdit'], 'Boolean');
            }
            if (data.hasOwnProperty('favourite')) {
                obj['favourite'] = ApiClient.convertToType(data['favourite'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isPrivate')) {
                obj['isPrivate'] = ApiClient.convertToType(data['isPrivate'], 'Boolean');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = GetAllBoards200ResponseValuesInnerLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAllBoards200ResponseValuesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAllBoards200ResponseValuesInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `admins`
        if (data['admins']) { // data not null
          GetAllBoards200ResponseValuesInnerAdmins.validateJSON(data['admins']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          GetAllBoards200ResponseValuesInnerLocation.validateJSON(data['location']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/GetAllBoards200ResponseValuesInnerAdmins} admins
 */
GetAllBoards200ResponseValuesInner.prototype['admins'] = undefined;

/**
 * Whether the board can be edited.
 * @member {Boolean} canEdit
 */
GetAllBoards200ResponseValuesInner.prototype['canEdit'] = undefined;

/**
 * Whether the board is selected as a favorite.
 * @member {Boolean} favourite
 */
GetAllBoards200ResponseValuesInner.prototype['favourite'] = undefined;

/**
 * The ID of the board.
 * @member {Number} id
 */
GetAllBoards200ResponseValuesInner.prototype['id'] = undefined;

/**
 * Whether the board is private.
 * @member {Boolean} isPrivate
 */
GetAllBoards200ResponseValuesInner.prototype['isPrivate'] = undefined;

/**
 * @member {module:model/GetAllBoards200ResponseValuesInnerLocation} location
 */
GetAllBoards200ResponseValuesInner.prototype['location'] = undefined;

/**
 * The name of the board.
 * @member {String} name
 */
GetAllBoards200ResponseValuesInner.prototype['name'] = undefined;

/**
 * The URL of the board.
 * @member {String} self
 */
GetAllBoards200ResponseValuesInner.prototype['self'] = undefined;

/**
 * The type the board.
 * @member {String} type
 */
GetAllBoards200ResponseValuesInner.prototype['type'] = undefined;






export default GetAllBoards200ResponseValuesInner;


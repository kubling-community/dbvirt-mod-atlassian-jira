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
 * The Avatar model module.
 * @module model/Avatar
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Avatar {
    /**
     * Constructs a new <code>Avatar</code>.
     * Details of an avatar.
     * @alias module:model/Avatar
     * @extends Object
     * @param id {String} The ID of the avatar.
     */
    constructor(id) { 
        
        Avatar.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Avatar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Avatar} obj Optional instance to populate.
     * @return {module:model/Avatar} The populated <code>Avatar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Avatar();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDeletable')) {
                obj['isDeletable'] = ApiClient.convertToType(data['isDeletable'], 'Boolean');
            }
            if (data.hasOwnProperty('isSelected')) {
                obj['isSelected'] = ApiClient.convertToType(data['isSelected'], 'Boolean');
            }
            if (data.hasOwnProperty('isSystemAvatar')) {
                obj['isSystemAvatar'] = ApiClient.convertToType(data['isSystemAvatar'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Avatar</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Avatar</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Avatar.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }

        return true;
    }


}

Avatar.RequiredProperties = ["id"];

/**
 * The file name of the avatar icon. Returned for system avatars.
 * @member {String} fileName
 */
Avatar.prototype['fileName'] = undefined;

/**
 * The ID of the avatar.
 * @member {String} id
 */
Avatar.prototype['id'] = undefined;

/**
 * Whether the avatar can be deleted.
 * @member {Boolean} isDeletable
 */
Avatar.prototype['isDeletable'] = undefined;

/**
 * Whether the avatar is used in Jira. For example, shown as a project's avatar.
 * @member {Boolean} isSelected
 */
Avatar.prototype['isSelected'] = undefined;

/**
 * Whether the avatar is a system avatar.
 * @member {Boolean} isSystemAvatar
 */
Avatar.prototype['isSystemAvatar'] = undefined;

/**
 * The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.
 * @member {String} owner
 */
Avatar.prototype['owner'] = undefined;

/**
 * The list of avatar icon URLs.
 * @member {Object.<String, String>} urls
 */
Avatar.prototype['urls'] = undefined;






export default Avatar;


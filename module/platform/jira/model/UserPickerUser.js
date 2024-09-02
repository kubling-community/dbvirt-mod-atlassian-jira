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
 * The UserPickerUser model module.
 * @module model/UserPickerUser
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UserPickerUser {
    /**
     * Constructs a new <code>UserPickerUser</code>.
     * A user found in a search.
     * @alias module:model/UserPickerUser
     */
    constructor() { 
        
        UserPickerUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserPickerUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPickerUser} obj Optional instance to populate.
     * @return {module:model/UserPickerUser} The populated <code>UserPickerUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPickerUser();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserPickerUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserPickerUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }
        // ensure the json data is a string
        if (data['avatarUrl'] && !(typeof data['avatarUrl'] === 'string' || data['avatarUrl'] instanceof String)) {
            throw new Error("Expected the field `avatarUrl` to be a primitive type in the JSON string but got " + data['avatarUrl']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['html'] && !(typeof data['html'] === 'string' || data['html'] instanceof String)) {
            throw new Error("Expected the field `html` to be a primitive type in the JSON string but got " + data['html']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */
UserPickerUser.prototype['accountId'] = undefined;

/**
 * The avatar URL of the user.
 * @member {String} avatarUrl
 */
UserPickerUser.prototype['avatarUrl'] = undefined;

/**
 * The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} displayName
 */
UserPickerUser.prototype['displayName'] = undefined;

/**
 * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
 * @member {String} html
 */
UserPickerUser.prototype['html'] = undefined;

/**
 * This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */
UserPickerUser.prototype['key'] = undefined;

/**
 * This property is no longer available . See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */
UserPickerUser.prototype['name'] = undefined;






export default UserPickerUser;


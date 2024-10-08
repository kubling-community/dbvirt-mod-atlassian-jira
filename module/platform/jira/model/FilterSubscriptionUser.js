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
import User from './User';
import UserApplicationRoles from './UserApplicationRoles';
import UserAvatarUrls from './UserAvatarUrls';
import UserGroups from './UserGroups';

/**
 * The FilterSubscriptionUser model module.
 * @module model/FilterSubscriptionUser
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class FilterSubscriptionUser {
    /**
     * Constructs a new <code>FilterSubscriptionUser</code>.
     * The user subscribing to filter.
     * @alias module:model/FilterSubscriptionUser
     * @implements module:model/User
     */
    constructor() { 
        User.initialize(this);
        FilterSubscriptionUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterSubscriptionUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterSubscriptionUser} obj Optional instance to populate.
     * @return {module:model/FilterSubscriptionUser} The populated <code>FilterSubscriptionUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterSubscriptionUser();
            User.constructFromObject(data, obj);

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('applicationRoles')) {
                obj['applicationRoles'] = UserApplicationRoles.constructFromObject(data['applicationRoles']);
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = UserAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = UserGroups.constructFromObject(data['groups']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilterSubscriptionUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilterSubscriptionUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }
        // ensure the json data is a string
        if (data['accountType'] && !(typeof data['accountType'] === 'string' || data['accountType'] instanceof String)) {
            throw new Error("Expected the field `accountType` to be a primitive type in the JSON string but got " + data['accountType']);
        }
        // validate the optional field `applicationRoles`
        if (data['applicationRoles']) { // data not null
          UserApplicationRoles.validateJSON(data['applicationRoles']);
        }
        // validate the optional field `avatarUrls`
        if (data['avatarUrls']) { // data not null
          UserAvatarUrls.validateJSON(data['avatarUrls']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['emailAddress'] && !(typeof data['emailAddress'] === 'string' || data['emailAddress'] instanceof String)) {
            throw new Error("Expected the field `emailAddress` to be a primitive type in the JSON string but got " + data['emailAddress']);
        }
        // ensure the json data is a string
        if (data['expand'] && !(typeof data['expand'] === 'string' || data['expand'] instanceof String)) {
            throw new Error("Expected the field `expand` to be a primitive type in the JSON string but got " + data['expand']);
        }
        // validate the optional field `groups`
        if (data['groups']) { // data not null
          UserGroups.validateJSON(data['groups']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
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
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }

        return true;
    }


}



/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
 * @member {String} accountId
 */
FilterSubscriptionUser.prototype['accountId'] = undefined;

/**
 * The user account type. Can take the following values:   *  `atlassian` regular Atlassian user account  *  `app` system account used for Connect applications and OAuth to represent external systems  *  `customer` Jira Service Desk account representing an external service desk
 * @member {module:model/FilterSubscriptionUser.AccountTypeEnum} accountType
 */
FilterSubscriptionUser.prototype['accountType'] = undefined;

/**
 * Whether the user is active.
 * @member {Boolean} active
 */
FilterSubscriptionUser.prototype['active'] = undefined;

/**
 * @member {module:model/UserApplicationRoles} applicationRoles
 */
FilterSubscriptionUser.prototype['applicationRoles'] = undefined;

/**
 * @member {module:model/UserAvatarUrls} avatarUrls
 */
FilterSubscriptionUser.prototype['avatarUrls'] = undefined;

/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */
FilterSubscriptionUser.prototype['displayName'] = undefined;

/**
 * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} emailAddress
 */
FilterSubscriptionUser.prototype['emailAddress'] = undefined;

/**
 * Expand options that include additional user details in the response.
 * @member {String} expand
 */
FilterSubscriptionUser.prototype['expand'] = undefined;

/**
 * @member {module:model/UserGroups} groups
 */
FilterSubscriptionUser.prototype['groups'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */
FilterSubscriptionUser.prototype['key'] = undefined;

/**
 * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} locale
 */
FilterSubscriptionUser.prototype['locale'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */
FilterSubscriptionUser.prototype['name'] = undefined;

/**
 * The URL of the user.
 * @member {String} self
 */
FilterSubscriptionUser.prototype['self'] = undefined;

/**
 * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} timeZone
 */
FilterSubscriptionUser.prototype['timeZone'] = undefined;


// Implement User interface:
/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
 * @member {String} accountId
 */
User.prototype['accountId'] = undefined;
/**
 * The user account type. Can take the following values:   *  `atlassian` regular Atlassian user account  *  `app` system account used for Connect applications and OAuth to represent external systems  *  `customer` Jira Service Desk account representing an external service desk
 * @member {module:model/User.AccountTypeEnum} accountType
 */
User.prototype['accountType'] = undefined;
/**
 * Whether the user is active.
 * @member {Boolean} active
 */
User.prototype['active'] = undefined;
/**
 * @member {module:model/UserApplicationRoles} applicationRoles
 */
User.prototype['applicationRoles'] = undefined;
/**
 * @member {module:model/UserAvatarUrls} avatarUrls
 */
User.prototype['avatarUrls'] = undefined;
/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */
User.prototype['displayName'] = undefined;
/**
 * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} emailAddress
 */
User.prototype['emailAddress'] = undefined;
/**
 * Expand options that include additional user details in the response.
 * @member {String} expand
 */
User.prototype['expand'] = undefined;
/**
 * @member {module:model/UserGroups} groups
 */
User.prototype['groups'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */
User.prototype['key'] = undefined;
/**
 * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} locale
 */
User.prototype['locale'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */
User.prototype['name'] = undefined;
/**
 * The URL of the user.
 * @member {String} self
 */
User.prototype['self'] = undefined;
/**
 * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} timeZone
 */
User.prototype['timeZone'] = undefined;



/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */
FilterSubscriptionUser['AccountTypeEnum'] = {

    /**
     * value: "atlassian"
     * @const
     */
    "atlassian": "atlassian",

    /**
     * value: "app"
     * @const
     */
    "app": "app",

    /**
     * value: "customer"
     * @const
     */
    "customer": "customer",

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"
};



export default FilterSubscriptionUser;


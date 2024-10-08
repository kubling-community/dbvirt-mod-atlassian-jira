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
import FieldDetails from './FieldDetails';
import GroupName from './GroupName';
import ProjectRole from './ProjectRole';
import UserDetails from './UserDetails';

/**
 * The EventNotification model module.
 * @module model/EventNotification
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class EventNotification {
    /**
     * Constructs a new <code>EventNotification</code>.
     * Details about a notification associated with an event.
     * @alias module:model/EventNotification
     */
    constructor() { 
        
        EventNotification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventNotification} obj Optional instance to populate.
     * @return {module:model/EventNotification} The populated <code>EventNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventNotification();

            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], FieldDetails);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], GroupName);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('notificationType')) {
                obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
            }
            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
            }
            if (data.hasOwnProperty('projectRole')) {
                obj['projectRole'] = ApiClient.convertToType(data['projectRole'], ProjectRole);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], UserDetails);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventNotification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventNotification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['emailAddress'] && !(typeof data['emailAddress'] === 'string' || data['emailAddress'] instanceof String)) {
            throw new Error("Expected the field `emailAddress` to be a primitive type in the JSON string but got " + data['emailAddress']);
        }
        // ensure the json data is a string
        if (data['expand'] && !(typeof data['expand'] === 'string' || data['expand'] instanceof String)) {
            throw new Error("Expected the field `expand` to be a primitive type in the JSON string but got " + data['expand']);
        }
        // validate the optional field `field`
        if (data['field']) { // data not null
          FieldDetails.validateJSON(data['field']);
        }
        // validate the optional field `group`
        if (data['group']) { // data not null
          GroupName.validateJSON(data['group']);
        }
        // ensure the json data is a string
        if (data['notificationType'] && !(typeof data['notificationType'] === 'string' || data['notificationType'] instanceof String)) {
            throw new Error("Expected the field `notificationType` to be a primitive type in the JSON string but got " + data['notificationType']);
        }
        // ensure the json data is a string
        if (data['parameter'] && !(typeof data['parameter'] === 'string' || data['parameter'] instanceof String)) {
            throw new Error("Expected the field `parameter` to be a primitive type in the JSON string but got " + data['parameter']);
        }
        // validate the optional field `projectRole`
        if (data['projectRole']) { // data not null
          ProjectRole.validateJSON(data['projectRole']);
        }
        // ensure the json data is a string
        if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
            throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          UserDetails.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * The email address.
 * @member {String} emailAddress
 */
EventNotification.prototype['emailAddress'] = undefined;

/**
 * Expand options that include additional event notification details in the response.
 * @member {String} expand
 */
EventNotification.prototype['expand'] = undefined;

/**
 * The custom user or group field.
 * @member {module:model/FieldDetails} field
 */
EventNotification.prototype['field'] = undefined;

/**
 * The specified group.
 * @member {module:model/GroupName} group
 */
EventNotification.prototype['group'] = undefined;

/**
 * The ID of the notification.
 * @member {Number} id
 */
EventNotification.prototype['id'] = undefined;

/**
 * Identifies the recipients of the notification.
 * @member {module:model/EventNotification.NotificationTypeEnum} notificationType
 */
EventNotification.prototype['notificationType'] = undefined;

/**
 * As a group's name can change, use of `recipient` is recommended. The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by `notificationType` value. So, when `notificationType` is:   *  `User` The `parameter` is the user account ID.  *  `Group` The `parameter` is the group name.  *  `ProjectRole` The `parameter` is the project role ID.  *  `UserCustomField` The `parameter` is the ID of the custom field.  *  `GroupCustomField` The `parameter` is the ID of the custom field.
 * @member {String} parameter
 */
EventNotification.prototype['parameter'] = undefined;

/**
 * The specified project role.
 * @member {module:model/ProjectRole} projectRole
 */
EventNotification.prototype['projectRole'] = undefined;

/**
 * The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by the `notificationType` value. So, when `notificationType` is:   *  `User`, `recipient` is the user account ID.  *  `Group`, `recipient` is the group ID.  *  `ProjectRole`, `recipient` is the project role ID.  *  `UserCustomField`, `recipient` is the ID of the custom field.  *  `GroupCustomField`, `recipient` is the ID of the custom field.
 * @member {String} recipient
 */
EventNotification.prototype['recipient'] = undefined;

/**
 * The specified user.
 * @member {module:model/UserDetails} user
 */
EventNotification.prototype['user'] = undefined;





/**
 * Allowed values for the <code>notificationType</code> property.
 * @enum {String}
 * @readonly
 */
EventNotification['NotificationTypeEnum'] = {

    /**
     * value: "CurrentAssignee"
     * @const
     */
    "CurrentAssignee": "CurrentAssignee",

    /**
     * value: "Reporter"
     * @const
     */
    "Reporter": "Reporter",

    /**
     * value: "CurrentUser"
     * @const
     */
    "CurrentUser": "CurrentUser",

    /**
     * value: "ProjectLead"
     * @const
     */
    "ProjectLead": "ProjectLead",

    /**
     * value: "ComponentLead"
     * @const
     */
    "ComponentLead": "ComponentLead",

    /**
     * value: "User"
     * @const
     */
    "User": "User",

    /**
     * value: "Group"
     * @const
     */
    "Group": "Group",

    /**
     * value: "ProjectRole"
     * @const
     */
    "ProjectRole": "ProjectRole",

    /**
     * value: "EmailAddress"
     * @const
     */
    "EmailAddress": "EmailAddress",

    /**
     * value: "AllWatchers"
     * @const
     */
    "AllWatchers": "AllWatchers",

    /**
     * value: "UserCustomField"
     * @const
     */
    "UserCustomField": "UserCustomField",

    /**
     * value: "GroupCustomField"
     * @const
     */
    "GroupCustomField": "GroupCustomField"
};



export default EventNotification;


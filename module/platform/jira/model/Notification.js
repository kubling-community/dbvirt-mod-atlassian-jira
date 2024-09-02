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
import NotificationRecipients from './NotificationRecipients';
import NotificationRecipientsRestrictions from './NotificationRecipientsRestrictions';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * Details about a notification.
     * @alias module:model/Notification
     * @extends Object
     */
    constructor() { 
        
        Notification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('htmlBody')) {
                obj['htmlBody'] = ApiClient.convertToType(data['htmlBody'], 'String');
            }
            if (data.hasOwnProperty('restrict')) {
                obj['restrict'] = ApiClient.convertToType(data['restrict'], NotificationRecipientsRestrictions);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('textBody')) {
                obj['textBody'] = ApiClient.convertToType(data['textBody'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], NotificationRecipients);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Notification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Notification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['htmlBody'] && !(typeof data['htmlBody'] === 'string' || data['htmlBody'] instanceof String)) {
            throw new Error("Expected the field `htmlBody` to be a primitive type in the JSON string but got " + data['htmlBody']);
        }
        // validate the optional field `restrict`
        if (data['restrict']) { // data not null
          NotificationRecipientsRestrictions.validateJSON(data['restrict']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['textBody'] && !(typeof data['textBody'] === 'string' || data['textBody'] instanceof String)) {
            throw new Error("Expected the field `textBody` to be a primitive type in the JSON string but got " + data['textBody']);
        }

        return true;
    }


}



/**
 * The HTML body of the email notification for the issue.
 * @member {String} htmlBody
 */
Notification.prototype['htmlBody'] = undefined;

/**
 * Restricts the notifications to users with the specified permissions.
 * @member {module:model/NotificationRecipientsRestrictions} restrict
 */
Notification.prototype['restrict'] = undefined;

/**
 * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
 * @member {String} subject
 */
Notification.prototype['subject'] = undefined;

/**
 * The plain text body of the email notification for the issue.
 * @member {String} textBody
 */
Notification.prototype['textBody'] = undefined;

/**
 * The recipients of the email notification for the issue.
 * @member {module:model/NotificationRecipients} to
 */
Notification.prototype['to'] = undefined;






export default Notification;


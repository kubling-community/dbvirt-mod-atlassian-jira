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
 * The UpdatePriorityDetails model module.
 * @module model/UpdatePriorityDetails
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UpdatePriorityDetails {
    /**
     * Constructs a new <code>UpdatePriorityDetails</code>.
     * Details of an issue priority.
     * @alias module:model/UpdatePriorityDetails
     * @extends Object
     */
    constructor() { 
        
        UpdatePriorityDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePriorityDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePriorityDetails} obj Optional instance to populate.
     * @return {module:model/UpdatePriorityDetails} The populated <code>UpdatePriorityDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePriorityDetails();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('statusColor')) {
                obj['statusColor'] = ApiClient.convertToType(data['statusColor'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePriorityDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePriorityDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['iconUrl'] && !(typeof data['iconUrl'] === 'string' || data['iconUrl'] instanceof String)) {
            throw new Error("Expected the field `iconUrl` to be a primitive type in the JSON string but got " + data['iconUrl']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['statusColor'] && !(typeof data['statusColor'] === 'string' || data['statusColor'] instanceof String)) {
            throw new Error("Expected the field `statusColor` to be a primitive type in the JSON string but got " + data['statusColor']);
        }

        return true;
    }


}



/**
 * The description of the priority.
 * @member {String} description
 */
UpdatePriorityDetails.prototype['description'] = undefined;

/**
 * The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used.
 * @member {module:model/UpdatePriorityDetails.IconUrlEnum} iconUrl
 */
UpdatePriorityDetails.prototype['iconUrl'] = undefined;

/**
 * The name of the priority. Must be unique.
 * @member {String} name
 */
UpdatePriorityDetails.prototype['name'] = undefined;

/**
 * The status color of the priority in 3-digit or 6-digit hexadecimal format.
 * @member {String} statusColor
 */
UpdatePriorityDetails.prototype['statusColor'] = undefined;





/**
 * Allowed values for the <code>iconUrl</code> property.
 * @enum {String}
 * @readonly
 */
UpdatePriorityDetails['IconUrlEnum'] = {

    /**
     * value: "/images/icons/priorities/blocker.png"
     * @const
     */
    "blocker.png": "/images/icons/priorities/blocker.png",

    /**
     * value: "/images/icons/priorities/critical.png"
     * @const
     */
    "critical.png": "/images/icons/priorities/critical.png",

    /**
     * value: "/images/icons/priorities/high.png"
     * @const
     */
    "high.png": "/images/icons/priorities/high.png",

    /**
     * value: "/images/icons/priorities/highest.png"
     * @const
     */
    "highest.png": "/images/icons/priorities/highest.png",

    /**
     * value: "/images/icons/priorities/low.png"
     * @const
     */
    "low.png": "/images/icons/priorities/low.png",

    /**
     * value: "/images/icons/priorities/lowest.png"
     * @const
     */
    "lowest.png": "/images/icons/priorities/lowest.png",

    /**
     * value: "/images/icons/priorities/major.png"
     * @const
     */
    "major.png": "/images/icons/priorities/major.png",

    /**
     * value: "/images/icons/priorities/medium.png"
     * @const
     */
    "medium.png": "/images/icons/priorities/medium.png",

    /**
     * value: "/images/icons/priorities/minor.png"
     * @const
     */
    "minor.png": "/images/icons/priorities/minor.png",

    /**
     * value: "/images/icons/priorities/trivial.png"
     * @const
     */
    "trivial.png": "/images/icons/priorities/trivial.png",

    /**
     * value: "/images/icons/priorities/blocker_new.png"
     * @const
     */
    "blocker_new.png": "/images/icons/priorities/blocker_new.png",

    /**
     * value: "/images/icons/priorities/critical_new.png"
     * @const
     */
    "critical_new.png": "/images/icons/priorities/critical_new.png",

    /**
     * value: "/images/icons/priorities/high_new.png"
     * @const
     */
    "high_new.png": "/images/icons/priorities/high_new.png",

    /**
     * value: "/images/icons/priorities/highest_new.png"
     * @const
     */
    "highest_new.png": "/images/icons/priorities/highest_new.png",

    /**
     * value: "/images/icons/priorities/low_new.png"
     * @const
     */
    "low_new.png": "/images/icons/priorities/low_new.png",

    /**
     * value: "/images/icons/priorities/lowest_new.png"
     * @const
     */
    "lowest_new.png": "/images/icons/priorities/lowest_new.png",

    /**
     * value: "/images/icons/priorities/major_new.png"
     * @const
     */
    "major_new.png": "/images/icons/priorities/major_new.png",

    /**
     * value: "/images/icons/priorities/medium_new.png"
     * @const
     */
    "medium_new.png": "/images/icons/priorities/medium_new.png",

    /**
     * value: "/images/icons/priorities/minor_new.png"
     * @const
     */
    "minor_new.png": "/images/icons/priorities/minor_new.png",

    /**
     * value: "/images/icons/priorities/trivial_new.png"
     * @const
     */
    "trivial_new.png": "/images/icons/priorities/trivial_new.png"
};



export default UpdatePriorityDetails;


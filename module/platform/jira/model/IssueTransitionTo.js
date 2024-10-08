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
import StatusDetails from './StatusDetails';
import StatusDetailsScope from './StatusDetailsScope';
import StatusDetailsStatusCategory from './StatusDetailsStatusCategory';

/**
 * The IssueTransitionTo model module.
 * @module model/IssueTransitionTo
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class IssueTransitionTo {
    /**
     * Constructs a new <code>IssueTransitionTo</code>.
     * Details of the issue status after the transition.
     * @alias module:model/IssueTransitionTo
     * @implements module:model/StatusDetails
     */
    constructor() { 
        StatusDetails.initialize(this);
        IssueTransitionTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTransitionTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTransitionTo} obj Optional instance to populate.
     * @return {module:model/IssueTransitionTo} The populated <code>IssueTransitionTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTransitionTo();
            StatusDetails.constructFromObject(data, obj);

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = StatusDetailsScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('statusCategory')) {
                obj['statusCategory'] = StatusDetailsStatusCategory.constructFromObject(data['statusCategory']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueTransitionTo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueTransitionTo</code>.
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `scope`
        if (data['scope']) { // data not null
          StatusDetailsScope.validateJSON(data['scope']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // validate the optional field `statusCategory`
        if (data['statusCategory']) { // data not null
          StatusDetailsStatusCategory.validateJSON(data['statusCategory']);
        }

        return true;
    }


}



/**
 * The description of the status.
 * @member {String} description
 */
IssueTransitionTo.prototype['description'] = undefined;

/**
 * The URL of the icon used to represent the status.
 * @member {String} iconUrl
 */
IssueTransitionTo.prototype['iconUrl'] = undefined;

/**
 * The ID of the status.
 * @member {String} id
 */
IssueTransitionTo.prototype['id'] = undefined;

/**
 * The name of the status.
 * @member {String} name
 */
IssueTransitionTo.prototype['name'] = undefined;

/**
 * @member {module:model/StatusDetailsScope} scope
 */
IssueTransitionTo.prototype['scope'] = undefined;

/**
 * The URL of the status.
 * @member {String} self
 */
IssueTransitionTo.prototype['self'] = undefined;

/**
 * @member {module:model/StatusDetailsStatusCategory} statusCategory
 */
IssueTransitionTo.prototype['statusCategory'] = undefined;


// Implement StatusDetails interface:
/**
 * The description of the status.
 * @member {String} description
 */
StatusDetails.prototype['description'] = undefined;
/**
 * The URL of the icon used to represent the status.
 * @member {String} iconUrl
 */
StatusDetails.prototype['iconUrl'] = undefined;
/**
 * The ID of the status.
 * @member {String} id
 */
StatusDetails.prototype['id'] = undefined;
/**
 * The name of the status.
 * @member {String} name
 */
StatusDetails.prototype['name'] = undefined;
/**
 * @member {module:model/StatusDetailsScope} scope
 */
StatusDetails.prototype['scope'] = undefined;
/**
 * The URL of the status.
 * @member {String} self
 */
StatusDetails.prototype['self'] = undefined;
/**
 * @member {module:model/StatusDetailsStatusCategory} statusCategory
 */
StatusDetails.prototype['statusCategory'] = undefined;




export default IssueTransitionTo;


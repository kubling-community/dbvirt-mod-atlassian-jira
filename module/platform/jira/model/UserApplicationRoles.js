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
import ApplicationRole from './ApplicationRole';
import SimpleListWrapperApplicationRole from './SimpleListWrapperApplicationRole';

/**
 * The UserApplicationRoles model module.
 * @module model/UserApplicationRoles
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UserApplicationRoles {
    /**
     * Constructs a new <code>UserApplicationRoles</code>.
     * The application roles the user is assigned to.
     * @alias module:model/UserApplicationRoles
     * @implements module:model/SimpleListWrapperApplicationRole
     */
    constructor() { 
        SimpleListWrapperApplicationRole.initialize(this);
        UserApplicationRoles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserApplicationRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserApplicationRoles} obj Optional instance to populate.
     * @return {module:model/UserApplicationRoles} The populated <code>UserApplicationRoles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserApplicationRoles();
            SimpleListWrapperApplicationRole.constructFromObject(data, obj);

            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], Object);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ApplicationRole]);
            }
            if (data.hasOwnProperty('max-results')) {
                obj['max-results'] = ApiClient.convertToType(data['max-results'], 'Number');
            }
            if (data.hasOwnProperty('pagingCallback')) {
                obj['pagingCallback'] = ApiClient.convertToType(data['pagingCallback'], Object);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserApplicationRoles</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserApplicationRoles</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ApplicationRole.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Object} callback
 */
UserApplicationRoles.prototype['callback'] = undefined;

/**
 * @member {Array.<module:model/ApplicationRole>} items
 */
UserApplicationRoles.prototype['items'] = undefined;

/**
 * @member {Number} max-results
 */
UserApplicationRoles.prototype['max-results'] = undefined;

/**
 * @member {Object} pagingCallback
 */
UserApplicationRoles.prototype['pagingCallback'] = undefined;

/**
 * @member {Number} size
 */
UserApplicationRoles.prototype['size'] = undefined;


// Implement SimpleListWrapperApplicationRole interface:
/**
 * @member {Object} callback
 */
SimpleListWrapperApplicationRole.prototype['callback'] = undefined;
/**
 * @member {Array.<module:model/ApplicationRole>} items
 */
SimpleListWrapperApplicationRole.prototype['items'] = undefined;
/**
 * @member {Number} max-results
 */
SimpleListWrapperApplicationRole.prototype['max-results'] = undefined;
/**
 * @member {Object} pagingCallback
 */
SimpleListWrapperApplicationRole.prototype['pagingCallback'] = undefined;
/**
 * @member {Number} size
 */
SimpleListWrapperApplicationRole.prototype['size'] = undefined;




export default UserApplicationRoles;


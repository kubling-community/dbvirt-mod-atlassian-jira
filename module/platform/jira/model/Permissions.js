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
import UserPermission from './UserPermission';

/**
 * The Permissions model module.
 * @module model/Permissions
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Permissions {
    /**
     * Constructs a new <code>Permissions</code>.
     * Details about permissions.
     * @alias module:model/Permissions
     */
    constructor() { 
        
        Permissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Permissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Permissions} obj Optional instance to populate.
     * @return {module:model/Permissions} The populated <code>Permissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Permissions();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], {'String': UserPermission});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Permissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Permissions</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * List of permissions.
 * @member {Object.<String, module:model/UserPermission>} permissions
 */
Permissions.prototype['permissions'] = undefined;






export default Permissions;


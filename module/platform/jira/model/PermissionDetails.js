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
import SharePermission from './SharePermission';

/**
 * The PermissionDetails model module.
 * @module model/PermissionDetails
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PermissionDetails {
    /**
     * Constructs a new <code>PermissionDetails</code>.
     * Details for permissions of shareable entities
     * @alias module:model/PermissionDetails
     * @param editPermissions {Array.<module:model/SharePermission>} The edit permissions for the shareable entities.
     * @param sharePermissions {Array.<module:model/SharePermission>} The share permissions for the shareable entities.
     */
    constructor(editPermissions, sharePermissions) { 
        
        PermissionDetails.initialize(this, editPermissions, sharePermissions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, editPermissions, sharePermissions) { 
        obj['editPermissions'] = editPermissions;
        obj['sharePermissions'] = sharePermissions;
    }

    /**
     * Constructs a <code>PermissionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionDetails} obj Optional instance to populate.
     * @return {module:model/PermissionDetails} The populated <code>PermissionDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionDetails();

            if (data.hasOwnProperty('editPermissions')) {
                obj['editPermissions'] = ApiClient.convertToType(data['editPermissions'], [SharePermission]);
            }
            if (data.hasOwnProperty('sharePermissions')) {
                obj['sharePermissions'] = ApiClient.convertToType(data['sharePermissions'], [SharePermission]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PermissionDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['editPermissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['editPermissions'])) {
                throw new Error("Expected the field `editPermissions` to be an array in the JSON data but got " + data['editPermissions']);
            }
            // validate the optional field `editPermissions` (array)
            for (const item of data['editPermissions']) {
                SharePermission.validateJSON(item);
            };
        }
        if (data['sharePermissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sharePermissions'])) {
                throw new Error("Expected the field `sharePermissions` to be an array in the JSON data but got " + data['sharePermissions']);
            }
            // validate the optional field `sharePermissions` (array)
            for (const item of data['sharePermissions']) {
                SharePermission.validateJSON(item);
            };
        }

        return true;
    }


}

PermissionDetails.RequiredProperties = ["editPermissions", "sharePermissions"];

/**
 * The edit permissions for the shareable entities.
 * @member {Array.<module:model/SharePermission>} editPermissions
 */
PermissionDetails.prototype['editPermissions'] = undefined;

/**
 * The share permissions for the shareable entities.
 * @member {Array.<module:model/SharePermission>} sharePermissions
 */
PermissionDetails.prototype['sharePermissions'] = undefined;






export default PermissionDetails;


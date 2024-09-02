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
 * The ChangeFilterOwner model module.
 * @module model/ChangeFilterOwner
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ChangeFilterOwner {
    /**
     * Constructs a new <code>ChangeFilterOwner</code>.
     * The account ID of the new owner.
     * @alias module:model/ChangeFilterOwner
     * @param accountId {String} The account ID of the new owner.
     */
    constructor(accountId) { 
        
        ChangeFilterOwner.initialize(this, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId) { 
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>ChangeFilterOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeFilterOwner} obj Optional instance to populate.
     * @return {module:model/ChangeFilterOwner} The populated <code>ChangeFilterOwner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeFilterOwner();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeFilterOwner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeFilterOwner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChangeFilterOwner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }

        return true;
    }


}

ChangeFilterOwner.RequiredProperties = ["accountId"];

/**
 * The account ID of the new owner.
 * @member {String} accountId
 */
ChangeFilterOwner.prototype['accountId'] = undefined;






export default ChangeFilterOwner;


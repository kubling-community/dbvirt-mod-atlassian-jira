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
 * The SecuritySchemeLevelMemberBean model module.
 * @module model/SecuritySchemeLevelMemberBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class SecuritySchemeLevelMemberBean {
    /**
     * Constructs a new <code>SecuritySchemeLevelMemberBean</code>.
     * @alias module:model/SecuritySchemeLevelMemberBean
     * @param type {String} The issue security level member type, e.g `reporter`, `group`, `user`.
     */
    constructor(type) { 
        
        SecuritySchemeLevelMemberBean.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>SecuritySchemeLevelMemberBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritySchemeLevelMemberBean} obj Optional instance to populate.
     * @return {module:model/SecuritySchemeLevelMemberBean} The populated <code>SecuritySchemeLevelMemberBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritySchemeLevelMemberBean();

            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SecuritySchemeLevelMemberBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SecuritySchemeLevelMemberBean</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SecuritySchemeLevelMemberBean.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['parameter'] && !(typeof data['parameter'] === 'string' || data['parameter'] instanceof String)) {
            throw new Error("Expected the field `parameter` to be a primitive type in the JSON string but got " + data['parameter']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

SecuritySchemeLevelMemberBean.RequiredProperties = ["type"];

/**
 * The value corresponding to the specified member type.
 * @member {String} parameter
 */
SecuritySchemeLevelMemberBean.prototype['parameter'] = undefined;

/**
 * The issue security level member type, e.g `reporter`, `group`, `user`.
 * @member {String} type
 */
SecuritySchemeLevelMemberBean.prototype['type'] = undefined;






export default SecuritySchemeLevelMemberBean;


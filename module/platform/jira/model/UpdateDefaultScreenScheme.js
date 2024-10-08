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
 * The UpdateDefaultScreenScheme model module.
 * @module model/UpdateDefaultScreenScheme
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class UpdateDefaultScreenScheme {
    /**
     * Constructs a new <code>UpdateDefaultScreenScheme</code>.
     * The ID of a screen scheme.
     * @alias module:model/UpdateDefaultScreenScheme
     * @param screenSchemeId {String} The ID of the screen scheme.
     */
    constructor(screenSchemeId) { 
        
        UpdateDefaultScreenScheme.initialize(this, screenSchemeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, screenSchemeId) { 
        obj['screenSchemeId'] = screenSchemeId;
    }

    /**
     * Constructs a <code>UpdateDefaultScreenScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDefaultScreenScheme} obj Optional instance to populate.
     * @return {module:model/UpdateDefaultScreenScheme} The populated <code>UpdateDefaultScreenScheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDefaultScreenScheme();

            if (data.hasOwnProperty('screenSchemeId')) {
                obj['screenSchemeId'] = ApiClient.convertToType(data['screenSchemeId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateDefaultScreenScheme</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDefaultScreenScheme</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateDefaultScreenScheme.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['screenSchemeId'] && !(typeof data['screenSchemeId'] === 'string' || data['screenSchemeId'] instanceof String)) {
            throw new Error("Expected the field `screenSchemeId` to be a primitive type in the JSON string but got " + data['screenSchemeId']);
        }

        return true;
    }


}

UpdateDefaultScreenScheme.RequiredProperties = ["screenSchemeId"];

/**
 * The ID of the screen scheme.
 * @member {String} screenSchemeId
 */
UpdateDefaultScreenScheme.prototype['screenSchemeId'] = undefined;






export default UpdateDefaultScreenScheme;


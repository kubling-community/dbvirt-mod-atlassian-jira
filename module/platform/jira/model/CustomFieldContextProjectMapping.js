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
 * The CustomFieldContextProjectMapping model module.
 * @module model/CustomFieldContextProjectMapping
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextProjectMapping {
    /**
     * Constructs a new <code>CustomFieldContextProjectMapping</code>.
     * Details of a context to project association.
     * @alias module:model/CustomFieldContextProjectMapping
     * @param contextId {String} The ID of the context.
     */
    constructor(contextId) { 
        
        CustomFieldContextProjectMapping.initialize(this, contextId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contextId) { 
        obj['contextId'] = contextId;
    }

    /**
     * Constructs a <code>CustomFieldContextProjectMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextProjectMapping} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextProjectMapping} The populated <code>CustomFieldContextProjectMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextProjectMapping();

            if (data.hasOwnProperty('contextId')) {
                obj['contextId'] = ApiClient.convertToType(data['contextId'], 'String');
            }
            if (data.hasOwnProperty('isGlobalContext')) {
                obj['isGlobalContext'] = ApiClient.convertToType(data['isGlobalContext'], 'Boolean');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextProjectMapping</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextProjectMapping</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextProjectMapping.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contextId'] && !(typeof data['contextId'] === 'string' || data['contextId'] instanceof String)) {
            throw new Error("Expected the field `contextId` to be a primitive type in the JSON string but got " + data['contextId']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }

        return true;
    }


}

CustomFieldContextProjectMapping.RequiredProperties = ["contextId"];

/**
 * The ID of the context.
 * @member {String} contextId
 */
CustomFieldContextProjectMapping.prototype['contextId'] = undefined;

/**
 * Whether context is global.
 * @member {Boolean} isGlobalContext
 */
CustomFieldContextProjectMapping.prototype['isGlobalContext'] = undefined;

/**
 * The ID of the project.
 * @member {String} projectId
 */
CustomFieldContextProjectMapping.prototype['projectId'] = undefined;






export default CustomFieldContextProjectMapping;


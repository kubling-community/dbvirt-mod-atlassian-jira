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
 * The CustomFieldContextDefaultValueProject model module.
 * @module model/CustomFieldContextDefaultValueProject
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class CustomFieldContextDefaultValueProject {
    /**
     * Constructs a new <code>CustomFieldContextDefaultValueProject</code>.
     * The default value for a project custom field.
     * @alias module:model/CustomFieldContextDefaultValueProject
     * @param contextId {String} The ID of the context.
     * @param projectId {String} The ID of the default project.
     * @param type {String} 
     */
    constructor(contextId, projectId, type) { 
        
        CustomFieldContextDefaultValueProject.initialize(this, contextId, projectId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contextId, projectId, type) { 
        obj['contextId'] = contextId;
        obj['projectId'] = projectId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CustomFieldContextDefaultValueProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldContextDefaultValueProject} obj Optional instance to populate.
     * @return {module:model/CustomFieldContextDefaultValueProject} The populated <code>CustomFieldContextDefaultValueProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldContextDefaultValueProject();

            if (data.hasOwnProperty('contextId')) {
                obj['contextId'] = ApiClient.convertToType(data['contextId'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldContextDefaultValueProject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldContextDefaultValueProject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomFieldContextDefaultValueProject.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

CustomFieldContextDefaultValueProject.RequiredProperties = ["contextId", "projectId", "type"];

/**
 * The ID of the context.
 * @member {String} contextId
 */
CustomFieldContextDefaultValueProject.prototype['contextId'] = undefined;

/**
 * The ID of the default project.
 * @member {String} projectId
 */
CustomFieldContextDefaultValueProject.prototype['projectId'] = undefined;

/**
 * @member {String} type
 */
CustomFieldContextDefaultValueProject.prototype['type'] = undefined;






export default CustomFieldContextDefaultValueProject;


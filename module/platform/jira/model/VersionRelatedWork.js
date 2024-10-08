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
 * The VersionRelatedWork model module.
 * @module model/VersionRelatedWork
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class VersionRelatedWork {
    /**
     * Constructs a new <code>VersionRelatedWork</code>.
     * Associated related work to a version
     * @alias module:model/VersionRelatedWork
     * @param category {String} The category of the related work
     */
    constructor(category) { 
        
        VersionRelatedWork.initialize(this, category);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, category) { 
        obj['category'] = category;
    }

    /**
     * Constructs a <code>VersionRelatedWork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionRelatedWork} obj Optional instance to populate.
     * @return {module:model/VersionRelatedWork} The populated <code>VersionRelatedWork</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionRelatedWork();

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('issueId')) {
                obj['issueId'] = ApiClient.convertToType(data['issueId'], 'Number');
            }
            if (data.hasOwnProperty('relatedWorkId')) {
                obj['relatedWorkId'] = ApiClient.convertToType(data['relatedWorkId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionRelatedWork</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionRelatedWork</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VersionRelatedWork.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['relatedWorkId'] && !(typeof data['relatedWorkId'] === 'string' || data['relatedWorkId'] instanceof String)) {
            throw new Error("Expected the field `relatedWorkId` to be a primitive type in the JSON string but got " + data['relatedWorkId']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

VersionRelatedWork.RequiredProperties = ["category"];

/**
 * The category of the related work
 * @member {String} category
 */
VersionRelatedWork.prototype['category'] = undefined;

/**
 * The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.
 * @member {Number} issueId
 */
VersionRelatedWork.prototype['issueId'] = undefined;

/**
 * The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.
 * @member {String} relatedWorkId
 */
VersionRelatedWork.prototype['relatedWorkId'] = undefined;

/**
 * The title of the related work
 * @member {String} title
 */
VersionRelatedWork.prototype['title'] = undefined;

/**
 * The URL of the related work. Will be null for the native release note related work item, but is otherwise required.
 * @member {String} url
 */
VersionRelatedWork.prototype['url'] = undefined;






export default VersionRelatedWork;


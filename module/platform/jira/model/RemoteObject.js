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
import Icon from './Icon';
import Status from './Status';

/**
 * The RemoteObject model module.
 * @module model/RemoteObject
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class RemoteObject {
    /**
     * Constructs a new <code>RemoteObject</code>.
     * The linked item.
     * @alias module:model/RemoteObject
     * @extends Object
     * @param title {String} The title of the item.
     * @param url {String} The URL of the item.
     */
    constructor(title, url) { 
        
        RemoteObject.initialize(this, title, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, url) { 
        obj['title'] = title;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>RemoteObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteObject} obj Optional instance to populate.
     * @return {module:model/RemoteObject} The populated <code>RemoteObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteObject();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], Icon);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Status);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
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
     * Validates the JSON data with respect to <code>RemoteObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RemoteObject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RemoteObject.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
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

RemoteObject.RequiredProperties = ["title", "url"];

/**
 * Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
 * @member {module:model/Icon} icon
 */
RemoteObject.prototype['icon'] = undefined;

/**
 * The status of the item.
 * @member {module:model/Status} status
 */
RemoteObject.prototype['status'] = undefined;

/**
 * The summary details of the item.
 * @member {String} summary
 */
RemoteObject.prototype['summary'] = undefined;

/**
 * The title of the item.
 * @member {String} title
 */
RemoteObject.prototype['title'] = undefined;

/**
 * The URL of the item.
 * @member {String} url
 */
RemoteObject.prototype['url'] = undefined;






export default RemoteObject;


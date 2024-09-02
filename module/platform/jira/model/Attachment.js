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
import AttachmentAuthor from './AttachmentAuthor';

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Attachment {
    /**
     * Constructs a new <code>Attachment</code>.
     * Details about an attachment.
     * @alias module:model/Attachment
     * @extends Object
     */
    constructor() { 
        
        Attachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attachment();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('author')) {
                obj['author'] = AttachmentAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Attachment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Attachment</code>.
     */
    static validateJSON(data) {
        // validate the optional field `author`
        if (data['author']) { // data not null
          AttachmentAuthor.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['mimeType'] && !(typeof data['mimeType'] === 'string' || data['mimeType'] instanceof String)) {
            throw new Error("Expected the field `mimeType` to be a primitive type in the JSON string but got " + data['mimeType']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['thumbnail'] && !(typeof data['thumbnail'] === 'string' || data['thumbnail'] instanceof String)) {
            throw new Error("Expected the field `thumbnail` to be a primitive type in the JSON string but got " + data['thumbnail']);
        }

        return true;
    }


}



/**
 * @member {module:model/AttachmentAuthor} author
 */
Attachment.prototype['author'] = undefined;

/**
 * The content of the attachment.
 * @member {String} content
 */
Attachment.prototype['content'] = undefined;

/**
 * The datetime the attachment was created.
 * @member {Date} created
 */
Attachment.prototype['created'] = undefined;

/**
 * The file name of the attachment.
 * @member {String} filename
 */
Attachment.prototype['filename'] = undefined;

/**
 * The ID of the attachment.
 * @member {String} id
 */
Attachment.prototype['id'] = undefined;

/**
 * The MIME type of the attachment.
 * @member {String} mimeType
 */
Attachment.prototype['mimeType'] = undefined;

/**
 * The URL of the attachment details response.
 * @member {String} self
 */
Attachment.prototype['self'] = undefined;

/**
 * The size of the attachment.
 * @member {Number} size
 */
Attachment.prototype['size'] = undefined;

/**
 * The URL of a thumbnail representing the attachment.
 * @member {String} thumbnail
 */
Attachment.prototype['thumbnail'] = undefined;






export default Attachment;


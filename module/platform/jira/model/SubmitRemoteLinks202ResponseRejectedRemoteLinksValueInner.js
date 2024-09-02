/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner model module.
 * @module model/SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner
 * @version 1001.0.0
 */
class SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner {
    /**
     * Constructs a new <code>SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner</code>.
     * A message supplied in the case of an error.
     * @alias module:model/SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner
     * @param message {String} A human-readable message describing the error.
     */
    constructor(message) { 
        
        SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner} obj Optional instance to populate.
     * @return {module:model/SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner} The populated <code>SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errorTraceId')) {
                obj['errorTraceId'] = ApiClient.convertToType(data['errorTraceId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['errorTraceId'] && !(typeof data['errorTraceId'] === 'string' || data['errorTraceId'] instanceof String)) {
            throw new Error("Expected the field `errorTraceId` to be a primitive type in the JSON string but got " + data['errorTraceId']);
        }

        return true;
    }


}

SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.RequiredProperties = ["message"];

/**
 * A human-readable message describing the error.
 * @member {String} message
 */
SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.prototype['message'] = undefined;

/**
 * An optional trace ID that can be used by Jira developers to locate the source of the error.
 * @member {String} errorTraceId
 */
SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.prototype['errorTraceId'] = undefined;






export default SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner;


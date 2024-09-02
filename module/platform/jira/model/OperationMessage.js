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
 * The OperationMessage model module.
 * @module model/OperationMessage
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class OperationMessage {
    /**
     * Constructs a new <code>OperationMessage</code>.
     * @alias module:model/OperationMessage
     * @param message {String} The human-readable message that describes the result.
     * @param statusCode {Number} The status code of the response.
     */
    constructor(message, statusCode) { 
        
        OperationMessage.initialize(this, message, statusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, statusCode) { 
        obj['message'] = message;
        obj['statusCode'] = statusCode;
    }

    /**
     * Constructs a <code>OperationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationMessage} obj Optional instance to populate.
     * @return {module:model/OperationMessage} The populated <code>OperationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationMessage();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OperationMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationMessage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OperationMessage.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

OperationMessage.RequiredProperties = ["message", "statusCode"];

/**
 * The human-readable message that describes the result.
 * @member {String} message
 */
OperationMessage.prototype['message'] = undefined;

/**
 * The status code of the response.
 * @member {Number} statusCode
 */
OperationMessage.prototype['statusCode'] = undefined;






export default OperationMessage;


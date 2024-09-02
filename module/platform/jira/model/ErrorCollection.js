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
 * The ErrorCollection model module.
 * @module model/ErrorCollection
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ErrorCollection {
    /**
     * Constructs a new <code>ErrorCollection</code>.
     * Error messages from an operation.
     * @alias module:model/ErrorCollection
     */
    constructor() { 
        
        ErrorCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorCollection} obj Optional instance to populate.
     * @return {module:model/ErrorCollection} The populated <code>ErrorCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorCollection();

            if (data.hasOwnProperty('errorMessages')) {
                obj['errorMessages'] = ApiClient.convertToType(data['errorMessages'], ['String']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': 'String'});
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorCollection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorCollection</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['errorMessages'])) {
            throw new Error("Expected the field `errorMessages` to be an array in the JSON data but got " + data['errorMessages']);
        }

        return true;
    }


}



/**
 * The list of error messages produced by this operation. For example, \"input parameter 'key' must be provided\"
 * @member {Array.<String>} errorMessages
 */
ErrorCollection.prototype['errorMessages'] = undefined;

/**
 * The list of errors by parameter returned by the operation. For example,\"projectKey\": \"Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\"
 * @member {Object.<String, String>} errors
 */
ErrorCollection.prototype['errors'] = undefined;

/**
 * @member {Number} status
 */
ErrorCollection.prototype['status'] = undefined;






export default ErrorCollection;


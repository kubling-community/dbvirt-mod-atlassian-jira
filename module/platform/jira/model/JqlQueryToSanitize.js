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
 * The JqlQueryToSanitize model module.
 * @module model/JqlQueryToSanitize
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlQueryToSanitize {
    /**
     * Constructs a new <code>JqlQueryToSanitize</code>.
     * The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.
     * @alias module:model/JqlQueryToSanitize
     * @param query {String} The query to sanitize.
     */
    constructor(query) { 
        
        JqlQueryToSanitize.initialize(this, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query) { 
        obj['query'] = query;
    }

    /**
     * Constructs a <code>JqlQueryToSanitize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryToSanitize} obj Optional instance to populate.
     * @return {module:model/JqlQueryToSanitize} The populated <code>JqlQueryToSanitize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlQueryToSanitize();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlQueryToSanitize</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlQueryToSanitize</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JqlQueryToSanitize.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accountId'] && !(typeof data['accountId'] === 'string' || data['accountId'] instanceof String)) {
            throw new Error("Expected the field `accountId` to be a primitive type in the JSON string but got " + data['accountId']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}

JqlQueryToSanitize.RequiredProperties = ["query"];

/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */
JqlQueryToSanitize.prototype['accountId'] = undefined;

/**
 * The query to sanitize.
 * @member {String} query
 */
JqlQueryToSanitize.prototype['query'] = undefined;






export default JqlQueryToSanitize;


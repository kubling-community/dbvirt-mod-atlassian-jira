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
 * The GetConfiguration200ResponseSubQuery model module.
 * @module model/GetConfiguration200ResponseSubQuery
 * @version 1001.0.0
 */
class GetConfiguration200ResponseSubQuery {
    /**
     * Constructs a new <code>GetConfiguration200ResponseSubQuery</code>.
     * @alias module:model/GetConfiguration200ResponseSubQuery
     */
    constructor() { 
        
        GetConfiguration200ResponseSubQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetConfiguration200ResponseSubQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConfiguration200ResponseSubQuery} obj Optional instance to populate.
     * @return {module:model/GetConfiguration200ResponseSubQuery} The populated <code>GetConfiguration200ResponseSubQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetConfiguration200ResponseSubQuery();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetConfiguration200ResponseSubQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetConfiguration200ResponseSubQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}



/**
 * @member {String} query
 */
GetConfiguration200ResponseSubQuery.prototype['query'] = undefined;






export default GetConfiguration200ResponseSubQuery;


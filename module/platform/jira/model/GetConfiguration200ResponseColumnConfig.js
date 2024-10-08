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
import GetConfiguration200ResponseColumnConfigColumnsInner from './GetConfiguration200ResponseColumnConfigColumnsInner';

/**
 * The GetConfiguration200ResponseColumnConfig model module.
 * @module model/GetConfiguration200ResponseColumnConfig
 * @version 1001.0.0
 */
class GetConfiguration200ResponseColumnConfig {
    /**
     * Constructs a new <code>GetConfiguration200ResponseColumnConfig</code>.
     * @alias module:model/GetConfiguration200ResponseColumnConfig
     */
    constructor() { 
        
        GetConfiguration200ResponseColumnConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetConfiguration200ResponseColumnConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConfiguration200ResponseColumnConfig} obj Optional instance to populate.
     * @return {module:model/GetConfiguration200ResponseColumnConfig} The populated <code>GetConfiguration200ResponseColumnConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetConfiguration200ResponseColumnConfig();

            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [GetConfiguration200ResponseColumnConfigColumnsInner]);
            }
            if (data.hasOwnProperty('constraintType')) {
                obj['constraintType'] = ApiClient.convertToType(data['constraintType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetConfiguration200ResponseColumnConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetConfiguration200ResponseColumnConfig</code>.
     */
    static validateJSON(data) {
        if (data['columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['columns'])) {
                throw new Error("Expected the field `columns` to be an array in the JSON data but got " + data['columns']);
            }
            // validate the optional field `columns` (array)
            for (const item of data['columns']) {
                GetConfiguration200ResponseColumnConfigColumnsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['constraintType'] && !(typeof data['constraintType'] === 'string' || data['constraintType'] instanceof String)) {
            throw new Error("Expected the field `constraintType` to be a primitive type in the JSON string but got " + data['constraintType']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/GetConfiguration200ResponseColumnConfigColumnsInner>} columns
 */
GetConfiguration200ResponseColumnConfig.prototype['columns'] = undefined;

/**
 * @member {String} constraintType
 */
GetConfiguration200ResponseColumnConfig.prototype['constraintType'] = undefined;






export default GetConfiguration200ResponseColumnConfig;


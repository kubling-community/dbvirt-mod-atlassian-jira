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
 * The ConnectModules model module.
 * @module model/ConnectModules
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ConnectModules {
    /**
     * Constructs a new <code>ConnectModules</code>.
     * @alias module:model/ConnectModules
     * @param modules {Array.<Object>} A list of app modules in the same format as the `modules` property in the [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
     */
    constructor(modules) { 
        
        ConnectModules.initialize(this, modules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modules) { 
        obj['modules'] = modules;
    }

    /**
     * Constructs a <code>ConnectModules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectModules} obj Optional instance to populate.
     * @return {module:model/ConnectModules} The populated <code>ConnectModules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectModules();

            if (data.hasOwnProperty('modules')) {
                obj['modules'] = ApiClient.convertToType(data['modules'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConnectModules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConnectModules</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConnectModules.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['modules'])) {
            throw new Error("Expected the field `modules` to be an array in the JSON data but got " + data['modules']);
        }

        return true;
    }


}

ConnectModules.RequiredProperties = ["modules"];

/**
 * A list of app modules in the same format as the `modules` property in the [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
 * @member {Array.<Object>} modules
 */
ConnectModules.prototype['modules'] = undefined;






export default ConnectModules;


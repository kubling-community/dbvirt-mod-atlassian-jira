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
import JiraExpressionAnalysis from './JiraExpressionAnalysis';

/**
 * The JiraExpressionsAnalysis model module.
 * @module model/JiraExpressionsAnalysis
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraExpressionsAnalysis {
    /**
     * Constructs a new <code>JiraExpressionsAnalysis</code>.
     * Details about the analysed Jira expression.
     * @alias module:model/JiraExpressionsAnalysis
     * @param results {Array.<module:model/JiraExpressionAnalysis>} The results of Jira expressions analysis.
     */
    constructor(results) { 
        
        JiraExpressionsAnalysis.initialize(this, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, results) { 
        obj['results'] = results;
    }

    /**
     * Constructs a <code>JiraExpressionsAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionsAnalysis} obj Optional instance to populate.
     * @return {module:model/JiraExpressionsAnalysis} The populated <code>JiraExpressionsAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraExpressionsAnalysis();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [JiraExpressionAnalysis]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraExpressionsAnalysis</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraExpressionsAnalysis</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JiraExpressionsAnalysis.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                JiraExpressionAnalysis.validateJSON(item);
            };
        }

        return true;
    }


}

JiraExpressionsAnalysis.RequiredProperties = ["results"];

/**
 * The results of Jira expressions analysis.
 * @member {Array.<module:model/JiraExpressionAnalysis>} results
 */
JiraExpressionsAnalysis.prototype['results'] = undefined;






export default JiraExpressionsAnalysis;


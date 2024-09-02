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
 * The KeywordOperand model module.
 * @module model/KeywordOperand
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class KeywordOperand {
    /**
     * Constructs a new <code>KeywordOperand</code>.
     * An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
     * @alias module:model/KeywordOperand
     * @param keyword {module:model/KeywordOperand.KeywordEnum} The keyword that is the operand value.
     */
    constructor(keyword) { 
        
        KeywordOperand.initialize(this, keyword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyword) { 
        obj['keyword'] = keyword;
    }

    /**
     * Constructs a <code>KeywordOperand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeywordOperand} obj Optional instance to populate.
     * @return {module:model/KeywordOperand} The populated <code>KeywordOperand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeywordOperand();

            if (data.hasOwnProperty('keyword')) {
                obj['keyword'] = ApiClient.convertToType(data['keyword'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeywordOperand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeywordOperand</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of KeywordOperand.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['keyword'] && !(typeof data['keyword'] === 'string' || data['keyword'] instanceof String)) {
            throw new Error("Expected the field `keyword` to be a primitive type in the JSON string but got " + data['keyword']);
        }

        return true;
    }


}

KeywordOperand.RequiredProperties = ["keyword"];

/**
 * The keyword that is the operand value.
 * @member {module:model/KeywordOperand.KeywordEnum} keyword
 */
KeywordOperand.prototype['keyword'] = undefined;





/**
 * Allowed values for the <code>keyword</code> property.
 * @enum {String}
 * @readonly
 */
KeywordOperand['KeywordEnum'] = {

    /**
     * value: "empty"
     * @const
     */
    "empty": "empty"
};



export default KeywordOperand;


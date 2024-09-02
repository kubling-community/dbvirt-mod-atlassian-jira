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
import JqlQueryField from './JqlQueryField';

/**
 * The JqlQueryOrderByClauseElement model module.
 * @module model/JqlQueryOrderByClauseElement
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlQueryOrderByClauseElement {
    /**
     * Constructs a new <code>JqlQueryOrderByClauseElement</code>.
     * An element of the order-by JQL clause.
     * @alias module:model/JqlQueryOrderByClauseElement
     * @param field {module:model/JqlQueryField} 
     */
    constructor(field) { 
        
        JqlQueryOrderByClauseElement.initialize(this, field);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, field) { 
        obj['field'] = field;
    }

    /**
     * Constructs a <code>JqlQueryOrderByClauseElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryOrderByClauseElement} obj Optional instance to populate.
     * @return {module:model/JqlQueryOrderByClauseElement} The populated <code>JqlQueryOrderByClauseElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlQueryOrderByClauseElement();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = JqlQueryField.constructFromObject(data['field']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlQueryOrderByClauseElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlQueryOrderByClauseElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of JqlQueryOrderByClauseElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // validate the optional field `field`
        if (data['field']) { // data not null
          JqlQueryField.validateJSON(data['field']);
        }

        return true;
    }


}

JqlQueryOrderByClauseElement.RequiredProperties = ["field"];

/**
 * The direction in which to order the results.
 * @member {module:model/JqlQueryOrderByClauseElement.DirectionEnum} direction
 */
JqlQueryOrderByClauseElement.prototype['direction'] = undefined;

/**
 * @member {module:model/JqlQueryField} field
 */
JqlQueryOrderByClauseElement.prototype['field'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
JqlQueryOrderByClauseElement['DirectionEnum'] = {

    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",

    /**
     * value: "desc"
     * @const
     */
    "desc": "desc"
};



export default JqlQueryOrderByClauseElement;


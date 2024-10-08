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
 * The OrderOfCustomFieldOptions model module.
 * @module model/OrderOfCustomFieldOptions
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class OrderOfCustomFieldOptions {
    /**
     * Constructs a new <code>OrderOfCustomFieldOptions</code>.
     * An ordered list of custom field option IDs and information on where to move them.
     * @alias module:model/OrderOfCustomFieldOptions
     * @param customFieldOptionIds {Array.<String>} A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
     */
    constructor(customFieldOptionIds) { 
        
        OrderOfCustomFieldOptions.initialize(this, customFieldOptionIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customFieldOptionIds) { 
        obj['customFieldOptionIds'] = customFieldOptionIds;
    }

    /**
     * Constructs a <code>OrderOfCustomFieldOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderOfCustomFieldOptions} obj Optional instance to populate.
     * @return {module:model/OrderOfCustomFieldOptions} The populated <code>OrderOfCustomFieldOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderOfCustomFieldOptions();

            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('customFieldOptionIds')) {
                obj['customFieldOptionIds'] = ApiClient.convertToType(data['customFieldOptionIds'], ['String']);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderOfCustomFieldOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderOfCustomFieldOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderOfCustomFieldOptions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['after'] && !(typeof data['after'] === 'string' || data['after'] instanceof String)) {
            throw new Error("Expected the field `after` to be a primitive type in the JSON string but got " + data['after']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['customFieldOptionIds'])) {
            throw new Error("Expected the field `customFieldOptionIds` to be an array in the JSON data but got " + data['customFieldOptionIds']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }

        return true;
    }


}

OrderOfCustomFieldOptions.RequiredProperties = ["customFieldOptionIds"];

/**
 * The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.
 * @member {String} after
 */
OrderOfCustomFieldOptions.prototype['after'] = undefined;

/**
 * A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
 * @member {Array.<String>} customFieldOptionIds
 */
OrderOfCustomFieldOptions.prototype['customFieldOptionIds'] = undefined;

/**
 * The position the custom field options should be moved to. Required if `after` isn't provided.
 * @member {module:model/OrderOfCustomFieldOptions.PositionEnum} position
 */
OrderOfCustomFieldOptions.prototype['position'] = undefined;





/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */
OrderOfCustomFieldOptions['PositionEnum'] = {

    /**
     * value: "First"
     * @const
     */
    "First": "First",

    /**
     * value: "Last"
     * @const
     */
    "Last": "Last"
};



export default OrderOfCustomFieldOptions;


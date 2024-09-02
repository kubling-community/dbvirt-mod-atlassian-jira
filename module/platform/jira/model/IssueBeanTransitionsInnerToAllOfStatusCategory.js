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
 * The IssueBeanTransitionsInnerToAllOfStatusCategory model module.
 * @module model/IssueBeanTransitionsInnerToAllOfStatusCategory
 * @version 1001.0.0
 */
class IssueBeanTransitionsInnerToAllOfStatusCategory {
    /**
     * Constructs a new <code>IssueBeanTransitionsInnerToAllOfStatusCategory</code>.
     * The category assigned to the status.
     * @alias module:model/IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    constructor() { 
        
        IssueBeanTransitionsInnerToAllOfStatusCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueBeanTransitionsInnerToAllOfStatusCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBeanTransitionsInnerToAllOfStatusCategory} obj Optional instance to populate.
     * @return {module:model/IssueBeanTransitionsInnerToAllOfStatusCategory} The populated <code>IssueBeanTransitionsInnerToAllOfStatusCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueBeanTransitionsInnerToAllOfStatusCategory();

            if (data.hasOwnProperty('colorName')) {
                obj['colorName'] = ApiClient.convertToType(data['colorName'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueBeanTransitionsInnerToAllOfStatusCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueBeanTransitionsInnerToAllOfStatusCategory</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['colorName'] && !(typeof data['colorName'] === 'string' || data['colorName'] instanceof String)) {
            throw new Error("Expected the field `colorName` to be a primitive type in the JSON string but got " + data['colorName']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }

        return true;
    }


}



/**
 * The name of the color used to represent the status category.
 * @member {String} colorName
 */
IssueBeanTransitionsInnerToAllOfStatusCategory.prototype['colorName'] = undefined;

/**
 * The ID of the status category.
 * @member {Number} id
 */
IssueBeanTransitionsInnerToAllOfStatusCategory.prototype['id'] = undefined;

/**
 * The key of the status category.
 * @member {String} key
 */
IssueBeanTransitionsInnerToAllOfStatusCategory.prototype['key'] = undefined;

/**
 * The name of the status category.
 * @member {String} name
 */
IssueBeanTransitionsInnerToAllOfStatusCategory.prototype['name'] = undefined;

/**
 * The URL of the status category.
 * @member {String} self
 */
IssueBeanTransitionsInnerToAllOfStatusCategory.prototype['self'] = undefined;






export default IssueBeanTransitionsInnerToAllOfStatusCategory;


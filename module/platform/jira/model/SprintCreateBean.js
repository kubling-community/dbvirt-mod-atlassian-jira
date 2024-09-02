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
 * The SprintCreateBean model module.
 * @module model/SprintCreateBean
 * @version 1001.0.0
 */
class SprintCreateBean {
    /**
     * Constructs a new <code>SprintCreateBean</code>.
     * @alias module:model/SprintCreateBean
     */
    constructor() { 
        
        SprintCreateBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SprintCreateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SprintCreateBean} obj Optional instance to populate.
     * @return {module:model/SprintCreateBean} The populated <code>SprintCreateBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SprintCreateBean();

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('goal')) {
                obj['goal'] = ApiClient.convertToType(data['goal'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('originBoardId')) {
                obj['originBoardId'] = ApiClient.convertToType(data['originBoardId'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SprintCreateBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SprintCreateBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['endDate'] && !(typeof data['endDate'] === 'string' || data['endDate'] instanceof String)) {
            throw new Error("Expected the field `endDate` to be a primitive type in the JSON string but got " + data['endDate']);
        }
        // ensure the json data is a string
        if (data['goal'] && !(typeof data['goal'] === 'string' || data['goal'] instanceof String)) {
            throw new Error("Expected the field `goal` to be a primitive type in the JSON string but got " + data['goal']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['startDate'] && !(typeof data['startDate'] === 'string' || data['startDate'] instanceof String)) {
            throw new Error("Expected the field `startDate` to be a primitive type in the JSON string but got " + data['startDate']);
        }

        return true;
    }


}



/**
 * @member {String} endDate
 */
SprintCreateBean.prototype['endDate'] = undefined;

/**
 * @member {String} goal
 */
SprintCreateBean.prototype['goal'] = undefined;

/**
 * @member {String} name
 */
SprintCreateBean.prototype['name'] = undefined;

/**
 * @member {Number} originBoardId
 */
SprintCreateBean.prototype['originBoardId'] = undefined;

/**
 * @member {String} startDate
 */
SprintCreateBean.prototype['startDate'] = undefined;






export default SprintCreateBean;


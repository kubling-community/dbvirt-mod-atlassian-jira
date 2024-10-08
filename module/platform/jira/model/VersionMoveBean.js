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
 * The VersionMoveBean model module.
 * @module model/VersionMoveBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class VersionMoveBean {
    /**
     * Constructs a new <code>VersionMoveBean</code>.
     * @alias module:model/VersionMoveBean
     */
    constructor() { 
        
        VersionMoveBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionMoveBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionMoveBean} obj Optional instance to populate.
     * @return {module:model/VersionMoveBean} The populated <code>VersionMoveBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionMoveBean();

            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionMoveBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionMoveBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['after'] && !(typeof data['after'] === 'string' || data['after'] instanceof String)) {
            throw new Error("Expected the field `after` to be a primitive type in the JSON string but got " + data['after']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }

        return true;
    }


}



/**
 * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
 * @member {String} after
 */
VersionMoveBean.prototype['after'] = undefined;

/**
 * An absolute position in which to place the moved version. Cannot be used with `after`.
 * @member {module:model/VersionMoveBean.PositionEnum} position
 */
VersionMoveBean.prototype['position'] = undefined;





/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */
VersionMoveBean['PositionEnum'] = {

    /**
     * value: "Earlier"
     * @const
     */
    "Earlier": "Earlier",

    /**
     * value: "Later"
     * @const
     */
    "Later": "Later",

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



export default VersionMoveBean;


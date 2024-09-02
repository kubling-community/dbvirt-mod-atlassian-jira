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
 * The RankingConfigBean model module.
 * @module model/RankingConfigBean
 * @version 1001.0.0
 */
class RankingConfigBean {
    /**
     * Constructs a new <code>RankingConfigBean</code>.
     * @alias module:model/RankingConfigBean
     */
    constructor() { 
        
        RankingConfigBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RankingConfigBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RankingConfigBean} obj Optional instance to populate.
     * @return {module:model/RankingConfigBean} The populated <code>RankingConfigBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RankingConfigBean();

            if (data.hasOwnProperty('rankCustomFieldId')) {
                obj['rankCustomFieldId'] = ApiClient.convertToType(data['rankCustomFieldId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RankingConfigBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RankingConfigBean</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} rankCustomFieldId
 */
RankingConfigBean.prototype['rankCustomFieldId'] = undefined;






export default RankingConfigBean;


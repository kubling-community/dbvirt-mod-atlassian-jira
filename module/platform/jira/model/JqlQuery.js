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
import JqlQueryClause from './JqlQueryClause';
import JqlQueryOrderByClause from './JqlQueryOrderByClause';

/**
 * The JqlQuery model module.
 * @module model/JqlQuery
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JqlQuery {
    /**
     * Constructs a new <code>JqlQuery</code>.
     * A parsed JQL query.
     * @alias module:model/JqlQuery
     */
    constructor() { 
        
        JqlQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQuery} obj Optional instance to populate.
     * @return {module:model/JqlQuery} The populated <code>JqlQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JqlQuery();

            if (data.hasOwnProperty('orderBy')) {
                obj['orderBy'] = JqlQueryOrderByClause.constructFromObject(data['orderBy']);
            }
            if (data.hasOwnProperty('where')) {
                obj['where'] = JqlQueryClause.constructFromObject(data['where']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JqlQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JqlQuery</code>.
     */
    static validateJSON(data) {
        // validate the optional field `orderBy`
        if (data['orderBy']) { // data not null
          JqlQueryOrderByClause.validateJSON(data['orderBy']);
        }
        // validate the optional field `where`
        if (data['where']) { // data not null
          JqlQueryClause.validateJSON(data['where']);
        }

        return true;
    }


}



/**
 * @member {module:model/JqlQueryOrderByClause} orderBy
 */
JqlQuery.prototype['orderBy'] = undefined;

/**
 * @member {module:model/JqlQueryClause} where
 */
JqlQuery.prototype['where'] = undefined;






export default JqlQuery;


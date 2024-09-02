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
import IssuesMetaBean from './IssuesMetaBean';
import JiraExpressionsComplexityBean from './JiraExpressionsComplexityBean';

/**
 * The JiraExpressionEvaluationMetaDataBean model module.
 * @module model/JiraExpressionEvaluationMetaDataBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraExpressionEvaluationMetaDataBean {
    /**
     * Constructs a new <code>JiraExpressionEvaluationMetaDataBean</code>.
     * @alias module:model/JiraExpressionEvaluationMetaDataBean
     */
    constructor() { 
        
        JiraExpressionEvaluationMetaDataBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JiraExpressionEvaluationMetaDataBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionEvaluationMetaDataBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionEvaluationMetaDataBean} The populated <code>JiraExpressionEvaluationMetaDataBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraExpressionEvaluationMetaDataBean();

            if (data.hasOwnProperty('complexity')) {
                obj['complexity'] = ApiClient.convertToType(data['complexity'], JiraExpressionsComplexityBean);
            }
            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], IssuesMetaBean);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraExpressionEvaluationMetaDataBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraExpressionEvaluationMetaDataBean</code>.
     */
    static validateJSON(data) {
        // validate the optional field `complexity`
        if (data['complexity']) { // data not null
          JiraExpressionsComplexityBean.validateJSON(data['complexity']);
        }
        // validate the optional field `issues`
        if (data['issues']) { // data not null
          IssuesMetaBean.validateJSON(data['issues']);
        }

        return true;
    }


}



/**
 * Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
 * @member {module:model/JiraExpressionsComplexityBean} complexity
 */
JiraExpressionEvaluationMetaDataBean.prototype['complexity'] = undefined;

/**
 * Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
 * @member {module:model/IssuesMetaBean} issues
 */
JiraExpressionEvaluationMetaDataBean.prototype['issues'] = undefined;






export default JiraExpressionEvaluationMetaDataBean;


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
import CustomContextVariable from './CustomContextVariable';
import IdOrKeyBean from './IdOrKeyBean';
import JexpIssues from './JexpIssues';

/**
 * The JiraExpressionEvalContextBean model module.
 * @module model/JiraExpressionEvalContextBean
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class JiraExpressionEvalContextBean {
    /**
     * Constructs a new <code>JiraExpressionEvalContextBean</code>.
     * @alias module:model/JiraExpressionEvalContextBean
     */
    constructor() { 
        
        JiraExpressionEvalContextBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JiraExpressionEvalContextBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionEvalContextBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionEvalContextBean} The populated <code>JiraExpressionEvalContextBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JiraExpressionEvalContextBean();

            if (data.hasOwnProperty('board')) {
                obj['board'] = ApiClient.convertToType(data['board'], 'Number');
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], [CustomContextVariable]);
            }
            if (data.hasOwnProperty('customerRequest')) {
                obj['customerRequest'] = ApiClient.convertToType(data['customerRequest'], 'Number');
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = ApiClient.convertToType(data['issue'], IdOrKeyBean);
            }
            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], JexpIssues);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], IdOrKeyBean);
            }
            if (data.hasOwnProperty('serviceDesk')) {
                obj['serviceDesk'] = ApiClient.convertToType(data['serviceDesk'], 'Number');
            }
            if (data.hasOwnProperty('sprint')) {
                obj['sprint'] = ApiClient.convertToType(data['sprint'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JiraExpressionEvalContextBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JiraExpressionEvalContextBean</code>.
     */
    static validateJSON(data) {
        if (data['custom']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom'])) {
                throw new Error("Expected the field `custom` to be an array in the JSON data but got " + data['custom']);
            }
            // validate the optional field `custom` (array)
            for (const item of data['custom']) {
                CustomContextVariable.validateJSON(item);
            };
        }
        // validate the optional field `issue`
        if (data['issue']) { // data not null
          IdOrKeyBean.validateJSON(data['issue']);
        }
        // validate the optional field `issues`
        if (data['issues']) { // data not null
          JexpIssues.validateJSON(data['issues']);
        }
        // validate the optional field `project`
        if (data['project']) { // data not null
          IdOrKeyBean.validateJSON(data['project']);
        }

        return true;
    }


}



/**
 * The ID of the board that is available under the `board` variable when evaluating the expression.
 * @member {Number} board
 */
JiraExpressionEvalContextBean.prototype['board'] = undefined;

/**
 * Custom context variables and their types. These variable types are available for use in a custom context:   *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.  *  `json`: A JSON object containing custom content.  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.
 * @member {Array.<module:model/CustomContextVariable>} custom
 */
JiraExpressionEvalContextBean.prototype['custom'] = undefined;

/**
 * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
 * @member {Number} customerRequest
 */
JiraExpressionEvalContextBean.prototype['customerRequest'] = undefined;

/**
 * The issue that is available under the `issue` variable when evaluating the expression.
 * @member {module:model/IdOrKeyBean} issue
 */
JiraExpressionEvalContextBean.prototype['issue'] = undefined;

/**
 * The collection of issues that is available under the `issues` variable when evaluating the expression.
 * @member {module:model/JexpIssues} issues
 */
JiraExpressionEvalContextBean.prototype['issues'] = undefined;

/**
 * The project that is available under the `project` variable when evaluating the expression.
 * @member {module:model/IdOrKeyBean} project
 */
JiraExpressionEvalContextBean.prototype['project'] = undefined;

/**
 * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
 * @member {Number} serviceDesk
 */
JiraExpressionEvalContextBean.prototype['serviceDesk'] = undefined;

/**
 * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
 * @member {Number} sprint
 */
JiraExpressionEvalContextBean.prototype['sprint'] = undefined;






export default JiraExpressionEvalContextBean;


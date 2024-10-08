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
import Fields from './Fields';
import FieldsAssignee from './FieldsAssignee';
import FieldsIssueType from './FieldsIssueType';
import FieldsPriority from './FieldsPriority';
import FieldsStatus from './FieldsStatus';
import FieldsTimetracking from './FieldsTimetracking';
import IssueTypeDetails from './IssueTypeDetails';

/**
 * The LinkedIssueFields model module.
 * @module model/LinkedIssueFields
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class LinkedIssueFields {
    /**
     * Constructs a new <code>LinkedIssueFields</code>.
     * The fields associated with the issue.
     * @alias module:model/LinkedIssueFields
     * @implements module:model/Fields
     */
    constructor() { 
        Fields.initialize(this, type, value);
        LinkedIssueFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedIssueFields} obj Optional instance to populate.
     * @return {module:model/LinkedIssueFields} The populated <code>LinkedIssueFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedIssueFields();
            Fields.constructFromObject(data, obj);

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = FieldsAssignee.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('issueType')) {
                obj['issueType'] = FieldsIssueType.constructFromObject(data['issueType']);
            }
            if (data.hasOwnProperty('issuetype')) {
                obj['issuetype'] = IssueTypeDetails.constructFromObject(data['issuetype']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = FieldsPriority.constructFromObject(data['priority']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = FieldsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('timetracking')) {
                obj['timetracking'] = FieldsTimetracking.constructFromObject(data['timetracking']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkedIssueFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkedIssueFields</code>.
     */
    static validateJSON(data) {
        // validate the optional field `assignee`
        if (data['assignee']) { // data not null
          FieldsAssignee.validateJSON(data['assignee']);
        }
        // validate the optional field `issueType`
        if (data['issueType']) { // data not null
          FieldsIssueType.validateJSON(data['issueType']);
        }
        // validate the optional field `issuetype`
        if (data['issuetype']) { // data not null
          IssueTypeDetails.validateJSON(data['issuetype']);
        }
        // validate the optional field `priority`
        if (data['priority']) { // data not null
          FieldsPriority.validateJSON(data['priority']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          FieldsStatus.validateJSON(data['status']);
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // validate the optional field `timetracking`
        if (data['timetracking']) { // data not null
          FieldsTimetracking.validateJSON(data['timetracking']);
        }

        return true;
    }


}



/**
 * @member {module:model/FieldsAssignee} assignee
 */
LinkedIssueFields.prototype['assignee'] = undefined;

/**
 * @member {module:model/FieldsIssueType} issueType
 */
LinkedIssueFields.prototype['issueType'] = undefined;

/**
 * @member {module:model/IssueTypeDetails} issuetype
 */
LinkedIssueFields.prototype['issuetype'] = undefined;

/**
 * @member {module:model/FieldsPriority} priority
 */
LinkedIssueFields.prototype['priority'] = undefined;

/**
 * @member {module:model/FieldsStatus} status
 */
LinkedIssueFields.prototype['status'] = undefined;

/**
 * The summary description of the linked issue.
 * @member {String} summary
 */
LinkedIssueFields.prototype['summary'] = undefined;

/**
 * @member {module:model/FieldsTimetracking} timetracking
 */
LinkedIssueFields.prototype['timetracking'] = undefined;


// Implement Fields interface:
/**
 * If `true`, will try to retain original non-null issue field values on move.
 * @member {Boolean} retain
 * @default true
 */
Fields.prototype['retain'] = true;
/**
 * Will treat as `MandatoryFieldValue` if type is `raw` or `empty`
 * @member {module:model/Fields.TypeEnum} type
 * @default 'raw'
 */
Fields.prototype['type'] = 'raw';
/**
 * Value for each field. Accepts Atlassian Document Format (ADF) for rich text fields like `description`, `environments`. For ADF format details, refer to: [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure)
 * @member {Object} value
 */
Fields.prototype['value'] = undefined;




export default LinkedIssueFields;


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
import ConfigurationTimeTrackingConfiguration from './ConfigurationTimeTrackingConfiguration';

/**
 * The Configuration model module.
 * @module model/Configuration
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class Configuration {
    /**
     * Constructs a new <code>Configuration</code>.
     * Details about the configuration of Jira.
     * @alias module:model/Configuration
     */
    constructor() { 
        
        Configuration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Configuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Configuration} obj Optional instance to populate.
     * @return {module:model/Configuration} The populated <code>Configuration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Configuration();

            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('issueLinkingEnabled')) {
                obj['issueLinkingEnabled'] = ApiClient.convertToType(data['issueLinkingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('subTasksEnabled')) {
                obj['subTasksEnabled'] = ApiClient.convertToType(data['subTasksEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('timeTrackingConfiguration')) {
                obj['timeTrackingConfiguration'] = ConfigurationTimeTrackingConfiguration.constructFromObject(data['timeTrackingConfiguration']);
            }
            if (data.hasOwnProperty('timeTrackingEnabled')) {
                obj['timeTrackingEnabled'] = ApiClient.convertToType(data['timeTrackingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('unassignedIssuesAllowed')) {
                obj['unassignedIssuesAllowed'] = ApiClient.convertToType(data['unassignedIssuesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('votingEnabled')) {
                obj['votingEnabled'] = ApiClient.convertToType(data['votingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('watchingEnabled')) {
                obj['watchingEnabled'] = ApiClient.convertToType(data['watchingEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Configuration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Configuration</code>.
     */
    static validateJSON(data) {
        // validate the optional field `timeTrackingConfiguration`
        if (data['timeTrackingConfiguration']) { // data not null
          ConfigurationTimeTrackingConfiguration.validateJSON(data['timeTrackingConfiguration']);
        }

        return true;
    }


}



/**
 * Whether the ability to add attachments to issues is enabled.
 * @member {Boolean} attachmentsEnabled
 */
Configuration.prototype['attachmentsEnabled'] = undefined;

/**
 * Whether the ability to link issues is enabled.
 * @member {Boolean} issueLinkingEnabled
 */
Configuration.prototype['issueLinkingEnabled'] = undefined;

/**
 * Whether the ability to create subtasks for issues is enabled.
 * @member {Boolean} subTasksEnabled
 */
Configuration.prototype['subTasksEnabled'] = undefined;

/**
 * @member {module:model/ConfigurationTimeTrackingConfiguration} timeTrackingConfiguration
 */
Configuration.prototype['timeTrackingConfiguration'] = undefined;

/**
 * Whether the ability to track time is enabled. This property is deprecated.
 * @member {Boolean} timeTrackingEnabled
 */
Configuration.prototype['timeTrackingEnabled'] = undefined;

/**
 * Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} unassignedIssuesAllowed
 */
Configuration.prototype['unassignedIssuesAllowed'] = undefined;

/**
 * Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} votingEnabled
 */
Configuration.prototype['votingEnabled'] = undefined;

/**
 * Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} watchingEnabled
 */
Configuration.prototype['watchingEnabled'] = undefined;






export default Configuration;


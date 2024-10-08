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
import BuildReferences from './BuildReferences';
import TestInfo from './TestInfo';

/**
 * The BuildData model module.
 * @module model/BuildData
 * @version 1001.0.0
 */
class BuildData {
    /**
     * Constructs a new <code>BuildData</code>.
     * Data related to a single build 
     * @alias module:model/BuildData
     * @param pipelineId {String} An ID that relates a sequence of builds. Depending on your use case this might be a project ID, pipeline ID, plan key etc. - whatever logical unit you use to group a sequence of builds.  The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided. 
     * @param buildNumber {Number} Identifies a build within the sequence of builds identified by the build `pipelineId`.  Used to identify the 'most recent' build in that sequence of builds.  The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided. 
     * @param updateSequenceNumber {Number} A number used to apply an order to the updates to the build, as identified by `pipelineId` and `buildNumber`, in the case of out-of-order receipt of update requests.  It must be a monotonically increasing number. For example, epoch time could be one way to generate the `updateSequenceNumber`.  Updates for a build that is received with an `updateSqeuenceNumber` less than or equal to what is currently stored will be ignored. 
     * @param displayName {String} The human-readable name for the build.  Will be shown in the UI. 
     * @param url {String} The URL to this build in your system. 
     * @param state {module:model/BuildData.StateEnum} The state of a build.  * `pending` - The build is queued, or some manual action is required. * `in_progress` - The build is currently running. * `successful` - The build completed successfully. * `failed` - The build failed. * `cancelled` - The build has been cancelled or stopped. * `unknown` - The build is in an unknown state. 
     * @param lastUpdated {Date} The last-updated timestamp to present to the user as a summary of the state of the build. 
     * @param issueKeys {Array.<String>} The Jira issue keys to associate the build information with.  You are free to associate issue keys in any way you like. However, we recommend that you use the name of the branch the build was executed on, and extract issue keys from that name using a simple regex. This has the advantage that it provides an intuitive association of builds to issue keys. 
     */
    constructor(pipelineId, buildNumber, updateSequenceNumber, displayName, url, state, lastUpdated, issueKeys) { 
        
        BuildData.initialize(this, pipelineId, buildNumber, updateSequenceNumber, displayName, url, state, lastUpdated, issueKeys);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pipelineId, buildNumber, updateSequenceNumber, displayName, url, state, lastUpdated, issueKeys) { 
        obj['pipelineId'] = pipelineId;
        obj['buildNumber'] = buildNumber;
        obj['updateSequenceNumber'] = updateSequenceNumber;
        obj['displayName'] = displayName;
        obj['url'] = url;
        obj['state'] = state;
        obj['lastUpdated'] = lastUpdated;
        obj['issueKeys'] = issueKeys;
    }

    /**
     * Constructs a <code>BuildData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuildData} obj Optional instance to populate.
     * @return {module:model/BuildData} The populated <code>BuildData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BuildData();

            if (data.hasOwnProperty('schemaVersion')) {
                obj['schemaVersion'] = ApiClient.convertToType(data['schemaVersion'], 'String');
            }
            if (data.hasOwnProperty('pipelineId')) {
                obj['pipelineId'] = ApiClient.convertToType(data['pipelineId'], 'String');
            }
            if (data.hasOwnProperty('buildNumber')) {
                obj['buildNumber'] = ApiClient.convertToType(data['buildNumber'], 'Number');
            }
            if (data.hasOwnProperty('updateSequenceNumber')) {
                obj['updateSequenceNumber'] = ApiClient.convertToType(data['updateSequenceNumber'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('issueKeys')) {
                obj['issueKeys'] = ApiClient.convertToType(data['issueKeys'], ['String']);
            }
            if (data.hasOwnProperty('testInfo')) {
                obj['testInfo'] = TestInfo.constructFromObject(data['testInfo']);
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], [BuildReferences]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BuildData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BuildData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BuildData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['schemaVersion'] && !(typeof data['schemaVersion'] === 'string' || data['schemaVersion'] instanceof String)) {
            throw new Error("Expected the field `schemaVersion` to be a primitive type in the JSON string but got " + data['schemaVersion']);
        }
        // ensure the json data is a string
        if (data['pipelineId'] && !(typeof data['pipelineId'] === 'string' || data['pipelineId'] instanceof String)) {
            throw new Error("Expected the field `pipelineId` to be a primitive type in the JSON string but got " + data['pipelineId']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['issueKeys'])) {
            throw new Error("Expected the field `issueKeys` to be an array in the JSON data but got " + data['issueKeys']);
        }
        // validate the optional field `testInfo`
        if (data['testInfo']) { // data not null
          TestInfo.validateJSON(data['testInfo']);
        }
        if (data['references']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['references'])) {
                throw new Error("Expected the field `references` to be an array in the JSON data but got " + data['references']);
            }
            // validate the optional field `references` (array)
            for (const item of data['references']) {
                BuildReferences.validateJSON(item);
            };
        }

        return true;
    }


}

BuildData.RequiredProperties = ["pipelineId", "buildNumber", "updateSequenceNumber", "displayName", "url", "state", "lastUpdated", "issueKeys"];

/**
 * The schema version used for this data.  Placeholder to support potential schema changes in the future. 
 * @member {module:model/BuildData.SchemaVersionEnum} schemaVersion
 * @default '1.0'
 */
BuildData.prototype['schemaVersion'] = '1.0';

/**
 * An ID that relates a sequence of builds. Depending on your use case this might be a project ID, pipeline ID, plan key etc. - whatever logical unit you use to group a sequence of builds.  The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided. 
 * @member {String} pipelineId
 */
BuildData.prototype['pipelineId'] = undefined;

/**
 * Identifies a build within the sequence of builds identified by the build `pipelineId`.  Used to identify the 'most recent' build in that sequence of builds.  The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided. 
 * @member {Number} buildNumber
 */
BuildData.prototype['buildNumber'] = undefined;

/**
 * A number used to apply an order to the updates to the build, as identified by `pipelineId` and `buildNumber`, in the case of out-of-order receipt of update requests.  It must be a monotonically increasing number. For example, epoch time could be one way to generate the `updateSequenceNumber`.  Updates for a build that is received with an `updateSqeuenceNumber` less than or equal to what is currently stored will be ignored. 
 * @member {Number} updateSequenceNumber
 */
BuildData.prototype['updateSequenceNumber'] = undefined;

/**
 * The human-readable name for the build.  Will be shown in the UI. 
 * @member {String} displayName
 */
BuildData.prototype['displayName'] = undefined;

/**
 * An optional description to attach to this build.  This may be anything that makes sense in your system. 
 * @member {String} description
 */
BuildData.prototype['description'] = undefined;

/**
 * A human-readable string that to provide information about the build. 
 * @member {String} label
 */
BuildData.prototype['label'] = undefined;

/**
 * The URL to this build in your system. 
 * @member {String} url
 */
BuildData.prototype['url'] = undefined;

/**
 * The state of a build.  * `pending` - The build is queued, or some manual action is required. * `in_progress` - The build is currently running. * `successful` - The build completed successfully. * `failed` - The build failed. * `cancelled` - The build has been cancelled or stopped. * `unknown` - The build is in an unknown state. 
 * @member {module:model/BuildData.StateEnum} state
 */
BuildData.prototype['state'] = undefined;

/**
 * The last-updated timestamp to present to the user as a summary of the state of the build. 
 * @member {Date} lastUpdated
 */
BuildData.prototype['lastUpdated'] = undefined;

/**
 * The Jira issue keys to associate the build information with.  You are free to associate issue keys in any way you like. However, we recommend that you use the name of the branch the build was executed on, and extract issue keys from that name using a simple regex. This has the advantage that it provides an intuitive association of builds to issue keys. 
 * @member {Array.<String>} issueKeys
 */
BuildData.prototype['issueKeys'] = undefined;

/**
 * @member {module:model/TestInfo} testInfo
 */
BuildData.prototype['testInfo'] = undefined;

/**
 * Optional information that links a build to a commit, branch etc. 
 * @member {Array.<module:model/BuildReferences>} references
 */
BuildData.prototype['references'] = undefined;





/**
 * Allowed values for the <code>schemaVersion</code> property.
 * @enum {String}
 * @readonly
 */
BuildData['SchemaVersionEnum'] = {

    /**
     * value: "1.0"
     * @const
     */
    "1.0": "1.0"
};


/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
BuildData['StateEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "in_progress"
     * @const
     */
    "in_progress": "in_progress",

    /**
     * value: "successful"
     * @const
     */
    "successful": "successful",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"
};



export default BuildData;


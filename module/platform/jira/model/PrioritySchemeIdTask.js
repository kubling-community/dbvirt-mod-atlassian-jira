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
import JsonNode from './JsonNode';
import TaskProgressBeanJsonNode from './TaskProgressBeanJsonNode';

/**
 * The PrioritySchemeIdTask model module.
 * @module model/PrioritySchemeIdTask
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class PrioritySchemeIdTask {
    /**
     * Constructs a new <code>PrioritySchemeIdTask</code>.
     * The in-progress issue migration task.
     * @alias module:model/PrioritySchemeIdTask
     * @implements module:model/TaskProgressBeanJsonNode
     * @param elapsedRuntime {Number} The execution time of the task, in milliseconds.
     * @param id {String} The ID of the task.
     * @param lastUpdate {Number} A timestamp recording when the task progress was last updated.
     * @param progress {Number} The progress of the task, as a percentage complete.
     * @param self {String} The URL of the task.
     * @param status {module:model/PrioritySchemeIdTask.StatusEnum} The status of the task.
     * @param submitted {Number} A timestamp recording when the task was submitted.
     * @param submittedBy {Number} The ID of the user who submitted the task.
     */
    constructor(elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy) { 
        TaskProgressBeanJsonNode.initialize(this, elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy);
        PrioritySchemeIdTask.initialize(this, elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy) { 
        obj['elapsedRuntime'] = elapsedRuntime;
        obj['id'] = id;
        obj['lastUpdate'] = lastUpdate;
        obj['progress'] = progress;
        obj['self'] = self;
        obj['status'] = status;
        obj['submitted'] = submitted;
        obj['submittedBy'] = submittedBy;
    }

    /**
     * Constructs a <code>PrioritySchemeIdTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrioritySchemeIdTask} obj Optional instance to populate.
     * @return {module:model/PrioritySchemeIdTask} The populated <code>PrioritySchemeIdTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrioritySchemeIdTask();
            TaskProgressBeanJsonNode.constructFromObject(data, obj);

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('elapsedRuntime')) {
                obj['elapsedRuntime'] = ApiClient.convertToType(data['elapsedRuntime'], 'Number');
            }
            if (data.hasOwnProperty('finished')) {
                obj['finished'] = ApiClient.convertToType(data['finished'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lastUpdate')) {
                obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], JsonNode);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('started')) {
                obj['started'] = ApiClient.convertToType(data['started'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('submitted')) {
                obj['submitted'] = ApiClient.convertToType(data['submitted'], 'Number');
            }
            if (data.hasOwnProperty('submittedBy')) {
                obj['submittedBy'] = ApiClient.convertToType(data['submittedBy'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrioritySchemeIdTask</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrioritySchemeIdTask</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrioritySchemeIdTask.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          JsonNode.validateJSON(data['result']);
        }
        // ensure the json data is a string
        if (data['self'] && !(typeof data['self'] === 'string' || data['self'] instanceof String)) {
            throw new Error("Expected the field `self` to be a primitive type in the JSON string but got " + data['self']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

PrioritySchemeIdTask.RequiredProperties = ["elapsedRuntime", "id", "lastUpdate", "progress", "self", "status", "submitted", "submittedBy"];

/**
 * The description of the task.
 * @member {String} description
 */
PrioritySchemeIdTask.prototype['description'] = undefined;

/**
 * The execution time of the task, in milliseconds.
 * @member {Number} elapsedRuntime
 */
PrioritySchemeIdTask.prototype['elapsedRuntime'] = undefined;

/**
 * A timestamp recording when the task was finished.
 * @member {Number} finished
 */
PrioritySchemeIdTask.prototype['finished'] = undefined;

/**
 * The ID of the task.
 * @member {String} id
 */
PrioritySchemeIdTask.prototype['id'] = undefined;

/**
 * A timestamp recording when the task progress was last updated.
 * @member {Number} lastUpdate
 */
PrioritySchemeIdTask.prototype['lastUpdate'] = undefined;

/**
 * Information about the progress of the task.
 * @member {String} message
 */
PrioritySchemeIdTask.prototype['message'] = undefined;

/**
 * The progress of the task, as a percentage complete.
 * @member {Number} progress
 */
PrioritySchemeIdTask.prototype['progress'] = undefined;

/**
 * The result of the task execution.
 * @member {module:model/JsonNode} result
 */
PrioritySchemeIdTask.prototype['result'] = undefined;

/**
 * The URL of the task.
 * @member {String} self
 */
PrioritySchemeIdTask.prototype['self'] = undefined;

/**
 * A timestamp recording when the task was started.
 * @member {Number} started
 */
PrioritySchemeIdTask.prototype['started'] = undefined;

/**
 * The status of the task.
 * @member {module:model/PrioritySchemeIdTask.StatusEnum} status
 */
PrioritySchemeIdTask.prototype['status'] = undefined;

/**
 * A timestamp recording when the task was submitted.
 * @member {Number} submitted
 */
PrioritySchemeIdTask.prototype['submitted'] = undefined;

/**
 * The ID of the user who submitted the task.
 * @member {Number} submittedBy
 */
PrioritySchemeIdTask.prototype['submittedBy'] = undefined;


// Implement TaskProgressBeanJsonNode interface:
/**
 * The description of the task.
 * @member {String} description
 */
TaskProgressBeanJsonNode.prototype['description'] = undefined;
/**
 * The execution time of the task, in milliseconds.
 * @member {Number} elapsedRuntime
 */
TaskProgressBeanJsonNode.prototype['elapsedRuntime'] = undefined;
/**
 * A timestamp recording when the task was finished.
 * @member {Number} finished
 */
TaskProgressBeanJsonNode.prototype['finished'] = undefined;
/**
 * The ID of the task.
 * @member {String} id
 */
TaskProgressBeanJsonNode.prototype['id'] = undefined;
/**
 * A timestamp recording when the task progress was last updated.
 * @member {Number} lastUpdate
 */
TaskProgressBeanJsonNode.prototype['lastUpdate'] = undefined;
/**
 * Information about the progress of the task.
 * @member {String} message
 */
TaskProgressBeanJsonNode.prototype['message'] = undefined;
/**
 * The progress of the task, as a percentage complete.
 * @member {Number} progress
 */
TaskProgressBeanJsonNode.prototype['progress'] = undefined;
/**
 * The result of the task execution.
 * @member {module:model/JsonNode} result
 */
TaskProgressBeanJsonNode.prototype['result'] = undefined;
/**
 * The URL of the task.
 * @member {String} self
 */
TaskProgressBeanJsonNode.prototype['self'] = undefined;
/**
 * A timestamp recording when the task was started.
 * @member {Number} started
 */
TaskProgressBeanJsonNode.prototype['started'] = undefined;
/**
 * The status of the task.
 * @member {module:model/TaskProgressBeanJsonNode.StatusEnum} status
 */
TaskProgressBeanJsonNode.prototype['status'] = undefined;
/**
 * A timestamp recording when the task was submitted.
 * @member {Number} submitted
 */
TaskProgressBeanJsonNode.prototype['submitted'] = undefined;
/**
 * The ID of the user who submitted the task.
 * @member {Number} submittedBy
 */
TaskProgressBeanJsonNode.prototype['submittedBy'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PrioritySchemeIdTask['StatusEnum'] = {

    /**
     * value: "ENQUEUED"
     * @const
     */
    "ENQUEUED": "ENQUEUED",

    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING",

    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "CANCEL_REQUESTED"
     * @const
     */
    "CANCEL_REQUESTED": "CANCEL_REQUESTED",

    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",

    /**
     * value: "DEAD"
     * @const
     */
    "DEAD": "DEAD"
};



export default PrioritySchemeIdTask;


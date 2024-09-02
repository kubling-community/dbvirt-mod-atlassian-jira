import IssuesApi from "./platform/jira/api/IssuesApi";
import ProjectCategoriesApi from "./platform/jira/api/ProjectCategoriesApi";
import ProjectComponentsApi from "./platform/jira/api/ProjectComponentsApi";
import ProjectEmailApi from "./platform/jira/api/ProjectEmailApi";
import ProjectPropertiesApi from "./platform/jira/api/ProjectPropertiesApi";
import ProjectRolesApi from "./platform/jira/api/ProjectRolesApi";
import ProjectsApi from "./platform/jira/api/ProjectsApi";
import ProjectVersionsApi from "./platform/jira/api/ProjectVersionsApi";
import SprintApi from "./platform/jira/api/SprintApi";
import IssueUpdateDetails from "./platform/jira/model/IssueUpdateDetails";
import ProjectEmailAddress from "./platform/jira/model/ProjectEmailAddress";
import { baseInsertCallback } from "./utils/AtlassianAPIUtils";
import { functionMatches, isNotUndefinedOrNull } from "./utils/Utils";

const hadlers = {

    JIRA_USER: function() {
      throw new Error('JIRA_USER table does not support UPDATE');
    },
    JIRA_BOARD: function() {
      throw new Error('JIRA_BOARD table does not support UPDATE');
    },
    JIRA_BOARD_EPIC: function() {
      var api = new IssuesApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        var details = new IssueUpdateDetails();
        details.fields = JSON.parse(partials[pos]);        
        api.editIssue(JSON.parse(element).id, details, {}, baseInsertCallback);
        pos++;
      }
    },
    JIRA_BOARD_ISSUE: function() {
      // How to udate issues?
      throw new Error('Not implemented yet.');
    },
    JIRA_BOARD_SPRINT: function() {
      var api = new SprintApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        api.partiallyUpdateSprint(JSON.parse(element).id, JSON.parse(partials[pos]), baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT: function() {
      var api = new ProjectsApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        api.updateProject(JSON.parse(element).id, JSON.parse(partials[pos]), {}, baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_CATEGORY: function() {
      var api = new ProjectCategoriesApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        api.updateProjectCategory(JSON.parse(element).id, JSON.parse(partials[pos]), baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_COMPONENT: function() {
      var api = new ProjectComponentsApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        api.updateComponent(JSON.parse(element).id, JSON.parse(partials[pos]), baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_EMAIL: function() {
      var api = new ProjectEmailApi();
      var pos = 0;
      for (var element of updateOperation.jsonList.array()) {
        var jsonElement = JSON.parse(element);        
        api.updateProjectEmail(jsonElement.projectId, ProjectEmailAddress.constructFromObject(jsonElement, null), baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_FEATURE: function() {
      // How to udate this?
      throw new Error('Not implemented yet.');
    },
    JIRA_PROJECT_PERMISSION_SCHEME: function() {
      throw new Error('JIRA_PROJECT_PERMISSION_SCHEME table does not support UPDATE');
    },
    JIRA_PROJECT_ISSUE_SECURITY_SCHEME: function() {
      throw new Error('JIRA_PROJECT_ISSUE_SECURITY_SCHEME table does not support UPDATE');
    },
    JIRA_PROJECT_SECURITY_LEVEL: function() {
      throw new Error('JIRA_PROJECT_SECURITY_LEVEL table does not support UPDATE');
    },
    JIRA_PROJECT_PROPERTY: function() {
      var api = new ProjectPropertiesApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        var partial = JSON.parse(partials[pos]);
        api.setProjectProperty(JSON.parse(element).project, partial.key, partial.value, baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_ROLE: function() {
      var api = new ProjectRolesApi();
      var pos = 0;
      var partials = updateOperation.partialJsonList.array();
      for (var element of updateOperation.jsonList.array()) {
        api.partialUpdateProjectRole(JSON.parse(element).projectId, JSON.parse(partials[pos]), baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_VERSION: function() {
      var api = new ProjectVersionsApi();
      var pos = 0;
      for (var element of updateOperation.jsonList.array()) {
        var jsonElement = JSON.parse(element);
        api.updateVersion(jsonElement.id, jsonElement, baseInsertCallback);
        pos++;
      }
    },
    JIRA_PROJECT_VERSION_RELATED_WORK: function() {
      var api = new ProjectVersionsApi();
      var pos = 0;
      for (var element of updateOperation.jsonList.array()) {
        var jsonElement = JSON.parse(element);
        api.updateRelatedWork(jsonElement.issueId, jsonElement, baseInsertCallback);
        pos++;
      }
    }
}

print('UPDATE Operation received:\n' + updateOperation.jsonList.stringify());
const func = Object.values(hadlers)
    .find(f => functionMatches(f, updateOperation.table));

if (isNotUndefinedOrNull(func)) func();
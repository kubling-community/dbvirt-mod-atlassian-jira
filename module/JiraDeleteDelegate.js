import BoardApi from "./platform/jira/api/BoardApi";
import IssuesApi from "./platform/jira/api/IssuesApi";
import ProjectCategoriesApi from "./platform/jira/api/ProjectCategoriesApi";
import ProjectComponentsApi from "./platform/jira/api/ProjectComponentsApi";
import ProjectPropertiesApi from "./platform/jira/api/ProjectPropertiesApi";
import ProjectRolesApi from "./platform/jira/api/ProjectRolesApi";
import ProjectsApi from "./platform/jira/api/ProjectsApi";
import ProjectVersionsApi from "./platform/jira/api/ProjectVersionsApi";
import SprintApi from "./platform/jira/api/SprintApi";
import UsersApi from "./platform/jira/api/UsersApi";
import { baseInsertCallback } from "./utils/AtlassianAPIUtils";
import { functionMatches, isNotUndefinedOrNull } from "./utils/Utils";

const hadlers = {

    JIRA_USER: function() {
      var api = new UsersApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.removeUser(JSON.parse(element).accountId, {}, baseInsertCallback);
      }
    },
    JIRA_BOARD: function() {
      var api = new BoardApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteBoard(JSON.parse(element).id,baseInsertCallback);
      }
    },
    JIRA_BOARD_EPIC: function() {
      var api = new IssuesApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteIssue(JSON.parse(element).id, baseInsertCallback);
      }
    },
    JIRA_BOARD_ISSUE: function() {
      var api = new IssuesApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteIssue(JSON.parse(element).id, baseInsertCallback);
      }
    },
    JIRA_BOARD_SPRINT: function() {
      var api = new SprintApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteSprint(JSON.parse(element).id, baseInsertCallback);
      }
    },
    JIRA_PROJECT: function() {
      var api = new ProjectsApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteProject(JSON.parse(element).id, {}, baseInsertCallback);
      }
    },
    JIRA_PROJECT_CATEGORY: function() {
      var api = new ProjectCategoriesApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.removeProjectCategory(JSON.parse(element).id, baseInsertCallback);
      }
    },
    JIRA_PROJECT_COMPONENT: function() {
      var api = new ProjectComponentsApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteComponent(JSON.parse(element).id, {}, baseInsertCallback);
      }
    },
    JIRA_PROJECT_EMAIL: function() {
      throw new Error('JIRA_PROJECT_EMAIL table does not support DELETE');
    },
    JIRA_PROJECT_FEATURE: function() {
      throw new Error('JIRA_PROJECT_FEATURE table does not support DELETE');
    },
    JIRA_PROJECT_PERMISSION_SCHEME: function() {
      throw new Error('JIRA_PROJECT_PERMISSION_SCHEME table does not support DELETE');
    },
    JIRA_PROJECT_ISSUE_SECURITY_SCHEME: function() {
      throw new Error('JIRA_PROJECT_ISSUE_SECURITY_SCHEME table does not support DELETE');
    },
    JIRA_PROJECT_SECURITY_LEVEL: function() {
      throw new Error('JIRA_PROJECT_SECURITY_LEVEL table does not support DELETE');
    },
    JIRA_PROJECT_PROPERTY: function() {
      var api = new ProjectPropertiesApi();
      for (var element of deleteOperation.jsonList.array()) {
        var jsonElement = JSON.parse(element);
        api.deleteProjectProperty(jsonElement.project, jsonElement.key, baseInsertCallback);
      }
    },
    JIRA_PROJECT_ROLE: function() {
      var api = new ProjectRolesApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteProjectRole(JSON.parse(element).id, {}, baseInsertCallback);
      }
    },
    JIRA_PROJECT_VERSION: function() {
      var api = new ProjectVersionsApi();
      for (var element of deleteOperation.jsonList.array()) {
        api.deleteVersion(JSON.parse(element).id, {}, baseInsertCallback);
      }
    },
    JIRA_PROJECT_VERSION_RELATED_WORK: function() {
      var api = new ProjectVersionsApi();
      for (var element of deleteOperation.jsonList.array()) {
        var jsonElement = JSON.parse(element);
        api.deleteRelatedWork(jsonElement.version, jsonElement.relatedWorkId, baseInsertCallback);
      }
    }
}

print('DELETE Operation received:\n' + deleteOperation.jsonList.stringify());
const func = Object.values(hadlers)
    .find(f => functionMatches(f, deleteOperation.table));

if (isNotUndefinedOrNull(func)) func();
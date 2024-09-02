import ProjectCategoriesApi from "./platform/jira/api/ProjectCategoriesApi";
import ProjectComponentsApi from "./platform/jira/api/ProjectComponentsApi";
import ProjectEmailApi from "./platform/jira/api/ProjectEmailApi";
import ProjectPropertiesApi from "./platform/jira/api/ProjectPropertiesApi";
import ProjectRolesApi from "./platform/jira/api/ProjectRolesApi";
import ProjectsApi from "./platform/jira/api/ProjectsApi";
import ProjectVersionsApi from "./platform/jira/api/ProjectVersionsApi";
import UsersApi from "./platform/jira/api/UsersApi";
import CreateProjectDetails from "./platform/jira/model/CreateProjectDetails";
import CreateUpdateRoleRequestBean from "./platform/jira/model/CreateUpdateRoleRequestBean";
import NewUserDetails from "./platform/jira/model/NewUserDetails";
import { baseInsertCallback } from "./utils/AtlassianAPIUtils";
import { functionMatches, isNotUndefinedOrNull } from "./utils/Utils";

var newElement = JSON.parse(insertOperation.jsonList.getFirst());

const handlers = {

    JIRA_USER: function() {

      var api = new UsersApi();
      newElement.products = ["jira-software"];
      api.createUser(NewUserDetails.constructFromObject(newElement, null), baseInsertCallback);

    },
    JIRA_BOARD: function() {
      // It needs a filterID which make it very difficult to handle in an INSERT, everything seems to be meant
      // for the UI
      throw new Error('JIRA_BOARD table does not support INSERT');
    },
    JIRA_BOARD_EPIC: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_BOARD_ISSUE: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_BOARD_SPRINT: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_PROJECT: function() {
      var pd = CreateProjectDetails.constructFromObject(newElement, null);
      pd.leadAccountId = isNotUndefinedOrNull(newElement.lead) ? newElement.lead.accountId : null;
      pd.lead = null;
      var api = new ProjectsApi();
      api.createProject(pd, baseInsertCallback);
    },
    JIRA_PROJECT_CATEGORY: function() {    
      var api = new ProjectCategoriesApi();
      api.createProjectCategory(newElement, baseInsertCallback);
    },
    JIRA_PROJECT_COMPONENT: function() {
      var api = new ProjectComponentsApi();
      api.createComponent(newElement, baseInsertCallback);
    },
    JIRA_PROJECT_EMAIL: function() {
      var api = new ProjectEmailApi();
      api.updateProjectEmail(newElement.projectId, newElement, baseInsertCallback);
    },
    JIRA_PROJECT_FEATURE: function() {
      throw new Error('JIRA_PROJECT_FEATURE table does not support INSERT');
    },
    JIRA_PROJECT_PERMISSION_SCHEME: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_PROJECT_ISSUE_SECURITY_SCHEME: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_PROJECT_SECURITY_LEVEL: function() {
      throw new Error('Not implemented yet.');
    },
    JIRA_PROJECT_PROPERTY: function() {
      var api = new ProjectPropertiesApi();
      api.setProjectProperty(newElement.project, newElement.key, newElement.value, baseInsertCallback);
    },
    JIRA_PROJECT_ROLE: function() {
      var api = new ProjectRolesApi();
      var bean = new CreateUpdateRoleRequestBean();
      bean.name = newElement.name;
      bean.description = newElement.description;
      api.createProjectRole(bean, baseInsertCallback);
    },
    JIRA_PROJECT_VERSION: function() {
      var api = new ProjectVersionsApi();
      api.createVersion(newElement, baseInsertCallback);
    },
    JIRA_PROJECT_VERSION_RELATED_WORK: function() {
      var api = new ProjectVersionsApi();
      api.createRelatedWork()
    }
}

print('Operation received:\n' + insertOperation.json);
const func = Object.values(handlers)
    .find(f => functionMatches(f, insertOperation.table));

if (isNotUndefinedOrNull(func)) func();
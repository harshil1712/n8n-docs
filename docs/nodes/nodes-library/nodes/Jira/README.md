---
permalink: /nodes/n8n-nodes-base.jira
description: Learn how to use the Jira node in n8n
---

# Jira

[Jira](https://www.atlassian.com/software/jira) is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Jira/README.md).
:::

## Basic Operations

::: details Issue
- Create a new issue
- Update an issue
- Get an issue
- Get all issues
- Get issue changelog
- Create an email notification for an issue and add it to the mail queue
- Return either all transitions or a transition that can be performed by the user on an issue, based on the issue's status
- Delete an issue
:::

## Example Usage

This workflow allows you to create a new issue in Jira. You can also find the [workflow](https://n8n.io/workflows/459) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Jira]()

The final workflow should look like the following image.

![A workflow with the Jira node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Jira node

1. First of all, you'll have to enter credentials for the Jira node. You can find out how to do that [here](../../../credentials/Jira/README.md).
2. Select your project from the dropdown list for the *Project* field.
3. Select an issue type from the dropdown list for the *Issue Type* field.
4. Enter the summary of the issue in the *Summary* field.
5. Click on *Execute Node* to run the workflow.


## Further Reading

- [Creating Custom Incident Response Workflows with n8n 🚨](https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9)

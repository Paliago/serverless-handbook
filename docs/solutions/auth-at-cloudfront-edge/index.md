---
title: "Authorization with Lambda@Edge"
category: "solution"
lastUpdated: 2025-09-09
---

# Authorization with Lambda@Edge

![Cover Image.](./images/cover-image.png)

In this solution you will use StepFunctions HTTP EndPOint state to post a message to Slack.

## Deep Dive

For a full deep dive visit [Protecting a Static Website with JWT and Lambda@Edge](https://jimmydqv.com/cloudfront-serverless-auth/index.html)

## Cost

As this solution is 100% serverless the cost for building and running this tutorial is very low and the cost has a direct correlation to usage. There are no components that cost by the hour, you only pay for what you use / invoke.

## Before you start

The following need to be available on your computer:

* [Install SAM Cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

Now, Let's go build!

## Introduction

This solution will use Lambda@Edge and Cognito User Pools to authorize calls made to CloudFront and static content.

Solution overview:  

![Image showing the overview.](./images/overview.png)

### CloudFront integration points

There are four different integration points for Lambda@Edge and you can only set one Lambda function as target for each. The integration is done on the cache behavior so if you have several cache behaviors you can setup integration with different functions for each of them. So how does each integration point work?

__Viewer Request__ The Lambda function is invoked as soon as CloudFront receives the call from the client. This function will be invoked on every request.  
__Origin Request__ The Lambda function is invoked after the cache and before CloudFront calls the origin. The function will only be invoked if there is a cache miss.  
__Origin Response__ The Lambda function is invoked after CloudFront receives the response from the origin and before data is stored in the cache.  
__Viewer Response__ The Lambda function is invoked before CloudFront forwards the response to the client.  

In this solution will we only use the __Viewer Request__ integration point.

![Image showing the integration points for Lambda@Edge.](./images/cloudfront-integration-points.png)

## Configuration Files

Before deploying, you'll need to create and configure the following SAM configuration files:

### EU North 1 UserPool Configuration

Create `eu-north-1/UserPool/samconfig.yaml`:

```yaml
version: 0.1
prod:
  global:
    parameters:
      stack_name: serverless-auth-user-pool
      region: eu-north-1
      confirm_changeset: false
      capabilities: CAPABILITY_NAMED_IAM
      s3_prefix: serverless-auth-user-pool
      resolve_s3: true
  deploy:
    parameters:
      parameter_overrides:
        - Environment=prod
        - ApplicationName=serverless-auth
        - DomainName=your-domain.com
        - HostedAuthDomainPrefix=your-auth-prefix
        - UserPoolSecretName=/serverless-auth/user-pool-secret
```

### US East 1 Lambda@Edge Configuration

Create `us-east-1/samconfig.yaml`:

```yaml
version: 0.1
prod:
  global:
    parameters:
      stack_name: serverless-auth-lambda-edge
      region: us-east-1
      confirm_changeset: false
      capabilities: CAPABILITY_NAMED_IAM
      s3_prefix: serverless-auth-lambda-edge
      resolve_s3: true
  deploy:
    parameters:
      parameter_overrides:
        - Environment=prod
        - ApplicationName=serverless-auth
        - DomainName=your-domain.com
        - HostedZoneId=YOUR_HOSTED_ZONE_ID
        - SecretArn=arn:aws:secretsmanager:us-east-1:YOUR_ACCOUNT:secret:your-secret-name
        - SecretName=/serverless-auth/user-pool-secret
        - UserPoolId=YOUR_USER_POOL_ID
        - UserPoolHostedUiUrl=https://your-auth-prefix.auth.eu-north-1.amazoncognito.com/login
        - UserPoolOauthEndpoint=https://your-auth-prefix.auth.eu-north-1.amazoncognito.com/oauth2/token
        - SsmParametersArn=arn:aws:ssm:eu-north-1:YOUR_ACCOUNT:parameter/prod/serverlessAuth/*
```

### EU North 1 CloudFront Distribution Configuration

Create `eu-north-1/CloudFrontDistribution/samconfig.yaml`:

```yaml
version: 0.1
prod:
  global:
    parameters:
      stack_name: serverless-auth-infra
      region: eu-north-1
      confirm_changeset: false
      capabilities: CAPABILITY_NAMED_IAM
      s3_prefix: serverless-auth-infra
      resolve_s3: true
  deploy:
    parameters:
      parameter_overrides:
        - Environment=prod
        - ApplicationName=serverless-auth
        - DomainName=your-domain.com
        - HostedZoneId=YOUR_HOSTED_ZONE_ID
        - BucketNameSuffix=content
        - SSLCertificateArn=arn:aws:acm:us-east-1:YOUR_ACCOUNT:certificate/YOUR_CERT_ID
        - SignInFunctionArn=arn:aws:lambda:us-east-1:YOUR_ACCOUNT:function:signin-function:VERSION
        - SignOutFunctionArn=arn:aws:lambda:us-east-1:YOUR_ACCOUNT:function:signout-function:VERSION
        - AuthorizeFunctionArn=arn:aws:lambda:us-east-1:YOUR_ACCOUNT:function:authorize-function:VERSION
        - RefreshFunctionArn=arn:aws:lambda:us-east-1:YOUR_ACCOUNT:function:refresh-function:VERSION
        - IndexPathFunctionArn=arn:aws:lambda:us-east-1:YOUR_ACCOUNT:function:index-function:VERSION
```

## Deploying the solution

This solution shows how to setup everything in a different region than us-east-1.

### Step 1: Deploy UserPool in eu-north-1

Update the configuration values in `eu-north-1/UserPool/samconfig.yaml` with your specific values, then deploy:

``` bash
sam deploy --config-env prod --template-file eu-north-1/UserPool/template.yaml 
```

### Step 2: Deploy Lambda@Edge functions in us-east-1

Update the configuration values in `us-east-1/samconfig.yaml` with your specific values, then deploy:

``` bash
sam deploy --config-env prod --template-file us-east-1/template.yaml
```

### Step 3: Deploy CloudFront Distribution in eu-north-1

Update the configuration values in `eu-north-1/CloudFrontDistribution/samconfig.yaml` with the Lambda function ARNs from Step 2, then deploy:

``` bash
sam deploy --config-env prod --template-file eu-north-1/CloudFrontDistribution/template.yaml
```

## Clean up

To clean everything up delete the CloudFormation stack. This can be done either with SAM Cli command

``` bash
sam delete --stack-name TEXT
```

Or from the [AWS Console](https://eu-west-1.console.aws.amazon.com/cloudformation/home?region=eu-north-1#/stacks)

## Final words

For a full deep dive visit [my blog post on this topic](https://jimmydqv.com/cloudfront-serverless-auth/index.html)
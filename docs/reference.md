# Reference

Technical details on all the AWS primitives Waffle deploys for each Docker image that you can easily manage in AWS, code, or our simple UI.

All of this is modular and customizable and can be extended, adjusted, or replaced as you scale.

## Hosting on ECS Fargate

A serverless container hosting service on AWS that is noted for its cost-effectiveness and massive scalability. See <a href='https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html' target='_blank'>AWS documentation</a> or <a href='https://www.reddit.com/r/aws/comments/1e54bl0/whats_yalls_experience_with_ecs_fargate/' target=_blank>this Reddit post</a> for more info.

ECS Fargate is augmented with load balancing and autoscaling, with SSL and DNS:

### Elastic Application Load Balancer

This distributes incoming traffic so your application loads faster and performs better. See <a href='https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html' target='_blank'>AWS documentation</a> for more information.

### Application Autoscaling

Autoscaling does what you think - it automatically scales your infra according to policies you can manage in AWS or our UI. See <a href='https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html'>AWS documentation</a> for more information.

### SSL via Certificate Manager

### DNS via Amazon Route 53

Easy way to host and add a custom URL.

## Deployment Ops via CodeBuild

### CodeBuild CICD

### Git Connection via CodeStar

## Enterprise-Grade Security Defaults

### Virtual Private Cloud

For secure networking, everything is hosted in a VPC.

### Monitoring, Logging, Alarms via CloudWatch

### Notifications (email, Slack, etc.) via AWS SNS

### IAM Roles and Policies

### Encryption via AWS Key Management System


# Reference

Technical details on all the AWS primitives Waffle deploys for each Docker image that you can easily manage in AWS, code, or our simple UI.

All of this is modular and customizable and can be extended, adjusted, or replaced as you scale.

## Hosting on ECS Fargate

A serverless container hosting service on AWS that is noted for its cost-effectiveness and massive scalability. You can adjust the CPU, RAM, and number of instances, as well as set up autoscaling. See <a href='https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html' target='_blank'>AWS documentation</a> or <a href='https://www.reddit.com/r/aws/comments/1e54bl0/whats_yalls_experience_with_ecs_fargate/' target=_blank>this Reddit post</a> for more info.

ECS Fargate is augmented with load balancing and autoscaling, with automatically provisioned DNS and SSL:

### Elastic Application Load Balancer

This distributes incoming traffic so your application loads faster and performs better. See <a href='https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html' target='_blank'>AWS documentation</a> for more information.

### Application Autoscaling

Autoscaling does what you think - it automatically scales your infra. We set defaults, and you can adjust according to policies you can manage in AWS or our UI. See <a href='https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html' target='_blank'>AWS documentation</a> for more information.

### Domain Names & SSLs

We automatically generate a domain name for your service and SSL certificate, but you can also easily add a custom URL. DNS is built by Amazon Route 53 (documentation <a href='https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html' target='_blank'>here</a>), and SSL is built with Certificate Manager (documentation <a href='https://aws.amazon.com/certificate-manager/' target='_blank'>here</a>).

## Secure, Scalable Deployment Ops

These are enterprise-security ready, but require no effort from you or change to your existing development and deployment processes.

### CodeBuild CI/CD

We build a secure CI/CD in AWS for every service you deploy. In the Waffle UI you can require manual CI/CD approvals if desired. You can also use this CI/CD in addition to Github actions or any other CI product. See <a href='https://docs.aws.amazon.com/codebuild/' target='_blank'>AWS documentation</a> for more information here.

### Git Connection via CodeStar

To securely connect Github with your CI/CD, we use AWS CodeStar. See <a href='https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html'>AWS documentation</a>for more information.

## Enterprise-Grade Security Defaults

These are sensible defaults that will get you past audits and security reviews, that would be a pain to set up later.

### Virtual Private Cloud

For secure networking, your service is hosted in a VPC. See <a href='https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html' target='_blank'>AWS documentation</a> for more information.

### Monitoring & Logging

We set up AWS Cloudwatch with sensible defaults for monitoring and logging, and logs are stored in S3. You can set your log retention days per service. AWS Cloudwatch documentation can be found <a href='https://docs.aws.amazon.com/cloudwatch/' target='_blank'>here</a>.

### Alarms (email, Slack, etc.)

Email notifications are set up by default via AWS Simple Notifications Service about things like being over a RAM and CPU threshold, experiencing a health-check blackout, or HTTP 5xx errors from the load balancer. It's easy to add additional alerts or Slack notifications as well. AWS SNS documentation can be found <a href='https://docs.aws.amazon.com/sns/' target='_blank'>here</a>. 

### Secrets Management

We automatically set up AWS Secrets Manager for storing private information, for example, credentials of 3rd party services. See Secrets Manager documentation <a href='https://docs.aws.amazon.com/secretsmanager/' target='_blank'>here</a>.

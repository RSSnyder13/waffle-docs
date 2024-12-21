# Introduction
Waffle gives developers a way to deploy SOC 2 compliant infrastructure to AWS, in one click. All AWS-native infrastructure; no lock-in or external dependencies.
# When Startups Use Waffle
Startups often need to move their stack from [Vercel](https://www.reddit.com/r/nextjs/comments/1691ohv/fyi_if_youre_seeking_security_compliance_dont_use/), [Heroku](https://news.ycombinator.com/item?id=36820521), or whatever MVP stack they're using to AWS for scalability, costs, & SOC 2 compliance. This often takes months of eng effort and/or consultants. Instead, Waffle makes this simple, whether or not you have AWS expertise.
<br><br>Note that you will still need to get a SOC 2 checklist software (e.g., Vanta, Drata) for your audit. Waffle makes sure you turn their lights green, with no engineering effort.
# How Waffle Works
Waffle creates and deploys CloudFormation files into your AWS account. These CloudFormation files orchestrate the many different AWS services required for SOC 2 compliance. 
Suppported infrastructure includes:
<ol><li>next.js SSR servers
  <li>node.js express servers
    <li>python FastAPI servers
      <li>java spring boot servers
        <li>web app frontends
          <li>SQL databases
            <li>...and more
</ol></li> The point? Deploy whatever infrastructure you want in one click using Waffle; Waffle makes sure the infrastructure is SOC 2 compliant and stays SOC 2 compliant, without you having to spend a ton of time in AWS or money on consultants.

# Requirements
For now, Waffle's UI only works with Dockerized backend services. If you have anything other than a dockerized service - reach out and we can support you manually - greg@wafflecode.com

# Getting Started
When you first log in to Waffle, we hook you up with a four-step onboarding flow to connect your AWS and Git provider, then deploy your first SOC 2 compliant service. This takes about fifteen minutes (10 of which are time spent waiting on AWS to create resources in Step 3). If you want 1:1 support just grab time with us [HERE](https://cal.com/greg_borgulya).
<br><br>
Start at [app.wafflecode.com](https://app.wafflecode.com/) (you'll need to verify email + MFA)
<br><br>
## Step 1: AWS Connection
You'll identify your AWS account number, the AWS region you want to deploy to, and whether your first deployment will be a prod or dev deployment. <br>
![image](https://github.com/user-attachments/assets/7911444f-fb64-4378-87ee-00ee982232d6)
<br><br>
You'll then upload a CloudFormation file Waffle provides to your AWS account, which lets you use Waffle to deploy infrastructure into your AWS account.
<ol><li>Download the CloudFormation file from Waffle
<li>Upload the template to <b>CloudFormation > Stacks > Create Stack</b><br>
  
  ![image](https://github.com/user-attachments/assets/9fb0b7ad-04a3-4d1f-864e-4cc7d2b11c34)
<li>Follow through the four-step process to create a CloudFormation Stack. Use the name "waffle-role" to provide a stack name, don't change the parameters, and click "Next" without changing anything in Steps 3 - 4 of the "Create Stack" flow in AWS<br>
  
  ![image](https://github.com/user-attachments/assets/c1a0dcb6-3443-422a-8a9d-a97be9711dcd)
<li>The only thing you need to do is, in Step 4, click the checkbox to acknolwedge IAM creation and then press Submit!<br>
  
  ![image](https://github.com/user-attachments/assets/288e03e2-7b0a-4584-9a3d-c9608dc8e4a4)
  <li>In Cloudformation > Stacks > waffle-role, you'll wait until the status goes from CREATE_IN_PROGRESS to CREATE_COMPLETE (this takes about a minute)<br>
    
    
  ![image](https://github.com/user-attachments/assets/c127e691-8f49-4ce3-855b-301e0019e2bd)
<li>Then return to the Waffle onboarding UI, click the "Check Connection" button, get the green light, then proceed! 
</li></ol>
<br><br>

## Step 2: Git Connection
Waffle supports connections to BitBucket, Github, and Gitlab. We connect these to your AWS account via AWS CodeStar - you will be brought into AWS to confirm this connection. Select your Git provider, name your connection, and then click on the Git connection to complete it via AWS CodeStar.

![image](https://github.com/user-attachments/assets/ce873592-8d53-4adf-8764-7bf6eaabc148)
<br><br>
## Step 3: Deploy a Secure Environment
<br>In this step, Waffle sets up all the resources you need to be able to deploy SOC 2 compliant services into your AWS account. This includes a Virtual Private Cloud, Secret Management, API Gateway, and more. You just have to click "Start Deployment" and wait a few minutes for AWS to do its thing.<br>
![image](https://github.com/user-attachments/assets/21c2fbe1-244e-4ea7-adb9-3d6dc2d091f5)
<br><br>
## Step 4: Deploy your First Service
<br>Now you're all ready to deploy services to AWS! This step will create a CICD pipeline in your AWS account, that pulls sources from your git provider using a git connection that has already been set up, and then deploys it as a docker container using the AWS ECS Fargate service.
<br>You'll just name your service, identify which Git connection you want to use, point Waffle to the right service, Git Branch, Dockerfile path, and service port... then press "deploy service" and voila! You're deployed and SOC 2 compliant. <br>
![image](https://github.com/user-attachments/assets/990426aa-a7bb-48fd-8b20-e3e47212a77a)
# Using Waffle
Now that you're set up with Waffle, you can quickly deploy new environments and services and manage the environments and services you've already deployed. Use the navigation menu on the left to do whatever it is your heart desires. <br>
![image](https://github.com/user-attachments/assets/3df2425d-3ddc-4032-8247-8c34425b126f)
<br>You can also invite teammates.
## Deploying a New Service
When you click "new service", you get taken through a simple 2-step process.
### Step 1: Service Name & Type
If you need anything custom, just reach out to greg@wafflecode.com or schedule time on our calendar [HERE](https://cal.com/greg_borgulya). If we don't currently have a service template that's fit for your needs, we'll create one! <br>
![image](https://github.com/user-attachments/assets/f18e8051-5310-41cb-8c3d-06c1fc27f43a)
### Step 2: Git Info
Indicate the Git repo, branch, etc. so we know which service to deploy. <br>
![image](https://github.com/user-attachments/assets/b1976599-06ce-4ef6-a477-efc66922cfdb)
## Accessing AWS Resources
From Waffle's Dashboard, you can easily navigate into any of the relevant parts of AWS - for example, setting up security logs, accessing your Secrets Manager, CICD pipelines, etc.<br>
![image](https://github.com/user-attachments/assets/1dff825b-ea21-450b-9d43-ddb4226673d5)

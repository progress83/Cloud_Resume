Read.md

# RESUME 
This repository contains steps in completing my AWS Cloud Resume Challenge.

### CI/CD PIPELINE
2 Stages Code Pipeline Project Objectives

Setup a two stages CI/CD pipeline using CodePipeline to automatically deploy a static website of my Resume on amazon S3 bucket.
The website will display my Resume.
My code will be Sourced from my personal Github account.
HTTPS-secured website with AWS Certificate Manager (ACM)
---

### GitHub Repository
Create a repository in GitHub  and clone it with your Local Repository in Git and Push your Index.html file to your Source Stage (GitHub Repository)

[![GitHub Repository](./images/repo.png)]

---

### S3 Bucket
Set up your S3 Bucket to host your website and its accessed via CloudFront only.
NOTE.Do not allow Public Network access into the Bucket

[![Public Network access and bucket policy](./images/access.png)]

Enable Static website Hosting in your bucket

[![Enable Static website Hosting](./images/enabling.png)]

Add your bucket policy to give Permission

[![Add your bucket policy](./images/uploaded.png)]

---

### CloudFront
Create a CloudFront CDN for fast global delivery.

[![CloudFront](./images/Cloudfront.png)]


### Automatic deployment via CodePipeline
Create a CodePipeline and add your Source Stage (Github App).

[![CodePipeline](./images/pipeline.png)](images/pipeline.png)

---

### Cache invalidation after each deploy
validation my website immediatly i commit a file.

[![Cache invalidation](./images/Invalidation.png)]

---

### My Website
Website_Preview
[![Website](./images/display.png)](images/display.png)
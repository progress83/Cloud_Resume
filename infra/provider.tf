terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile ="default-tester"
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket         = "resume-just-html"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
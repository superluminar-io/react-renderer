ENV ?= stable
PREFIX ?= $(ENV)
VERSION ?= v0.0.0-dev
PROJECT_NAME := react-renderer

AWS_PROFILE ?= $(PROJECT_NAME)-$(ENV)
AWS_REGION ?= eu-central-1
AWS_NAME := $(PREFIX)-$(PROJECT_NAME)

MAX_CACHE := 10

build:
	@ yarn build

configure:
	@ aws s3api create-bucket \
		--profile $(AWS_PROFILE) \
		--region $(AWS_REGION) \
		--bucket $(AWS_NAME) \
		--create-bucket-configuration LocationConstraint=$(AWS_REGION) \
		|| echo "Cannot create S3 Bucket."

package:
	@ aws cloudformation package \
		--profile $(AWS_PROFILE) \
		--region $(AWS_REGION) \
		--template-file ./infra.yml \
		--s3-bucket $(AWS_NAME) \
		--output-template-file ./dist/stack.yml

deploy:
	@ aws cloudformation deploy \
		--profile $(AWS_PROFILE) \
		--region $(AWS_REGION) \
		--template-file ./dist/stack.yml \
		--capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
		--stack-name $(AWS_NAME) \
		--parameter-overrides \
			CacheTTL=$(MAX_CACHE)

describe:
	@ aws cloudformation describe-stacks \
		--profile $(AWS_PROFILE) \
		--region $(AWS_REGION) \
		--stack-name $(AWS_NAME) \
			$(if $(value QUERY), --query "$(QUERY)",) \
			$(if $(value FORMAT), --output "$(FORMAT)",)

outputs-%:
	@ QUERY="(Stacks[0].Outputs[?OutputKey=='$*'].OutputValue)[0]" \
		FORMAT=text \
		$(MAKE) describe
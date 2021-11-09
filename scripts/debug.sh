node --inspect ./node_modules/.bin/sls offline \
    --stage dev \
    --noTimeout \
    --config serverless.local.yml \
    --aws-profile raredex
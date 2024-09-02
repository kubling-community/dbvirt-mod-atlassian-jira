#!groovy
import java.time.Instant

pipeline {
    agent any
    options { timestamps () }
    stages {
        stage('Build and Publish') {
            environment {
                REPO_TOKEN = credentials('dbvirt-public-repo-token')
            }
            steps {
                script {
                    env.NOW_SECONDS = Instant.now().getEpochSecond()
                }
                sh """
                  docker run --rm  \\
                    -v ${env.WORKSPACE}:/modmount  \\
                    kubling/dbvirt-cli:latest bundle genmod /modmount/module -o /modmount/mymod.zip
                """

                sh """
                  docker run --rm  \\
                    -v ${env.WORKSPACE}:/modmount  \\
                    kubling/dbvirt-cli:latest bundle pubmod /modmount/mymod.zip -t $REPO_TOKEN
                """

                sh """ docker image rm kubling/dbvirt-cli:latest """

            }
        }
    }
}
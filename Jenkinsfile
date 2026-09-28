pipeline {
    agent any

    environment {
        LOCAL_IMAGE    = 'furniture-visualizer:latest'
        IMAGE_NAME     = 'furniture-visualizer'
        IMAGE_TAG      = 'latest'
        DOCKERHUB_REPO = 'furniture-visualizer'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '========================================================'
                echo ' Stage: Checkout Source Code from GitHub'
                echo '========================================================'
                checkout scm
                echo "Workspace: ${env.WORKSPACE}"
                sh 'node --version'
                sh 'npm --version'
                sh 'docker --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '========================================================'
                echo ' Stage 1: Installing Dependencies via npm ci'
                echo '========================================================'
                sh 'npm ci'
                echo 'Dependencies successfully installed.'
            }
        }

        stage('Build Application') {
            steps {
                echo '========================================================'
                echo ' Stage 2: Building Production React/Vite Bundle'
                echo '========================================================'
                sh 'npm run build'
                echo 'Verifying production dist/ directory...'
                sh 'ls -la dist/'
                echo 'React/Vite build completed successfully.'
            }
        }

        stage('Docker Build') {
            steps {
                echo '========================================================'
                echo ' Stage 3: Building Multi-Stage Docker Image'
                echo '========================================================'
                sh 'docker build -t furniture-visualizer:latest .'
                echo 'Docker image furniture-visualizer:latest built successfully.'
            }
        }

        stage('Docker Test') {
            steps {
                echo '========================================================'
                echo ' Stage 4: Verifying Built Docker Image'
                echo '========================================================'
                sh 'docker images furniture-visualizer'
                sh 'docker image inspect furniture-visualizer:latest > /dev/null && echo "Docker image verified in local Docker registry."'
            }
        }

        stage('Docker Hub Push') {
            steps {
                echo '========================================================'
                echo ' Stage 5: Secure Docker Hub Authentication & Push'
                echo '========================================================'
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_TOKEN'
                )]) {
                    // Retry up to 3 times to guard against transient registry network/TLS timeouts
                    retry(3) {
                        sh '''
                            echo 'Authenticating with Docker Hub...'
                            echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin

                            echo "Tagging image as ${DOCKERHUB_USERNAME}/furniture-visualizer:latest..."
                            docker tag furniture-visualizer:latest "${DOCKERHUB_USERNAME}/furniture-visualizer:latest"

                            echo "Pushing image to Docker Hub repository: ${DOCKERHUB_USERNAME}/furniture-visualizer:latest..."
                            docker push "${DOCKERHUB_USERNAME}/furniture-visualizer:latest"

                            echo 'Logging out from Docker Hub session...'
                            docker logout
                        '''
                    }
                    echo 'Docker image successfully pushed to Docker Hub!'
                }
            }
        }

    }

    post {
        always {
            // Defense-in-depth: Ensure Docker logout is executed even if the pipeline fails midway
            sh 'docker logout 2>/dev/null || true'
        }
        success {
            echo ''
            echo '========================================================'
            echo '  PIPELINE SUCCESSFUL!'
            echo '  GitHub -> Jenkins -> npm build -> Docker Build -> Docker Hub'
            echo '========================================================'
            echo ''
            echo 'Production image pushed to Docker Hub:'
            echo '  venkateshm237/furniture-visualizer:latest'
            echo ''
            echo 'To pull and run the published container on any server:'
            echo '  docker pull venkateshm237/furniture-visualizer:latest'
            echo '  docker run -d -p 8080:80 --name furniture-visualizer venkateshm237/furniture-visualizer:latest'
            echo ''
            echo 'Application URL: http://localhost:8080'
            echo '========================================================'
        }
        failure {
            echo ''
            echo '========================================================'
            echo '  PIPELINE FAILED!'
            echo '  Check the specific failed stage output above.'
            echo '========================================================'
        }
    }
}
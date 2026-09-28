pipeline {
    agent any

    environment {
        IMAGE_NAME     = 'furniture-visualizer'
        IMAGE_TAG      = 'latest'
        CONTAINER_NAME = 'furniture-app-smoke-test'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '========================================================'
                echo ' Stage 1: Checkout Source Code from GitHub'
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
                echo ' Stage 2: Installing Dependencies via npm ci'
                echo '========================================================'
                sh 'npm ci'
                echo 'Dependencies successfully installed.'
            }
        }

        stage('Build Application') {
            steps {
                echo '========================================================'
                echo ' Stage 3: Building Production React/Vite Bundle'
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
                echo ' Stage 4: Building Multi-Stage Docker Image'
                echo '========================================================'
                sh 'docker build -t furniture-visualizer:latest .'
                echo 'Docker image furniture-visualizer:latest built successfully.'
            }
        }

        stage('Docker Image Verify') {
            steps {
                echo '========================================================'
                echo ' Stage 5: Verifying Built Docker Image'
                echo '========================================================'
                sh 'docker images furniture-visualizer'
                echo 'Docker image verified in local Docker registry.'
            }
        }

        stage('Docker Smoke Test') {
            steps {
                echo '========================================================'
                echo ' Stage 6: Running Container Smoke Test'
                echo '========================================================'
                // Clean up any stale smoke-test container
                sh 'docker rm -f furniture-app-smoke-test 2>/dev/null || true'

                // Run temporary container in background
                sh 'docker run -d --name furniture-app-smoke-test -p 9090:80 furniture-visualizer:latest'

                // Wait 3 seconds for Nginx to initialize
                sh 'sleep 3'

                // Verify Nginx is serving the Furniture Studio HTML index
                sh "docker exec furniture-app-smoke-test wget -q -O - http://localhost:80 | grep -i 'Furniture Studio' && echo 'Smoke test PASSED: Application is live and serving HTML!' || (echo 'Smoke test FAILED' && exit 1)"

                // Clean up temporary container
                sh 'docker rm -f furniture-app-smoke-test'
                echo 'Smoke test container cleaned up successfully.'
            }
        }

    }

    post {
        success {
            echo ''
            echo '========================================================'
            echo '  PIPELINE SUCCESSFUL!'
            echo '  GitHub -> Jenkins -> npm build -> Docker image READY'
            echo '========================================================'
            echo ''
            echo 'Production Docker Image: furniture-visualizer:latest'
            echo ''
            echo 'To run the application manually:'
            echo '  docker run -d -p 8080:80 --name furniture-visualizer furniture-visualizer:latest'
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
        always {
            // Guarantee smoke test container cleanup
            sh 'docker rm -f furniture-app-smoke-test 2>/dev/null || true'
        }
    }
}
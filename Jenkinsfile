pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building furniture visualizer...'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t furniture-visualizer:latest .'
            }
        }

        stage('Docker Test') {
            steps {
                echo 'Checking Docker image...'
                sh 'docker images furniture-visualizer'
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESSFUL - Jenkins + Docker pipeline completed!'
        }

        failure {
            echo 'BUILD FAILED - Check the Jenkins console output.'
        }
    }
}
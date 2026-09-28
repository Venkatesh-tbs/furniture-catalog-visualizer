pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building furniture visualizer...'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t furniture-visualizer:latest .'
            }
        }

        stage('Docker Test') {
            steps {
                echo 'Checking Docker image...'
                bat 'docker images furniture-visualizer'
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
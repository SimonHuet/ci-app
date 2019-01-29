pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm install'
          }
        }
        stage('Tests') {
          steps {
            sh 'npm test'
          }
        }
      }
    }
  }
}
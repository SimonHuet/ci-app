pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo (' Building ')
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps {
        echo (' Testing ')
        sh 'npm test'
      }
    }
  }
}